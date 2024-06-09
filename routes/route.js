import express from 'express';
import { getSmsData } from '../controllers/functions.js';

export const app = express();

app.get("/", (req, res, next) => {
    res.send("api working");
})

app.post("/sendSms", getSmsData);