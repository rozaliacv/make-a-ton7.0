import express from "express";




const app = express();

app.use(cors(corsOptions));



app.listen(process.env.PORT , () => console.log('server started'));