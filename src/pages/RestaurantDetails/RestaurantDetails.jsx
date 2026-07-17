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