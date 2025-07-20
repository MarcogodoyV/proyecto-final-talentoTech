import { db } from "../config/firebase.js";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

const productCollection = collection(db, "products");

export const getAllProductsModel = async () => {
  const snapshot = await getDocs(productCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getProductByIdModel = async (id) => {
  const productRef = doc(productCollection, id);
  const snapshot = await getDoc(productRef);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() };
};

export const createProductModel = async ({ name, price }) => {
  const docRef = await addDoc(productCollection, {
    name,
    price,
  });
  return {
    id: docRef.id,
    name,
    price,
  };
};

export const findProductByNameModel = async (name) => {
  const q = query(productCollection, where("name", "==", name));
  const snapshot = await getDocs(q);
  return snapshot;
};

export const deleteProductByIdModel = async (id) => {
  const productRef = doc(productCollection, id);
  await deleteDoc(productRef);
};

