import express from "express";




const index = express();





index.listen(process.env.PORT , () => console.log('server started'));