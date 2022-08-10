import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import customerRoute from "./routes/customers.js";
import liftRoute from "./routes/lifts.js";

import cookieParser from "cookie-parser";

const app=express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to MongoDB");
    } catch (error) {
        throw error;
    }
}

app.get("/", (req, res)=>{
    res.send("First request from root!");
});
//middlewares
app.use(cookieParser());

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/customers", customerRoute);
app.use("/api/lifts", liftRoute);

app.use((err, req, res, next)=> {
    const errorStatus=err.status || 500;
    const errorMessage=err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
})
app.listen(8800, ()=> {
    connect();
    console.log("Connected to backend!");
});