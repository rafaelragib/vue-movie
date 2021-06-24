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
exports.storyController = void 0;
const storyController = (story) => {
    function getStory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const stories = yield story.find({});
                const storyJSON = stories.map((ele) => {
                    ele = ele.toJSON();
                    ele.links = {};
                    ele.links.self = `http://localhost:3000/story/${ele._id}`;
                    return ele;
                });
                res.status(200);
                return res.send(storyJSON);
            }
            catch (error) {
                res.status(500);
                console.log(error);
                return res.send(error);
            }
        });
    }
    function getStoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                if (id.match(/^[0-9a-fA-F]{24}$/)) {
                    const stories = yield story.findById(id);
                    if (stories) {
                        res.status(200);
                        return res.send(stories);
                    }
                    res.status(404);
                    return res.send("No story");
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
    function createStory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newStory = yield story.create({
                    'title': req.body.title,
                    'body': req.body.body
                });
                if (newStory) {
                    res.status(201);
                    return res.send(newStory);
                }
                res.status(500);
                return res.send("Internal Problem");
            }
            catch (error) {
                res.status(400);
                return res.send("Bad Request");
            }
        });
    }
    function deleteStory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                if (id.match(/^[0-9a-fA-F]{24}$/)) {
                    const deleteStory = yield story.deleteOne({ _id: id });
                    if (deleteStory.deletedCount === 1) {
                        res.status(200);
                        return res.send("Story Deleted");
                    }
                    res.status(404);
                    console.log(deleteStory);
                    return res.send("No story");
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
    function updateStory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                if (id.match(/^[0-9a-fA-F]{24}$/)) {
                    const stories = yield story.findById(id);
                    if (stories) {
                        if (typeof req.body.title === 'string' && typeof req.body.body === 'string') {
                            const updateStory = yield story.updateOne({
                                title: req.body.title,
                                body: req.body.body
                            });
                            if (updateStory) {
                                res.status(200);
                                res.send("Updated");
                            }
                        }
                        console.log("title and body must be included");
                        res.status(400);
                        return res.send("title and body must be included");
                    }
                    res.status(404);
                    return res.send("No story");
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
    return { getStory, getStoryById, createStory, deleteStory, updateStory };
};
exports.storyController = storyController;
