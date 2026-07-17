import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Restaurants.css";

const Restaurants = ({ search, category, restaurants = [] }) => {
  console.log("Restaurants prop:", restaurants);
  console.log("Search:", search);
  console.log("Category:", category);

  // Always use Firestore data passed as props. No local fallback.
  const filteredRestaurants = restaurants
    .filter((restaurant) =>
      restaurant.name.toLowerCase().includes((search || "").toLowerCase())
    )
    .filter((restaurant) =>
      !category || category === "All" ? true : restaurant.category === category
    );

  console.log("Filtered:", filteredRestaurants);

  return (
    <section className="restaurants-section">
      <div className="restaurants-inner">
        <div className="restaurants-header">
          <h2 className="restaurants-title">Featured Restaurants</h2>
          <p className="restaurants-subtitle">
            Order from the most loved restaurants near you.
          </p>
        </div>

        {filteredRestaurants.length > 0 ? (
          <div className="restaurants-grid">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        ) : (
          <div className="restaurants-empty">
            <span className="restaurants-empty-icon">🍽</span>
            <p>No restaurants found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Restaurants;