import express, { Router } from "express";
import mongoose from "mongoose";
import { APP_PORT, DB_URL} from './config'
import errorHandler from "./middlewares/errorHandler";
import routes from "./routes";
import path from "path";


mongoose.connect(DB_URL).then( ()=> {
    console.log(`connection successful`); 
}).catch((err)=> console.log(`no connection`));

const app = express();

global.appRoot = path.resolve(__dirname);
app.use(express.urlencoded({ extended:  false }));

app.use(express.json());
app.use('/api',routes);
app.use('/uploads', express.static('uploads'));


app.use(errorHandler);
app.listen(APP_PORT, ()=>{
    console.log(`Listening on port ${APP_PORT}`);
})
