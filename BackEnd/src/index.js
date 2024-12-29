import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = process.env.PORT || 5000;


const app = express();
app.use(cookieParser());
app.use(express.json());


app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
    console.log("listening on port " + PORT);
    connectDB();
});