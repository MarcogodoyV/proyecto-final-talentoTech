import jwt from "jsonwebtoken";

// Usuario simulado
const mockUser = {
	usuario: "admin",
	password: "1234",
    role: "admin"
};

export const login = (usuario, password) => {
	if (usuario !== mockUser.usuario || password !== mockUser.password) {
		throw { status: 401, message: "Credenciales inválidas" };
	}

    const payload = {
        usuario: mockUser.usuario,
        role: mockUser.role,
    };

	const token = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      

	return token;
};
