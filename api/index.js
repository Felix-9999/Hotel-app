import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors"; // Import the cors package.

import authRoot from "./roots/auth.js";
import usersRoot from "./roots/users.js";
import hotelsRoot from "./roots/hotels.js";
import roomsRoot from "./roots/rooms.js";

dotenv.config();
const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongo DB");
  } catch (error) {
    throw error;
  }
};

// Middleware to enable CORS
app.use(cors()); // This enables CORS for all routes. You can configure it further if needed.

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoot);
app.use("/api/users", usersRoot);
app.use("/api/hotels", hotelsRoot);
app.use("/api/rooms", roomsRoot);

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});
