import { useEffect, useState } from "react";
import { getRestaurants } from "../../services/restaurantService";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const data = await getRestaurants();
      setRestaurants(data);
    };

    fetchRestaurants();
  }, []);

  return (
  <div>
    <h1>Restaurants</h1>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
    </div>
  </div>
);
};

export default Home;