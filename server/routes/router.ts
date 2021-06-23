import express from 'express';
import {userController} from '../controller/userController';
import {user} from '../models/userModel';
import {watchList} from '../models/watchModel';
import { Request, Response,NextFunction } from 'express';
import { watchListController } from '../controller/watchListController';
export const router=express();

const users =userController(user,watchList);
const watchlists=watchListController(watchList);
router.use(express.json());

router.use(function(req: Request, res:Response, next:NextFunction) {
    res.header("Access-Control-Allow-Origin", req.headers.origin); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
router.post('/user',users.createUser);
router.post('/login',users.login);

router.get('/watchlist/:id',watchlists.getWatchListbyUserId);
router.put('/watchlist/:id',watchlists.updateWatchList);





 