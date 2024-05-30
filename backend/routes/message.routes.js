import express from "express";
import { sendMessage } from "../controllers/message.controller.js";

const messageRoutes = express();

messageRoutes.post("/send/:id",sendMessage)

export default messageRoutes;