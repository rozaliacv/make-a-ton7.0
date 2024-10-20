import express from "express";
import { apiRouter } from "./routes/api/api.js";
import cors from 'cors'
import corsOptions from "./config/corsConfig.js";
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use('/api', apiRouter);

app.listen(process.env.PORT , () => console.log('server started'));










