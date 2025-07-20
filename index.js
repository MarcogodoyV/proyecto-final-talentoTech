import express from "express";
import cors from "cors";
import { envs } from "./config/envs.js"; // Usás envs en vez de dotenv

import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRoutes);
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
	res.json({ message: "API Online" });
});

app.use((req, res) => {
	res.status(404).json({ error: "Ruta no encontrada" });
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(err.status || 500).json({ error: err.message || "Error interno" });
});

const PORT = envs.port;
app.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
