import jwt from "jsonwebtoken";
import { getAll, getById } from "../services/user.service.js";

let users = [
	{
		usuario: "admin",
		password: "1234",
		role: "admin"
	}];

export const handleUserCreation = (req, res, next) => {
	try {
		const { usuario, role, password } = req.body;

		if (
			!usuario | !role, !password
		) {
			return res
				.status(401)
				.json({ error: "Faltan propiedades para crear usuario (usuario,role,password)" });
		}

		const oNewUser = {
			usuario: String(usuario),
			role: String(role),
			password: String(password),
		};

		const payload = {
			usuario: String(usuario),
			role: String(role),
		};

		const token = jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{ expiresIn: "1h" }
		);

		users.push(oNewUser)

		res.json({ message: "Usuario creado con exito", token: token });
	} catch (err) {
		next(err);
	}
};

export const handleGetAllUsers = async (req, res, next) => {
	try {
		const aAllUsers = await getAll();
		res.json({ users: aAllUsers })
	}
	catch (err) {
		next(err);
	}
}

export const handleGetUserById = async (req, res, next) => {
	const userId = req.params.id;
	try {
		if (!userId) throw { status: 400, message: "No se suministro id para la busqueda" };
		const user = await getById(userId)
		res.json({ user: user })
	}
	catch (err) {
		next(err)
	}
}