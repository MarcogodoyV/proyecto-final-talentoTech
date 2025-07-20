import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Usuario simulado
const mockUser = {
	usuario: "admin",
	password: "1234",
	role: "admin"
};

export const handleLogin = (req, res, next) => {
	try {
		const { usuario, password } = req.body;

		if (
			usuario !== mockUser.usuario ||
			password !== mockUser.password
		) {
			return res
				.status(401)
				.json({ error: "Credenciales inválidas" });
		}

		const payload = {
            usuario: mockUser.usuario,
            role: mockUser.role,
        };
		const token = jwt.sign(payload, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});

		res.json({ token });
	} catch (err) {
		next(err);
	}
};
