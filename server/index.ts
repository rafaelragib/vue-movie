import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes/router';
import { Request, Response } from 'express';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const dbURI = process.env.mongoURI;
const env = process.env.NODE_ENV;
if (typeof dbURI === 'string') {
    const connect = mongoose.connect(dbURI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    connect.then((db) => {
        console.log("connected to the database");
    }, (error) => console.log(error));
}
else {
    console.log("something wrong with the dbURI ");
}

app.use('/', router);

if (env == 'production') {
    app.use(express.static(__dirname + '/public/'));

    app.get(/.*/,(req:Request,res:Response)=>{
        res.sendFile(__dirname+'/public/index.html');
    });
}

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}.`);
})