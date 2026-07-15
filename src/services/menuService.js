import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

// Fetch all menu items belonging to a restaurant
export const getMenuItems = async (restaurantId) => {
  try {
    const menuCollection = collection(db, "menu");
    const menuQuery = query(
      menuCollection,
      where("restaurantId", "==", restaurantId)
    );
    const snapshot = await getDocs(menuQuery);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching menu items:", error);
    return [];
  }
};
