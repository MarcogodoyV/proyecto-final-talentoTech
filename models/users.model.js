import { db } from "../config/firebase.js";
import {
  collection,
  getDoc,
  getDocs,
  doc,
} from "firebase/firestore";

const userCollection = collection(db, "users");

export const getAllUsersModel = async () => {
  const snapshot = await getDocs(userCollection);
  
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getUserByIdModel = async (id) => {
  const userRef = doc(userCollection, id);
  const snapshot = await getDoc(userRef);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() };
};

