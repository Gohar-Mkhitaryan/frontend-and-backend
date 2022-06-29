import express from "express";
import mongoose from "mongoose";
import userRouter from "./users-routers/router.js";
const app = express();
const port = 5000;
const json = express.json();
app.use(json);

(async () => {
    await mongoose.connect('mongodb://localhost:27017/myProject');
})();

const staticFiles = express.static('./frontend');
app.use(staticFiles);
app.use(userRouter);
app.listen(port, ()=>console.log(`Server is listening port ${port}`));