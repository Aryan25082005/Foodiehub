import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const getRestaurants = async () => {
  try {
    const restaurantCollection = collection(db, "restaurants");
    const snapshot = await getDocs(restaurantCollection);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return [];
  }
};