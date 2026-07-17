import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import localRestaurants from "../data/Restaurants";

/**
 * ⚠️ ONE-TIME FIRESTORE SEEDING SCRIPT ⚠️
 * 
 * We are using a React component for the script so that Vite can correctly
 * resolve the local image imports (.jfif) from the Restaurants.js data file
 * into valid URL paths for Firestore. 
 */
const SeedRestaurants = () => {
  const handleSeed = async () => {
    try {
      const restaurantsRef = collection(db, "restaurants");
      
      console.log("Starting Firestore database seeding...");
      
      for (const restaurant of localRestaurants) {
        // Map the old local dataset into the new Firestore schema
        const docData = {
          name: restaurant.name,
          cuisine: restaurant.category,
          rating: restaurant.rating,
          deliveryTime: restaurant.deliveryTime,
          // Estimate default price since it wasn't in the original dataset
          priceForTwo: restaurant.name.includes("McDonald's") ? 400 : 500, 
          imageUrl: restaurant.image, // Vite will automatically resolve this import to a public URL path
        };

        await addDoc(restaurantsRef, docData);
        console.log(`✅ Successfully added: ${restaurant.name}`);
      }
      
      console.log("🎉 Seeding complete! Check your Firestore database.");
      alert("Seeding complete! You can now remove this component.");
    } catch (error) {
      console.error("❌ Error seeding data:", error);
      alert("Error seeding data. Check the console.");
    }
  };

  return (
    <div style={{ 
      padding: "24px", 
      background: "#fff5f5", 
      border: "2px solid #e53e3e", 
      borderRadius: "12px",
      margin: "40px auto",
      maxWidth: "600px",
      textAlign: "center"
    }}>
      <h2 style={{ color: "#e53e3e", marginTop: 0 }}>⚠️ Admin: Seed Firestore Database</h2>
      <p style={{ color: "#4a5568", marginBottom: "20px" }}>
        Clicking the button below will map all local restaurants from <code>src/data/Restaurants.js</code> and upload them to the Firestore <code>restaurants</code> collection.
      </p>
      <button 
        onClick={handleSeed}
        style={{ 
          padding: "12px 24px", 
          background: "#e53e3e", 
          color: "white", 
          fontWeight: "bold",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Run Seed Script
      </button>
    </div>
  );
};

export default SeedRestaurants;
