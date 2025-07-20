import {
	getAllProductsModel,
	getProductByIdModel,
	createProductModel,
	findProductByNameModel,
	deleteProductByIdModel,
  } from "../models/products.model.js";
  
  export const getAllProducts = async () => {
	return await getAllProductsModel();
  };
  
  export const getProductById = async (id) => {
	if (!id) {
	  throw { status: 400, message: "ID obligatorio" };
	}
  
	const product = await getProductByIdModel(id);
  
	if (!product) {
	  throw { status: 404, message: "Producto no encontrado" };
	}
  
	return product;
  };
  
  export const createProduct = async ({ name, price }) => {
	if (!name || !price) {
	  throw { status: 400, message: "Faltan campos obligatorios" };
	}
  
	const exists = await findProductByNameModel(name);
  
	if (!exists.empty) {
	  throw { status: 400, message: "El producto ya existe" };
	}
  
	return await createProductModel({ name, price });
  };
  
  export const deleteProductById = async (id) => {
	if (!id) {
	  throw { status: 400, message: "ID obligatorio" };
	}
  
	const deletedProduct = await deleteProductByIdModel(id);
  
	return { message: "Producto eliminado correctamente", deletedProduct: deletedProduct };
  };
  