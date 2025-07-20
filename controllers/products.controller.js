import {
	getAllProducts,
	getProductById,
	createProduct,
	deleteProductById,
} from "../services/products.service.js";

export const handleGetAllProducts = async (req, res, next) => {
	try {
		const products = await getAllProducts();
		res.json(products);
	} catch (err) {
		next(err);
	}
};

export const handleGetProductById = async (req, res, next) => {
	try {
		const product = await getProductById(req.params.id);
		if (!product) {
			return res.status(404).json({ error: "Producto no encontrado" });
		}
		res.json(product);
	} catch (err) {
		next(err);
	}
};

export const handleCreateProduct = async (req, res, next) => {
	try {
		const product = await createProduct(req.body);
		res.status(201).json(product);
	} catch (err) {
		next(err);
	}
};

export const handleDeleteProduct = (req, res, next) => {
	try {
		const deleted = deleteProductById(req.params.id);
		res.json({ message: "Producto eliminado", product: deleted  });
	} catch (err) {
		next(err);
	}
};
