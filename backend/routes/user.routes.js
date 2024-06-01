import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import { getUsersforSidebar } from "../controllers/user.controller.js";

const userRoutes=express.Router();

userRoutes.get("/", protectRoute, getUsersforSidebar)


export default userRoutes;