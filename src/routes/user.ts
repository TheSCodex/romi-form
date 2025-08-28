import { Router } from "express";
import { renderRegister, registerUser, listUsers } from "../controllers/userController";

const userRoutes = Router();

userRoutes.get("/register", renderRegister);
userRoutes.post("/register", registerUser);
userRoutes.get("/users", listUsers);

export default userRoutes;
