import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./config/db";
import taskRoutes from "./routes/taskRoutes";

dotenv.config();
connectDB();

const app = express();

app.use(bodyParser());

app.use('/api/tasks', taskRoutes);

export default app;

