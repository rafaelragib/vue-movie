import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {userType } from '../models/userModel';
import { watchType } from '../models/watchModel'
import mongoose from 'mongoose';
import { Request, Response } from 'express';
export const userController = (user: mongoose.Model<userType>,watchList:mongoose.Model<watchType>) => {
    async function createUser(req: any, res: any) {
        try {
            const hashedPass = bcrypt.hashSync(req.body.password, 8);
    
            const newUser = await user.create({
                'username': req.body.username,
                'password': hashedPass
            })
            if (newUser) {

                const secret = process.env.secretKey;
                if (typeof secret === 'undefined')
                    throw Error;
                const jwtToken = jwt.sign({ id: newUser._id }, secret, {
                    expiresIn: 86400
                })
                const newWatchList= await watchList.create({
                    'userId':newUser._id,
                    'watchList': [] as string[]
                });
                if(!newWatchList){
                    res.status(500);
                    return res.send('Server Error');
                }
                res.status(200);
                return res.send({ auth: true, token: jwtToken });

            }
        }
        catch (error) {
            res.status(500);
            return res.send(error);
        }
    }
    async function login(req: Request, res: Response) {
        try {
            if (typeof req.body.username !== 'string')
                throw Error;

            const queryUser = await user.findOne({
                'username': req.body.username
            });
          
            if (queryUser) {

                const isPasswordValid = bcrypt.compareSync(req.body.password, queryUser.password);

                if (!isPasswordValid)
                    return res.status(401).send({ auth: false, token: null });
                const secretkey=process.env.secretKey;
                if(typeof secretkey!=='string')
                    throw Error;
                var token = jwt.sign({ id: queryUser._id },secretkey, {
                    expiresIn: 86400 // expires in 24 hours
                });
                res.status(200);
              
               
                return res.send({auth:true,token:token});
                
            }


            res.status(404);
            return res.send('No user found');
        }
        catch (error) {
            res.status(500);
            console.log(error);
            res.send(error);
        }
    }
    return { createUser, login }
}