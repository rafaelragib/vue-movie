"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const userModel_1 = require("../models/userModel");
const watchModel_1 = require("../models/watchModel");
const watchListController_1 = require("../controller/watchListController");
exports.router = express_1.default();
const users = userController_1.userController(userModel_1.user, watchModel_1.watchList);
const watchlists = watchListController_1.watchListController(watchModel_1.watchList);
exports.router.use(express_1.default.json());
exports.router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET");
    next();
});
exports.router.post('/user', users.createUser);
exports.router.post('/login', users.login);
exports.router.get('/watchlist/:id', watchlists.getWatchListbyUserId);
exports.router.put('/watchlist/:id', watchlists.updateWatchList);
