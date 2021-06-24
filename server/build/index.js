"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = require("./routes/router");
require('dotenv').config();
const app = express_1.default();
const port = 3000;
const dbURI = process.env.mongoURI;
const env = process.env.NODE_ENV;
if (typeof dbURI === 'string') {
    const connect = mongoose_1.default.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    connect.then((db) => {
        console.log("connected to the database");
    }, (error) => console.log(error));
}
else {
    console.log("something wrong with the dbURI ");
}
app.use('/', router_1.router);
if (env == 'production') {
    app.use(express_1.default.static(__dirname + '/public/'));
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });
}
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}.`);
});
