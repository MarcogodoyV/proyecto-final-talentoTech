import {
    getAllUsersModel,
    getUserByIdModel,
  } from "../models/users.model.js";
  
  export const getAll = async () => {
    return await getAllUsersModel();
  };
  
  export const getById = async (id) => {
    if (!id) {
      throw { status: 400, message: "ID obligatorio" };
    }
  
    const user = await getUserByIdModel(id);
    if (!user) {
      throw { status: 404, message: "Usuario no encontrado" };
    }
  
    return user;
  };
  