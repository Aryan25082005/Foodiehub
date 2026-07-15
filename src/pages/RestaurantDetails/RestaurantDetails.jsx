
import { useContext } from "react";
import restaurants from "../../data/Restaurants";
import { useParams } from "react-router-dom";
import menu from "../../data/Menu";
import { CartContext } from "../../context/CartContext";

const RestaurantDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const restaurant = restaurants.find(
  (item) => item.id === Number(id)
);

const menuItems = menu[id] || [];

  return (
  <div className="max-w-6xl mx-auto px-6 py-10">

    <img
      src={restaurant.image}
      alt={restaurant.name}
      className="w-full h-96 object-cover rounded-xl"
    />

    <h1 className="text-4xl font-bold mt-6">
      {restaurant.name}
    </h1>

    <div className="flex gap-6 mt-4 text-gray-600">
      <span>⭐ {restaurant.rating}</span>
      <span>📍 {restaurant.location}</span>
      <span>🕒 {restaurant.deliveryTime}</span>
    </div>

    <p className="mt-4 text-lg">
      Category: <span className="font-semibold">{restaurant.category}</span>
    </p>

    {/* 👇 ADD THE MENU SECTION HERE */}
     <div className="mt-10">
      <h2 className="text-3xl font-bold mb-6">
        Menu
      </h2>

      <div className="space-y-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border rounded-xl p-4 shadow-sm"
          >
            <div>
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-500">{item.type}</p>
              <p className="font-bold mt-1">₹{item.price}</p>
            </div>

            <button 
            onClick={()=> addToCart(item)} 
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>

  </div>
);

};

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRestaurantById } from "../../services/restaurantService";
import MenuList from "../../components/MenuList/MenuList";
import "./RestaurantDetails.css";

function RestaurantDetails() {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurant = async () => {
      const data = await getRestaurantById(id);
      setRestaurant(data);
      setLoading(false);
    };

    fetchRestaurant();
  }, [id]);

  if (loading) {
    return <p className="rd-status">Loading...</p>;
  }

  if (!restaurant) {
    return <p className="rd-status">Restaurant not found.</p>;
  }

  return (
    <div className="rd-page">

      {/* Back link */}
      <Link to="/" className="rd-back">
        ← Back to restaurants
      </Link>

      {/* Hero image */}
      <img
        src={restaurant.imageUrl}
        alt={restaurant.name}
        className="rd-hero-img"
      />

      {/* Info card */}
      <div className="rd-info-card">
        <h1 className="rd-name">{restaurant.name}</h1>

        <div className="rd-meta">
          <span className="rd-badge">🍽 {restaurant.cuisine}</span>
          <span className="rd-badge">⭐ {restaurant.rating}</span>
          <span className="rd-badge">🕒 {restaurant.deliveryTime}</span>
          <span className="rd-badge">₹{restaurant.priceForTwo} for two</span>
        </div>
      </div>

      {/* Menu section */}
      <div className="rd-menu-section">
        <h2 className="rd-section-title">Menu</h2>
        <MenuList restaurantId={id} />
      </div>

    </div>
  );
}


export default RestaurantDetails;