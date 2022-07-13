import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import colors from 'colors';
import connection from './config/db.js';
import ImageData from './models/imageData.js';

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

connection();

app.get('/', (req, res)=>{
    res.status(200).json({
        message:"Request received successfully"
    });
});

app.post('/', async(req, res)=>{
    console.log(req);
    res.send('request received');
})

app.listen(3000, ()=>{
    console.log('server is running on port ', 3000);
});