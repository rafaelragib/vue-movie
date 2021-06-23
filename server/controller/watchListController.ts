import { watchType } from '../models/watchModel';
import mongoose from 'mongoose';
import { Request, Response } from 'express';
export const watchListController = (watchList: mongoose.Model<watchType>) => {
    async function getWatchListbyUserId(req: Request, res: Response) {

        try {
            const userId = req.params.id;
            if (userId.match(/^[0-9a-fA-F]{24}$/)) {
                const watch = await watchList.findOne({ 'userId': userId });
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
    }
    async function updateWatchList(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            if (userId.match(/^[0-9a-fA-F]{24}$/)) {
                const watch = await watchList.findOne({ 'userId': userId });
                if (watch) {
                    if (req.body.watchList as string[]) {
                        const updateStory = await watch.updateOne({
                            'watchList': req.body.watchList,
                        })
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
    }
    return { getWatchListbyUserId, updateWatchList }
}