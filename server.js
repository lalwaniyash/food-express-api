import express, { Router } from "express";
import mongoose from "mongoose";
import { APP_PORT, DB_URL} from './config'
import errorHandler from "./middlewares/errorHandler";
import routes from "./routes";
import path from "path";
import cors from "cors";



mongoose.connect(DB_URL).then( ()=> {
    console.log(`connection successful`); 
}).catch((err)=> console.log(`no connection`));

const app = express();

global.appRoot = path.resolve(__dirname);
app.use(cors());
app.use(express.urlencoded({ extended:  false }));

app.use(express.json());
app.use('/api',routes);
app.use('/uploads', express.static('uploads'));
app.use('/', (req, res) => {
    res.send(`
  <h1>Welcome to food-express-APIs</h1>
  `);
});

app.use(errorHandler);
const PORT = process.env.PORT || APP_PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));

