import express from 'express';
import config from './config.js';
import cors from "cors";
import * as routers from './routes/route.js';

const app = express();
app.use(cors());
app.use(express.json());
app.options("*", cors())

app.use('/',routers.app);

app.listen(config.port || 8000, () => {
    console.log(`server is running at port ${config.port}`)
})