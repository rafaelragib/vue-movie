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
Object.defineProperty(exports, "__esModule", { value: true });
exports.watchListController = void 0;
const watchListController = (watchList) => {
    function getWatchListbyUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.id;
                if (userId.match(/^[0-9a-fA-F]{24}$/)) {
                    const watch = yield watchList.findOne({ 'userId': userId });
                    if (watch) {
                        res.status(200);
                        return res.send(watch.watchList);
                    }
                    res.status(404);
                    return res.send("No user watchList");
                }
                res.status(400);
                return res.send("ID is not 25 hex character");
            }
            catch (error) {
                res.status(500);
                console.log(error);
                return res.send(error);
            }
        });
    }
    function updateWatchList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.id;
                if (userId.match(/^[0-9a-fA-F]{24}$/)) {
                    const watch = yield watchList.findOne({ 'userId': userId });
                    if (watch) {
                        if (req.body.watchList) {
                            const updateStory = yield watch.updateOne({
                                'watchList': req.body.watchList,
                            });
                            if (updateStory) {
                                res.status(200);
                                return res.send("Updated");
                            }
                        }
                        res.status(400);
                        return res.send("Watchlist must be included");
                    }
                    res.status(404);
                    return res.send("No user watchlist");
                }
                res.status(400);
                return res.send("ID is not 25 hex character");
            }
            catch (error) {
                res.status(500);
                console.log(error);
                return res.send(error);
            }
        });
    }
    return { getWatchListbyUserId, updateWatchList };
};
exports.watchListController = watchListController;
