"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.watchList = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const watchSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "users"
    },
    watchList: [{
            type: String
        }]
});
exports.watchList = mongoose_1.default.model('watchlist', watchSchema);
