import { Router } from "express";
import {
	handleGetAllProducts,
	handleGetProductById,
	handleCreateProduct,
	handleDeleteProduct,
} from "../controllers/products.controller.js";

import { authenticateToken } from "../middlewares/auth.middleware.js";
import { authorizeRole } from "../middlewares/role.middleware.js";

const router = Router();

// Rutas públicas
router.get("/", handleGetAllProducts);
router.get("/:id", handleGetProductById);

// Rutas protegidas
router.post("/create", authenticateToken, authorizeRole("admin"), handleCreateProduct);
router.delete("/:id", authenticateToken, authorizeRole("admin"), handleDeleteProduct);

export default router;
