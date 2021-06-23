import express from 'express';
import {userController} from '../controller/userController';
import {user} from '../models/userModel';
import { Request, Response,NextFunction } from 'express';
export const router=express();

const users =userController(user);

router.use(express.json());

router.use(function(req: Request, res:Response, next:NextFunction) {
    console.log(req.headers.origin);
    res.header("Access-Control-Allow-Origin", req.headers.origin); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
router.post('/user',users.createUser);
router.post('/login',users.login);



 