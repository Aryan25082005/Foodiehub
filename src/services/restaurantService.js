import { collection, getDocs, doc, getDoc } from "firebase/firestore";
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

// Fetch a single restaurant by Firestore document ID
export const getRestaurantById = async (id) => {
  try {
    const docRef = doc(db, "restaurants", id);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) return null;

    return { id: snapshot.id, ...snapshot.data() };
  } catch (error) {
    console.error("Error fetching restaurant:", error);
    return null;
  }
};