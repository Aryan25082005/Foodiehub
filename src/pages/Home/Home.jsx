import { useEffect, useState } from "react";
import { getRestaurants } from "../../services/restaurantService";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import OffersBanner from "../../components/OffersBanner/OffersBanner";
import Features from "../../components/Features/Features";
import Restaurants from "../../components/Restaurants/Restaurants";
import "./Home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const data = await getRestaurants();
      console.log("Firestore restaurants:", data);
      setRestaurants(data);
    };
    fetchRestaurants();
  }, []);

  return (
    <div className="home-page">
      <Hero search={search} setSearch={setSearch} />
      <Categories />
      <div id="offers">
        <OffersBanner />
      </div>
      <Features />
      <Restaurants restaurants={restaurants} search={search} />
    </div>
  );
};

export default Home;