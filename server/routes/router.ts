import express from 'express';
import {userController} from '../controller/userController';
import {user} from '../models/userModel';

export const router=express();

const users =userController(user);

router.use(express.json());

router.post('/user',users.createUser);
router.post('/login',users.login);



 