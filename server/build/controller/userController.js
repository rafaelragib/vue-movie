"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userController = (user, watchList) => {
    function createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hashedPass = bcryptjs_1.default.hashSync(req.body.password, 8);
                const newUser = yield user.create({
                    'username': req.body.username,
                    'password': hashedPass
                });
                if (newUser) {
                    const secret = process.env.secretKey;
                    if (typeof secret === 'undefined')
                        throw Error;
                    const jwtToken = jsonwebtoken_1.default.sign({ id: newUser._id }, secret, {
                        expiresIn: 86400
                    });
                    const newWatchList = yield watchList.create({
                        'userId': newUser._id,
                        'watchList': []
                    });
                    if (!newWatchList) {
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
        });
    }
    function login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (typeof req.body.username !== 'string')
                    throw Error;
                const queryUser = yield user.findOne({
                    'username': req.body.username
                });
                if (queryUser) {
                    const isPasswordValid = bcryptjs_1.default.compareSync(req.body.password, queryUser.password);
                    if (!isPasswordValid)
                        return res.status(401).send({ auth: false, token: null });
                    const secretkey = process.env.secretKey;
                    if (typeof secretkey !== 'string')
                        throw Error;
                    var token = jsonwebtoken_1.default.sign({ id: queryUser._id }, secretkey, {
                        expiresIn: 86400 // expires in 24 hours
                    });
                    res.status(200);
                    const requestObject = {
                        auth: true,
                        token: token,
                        userId: queryUser._id,
                        links: {
                            watchlist: `http://localhost:3000/watchlist/${queryUser._id}`
                        },
                    };
                    return res.send(requestObject);
                }
                res.status(404);
                return res.send('No user found');
            }
            catch (error) {
                res.status(500);
                console.log(error);
                res.send(error);
            }
        });
    }
    return { createUser, login };
};
exports.userController = userController;
