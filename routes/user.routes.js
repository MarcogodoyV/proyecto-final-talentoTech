import { Router } from "express";
import { authenticateToken } from "../middlewares/auth.middleware.js";
import { handleGetAllUsers, handleUserCreation, handleGetUserById } from "../controllers/user.controller.js"
import { authorizeRole } from "../middlewares/role.middleware.js";

const router = Router();

router.get("/",authenticateToken,authorizeRole("admin"), handleGetAllUsers);
router.post("/:id",authenticateToken, handleGetUserById);
router.post("/create",authenticateToken,authorizeRole("admin"), handleUserCreation);

export default router;