import { useEffect } from "react";
import { getRestaurants } from "../../services/restaurantService";

const Home = () => {
  useEffect(() => {
    const loadRestaurants = async () => {
      const restaurants = await getRestaurants();
      console.log(restaurants);
    };

    loadRestaurants();
  }, []);

  return <h1>Home Page</h1>;
};

export default Home;