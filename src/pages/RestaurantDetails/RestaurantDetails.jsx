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
    return (
      <div className="rd-status-wrap">
        <div className="rd-spinner"></div>
        <p>Loading restaurant...</p>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="rd-status-wrap">
        <p>Restaurant not found.</p>
        <Link to="/" className="rd-btn">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="rd-page">
      {/* Back link */}
      <Link to="/" className="rd-back">
        ← Back to restaurants
      </Link>

      {/* Hero section */}
      <div className="rd-hero">
        <img
          src={restaurant.imageUrl || restaurant.image}
          alt={restaurant.name}
          className="rd-hero-img"
        />
        <div className="rd-hero-overlay"></div>
      </div>

      <div className="rd-content-wrapper">
        {/* Floating Info Card */}
        <div className="rd-info-card">
          <h1 className="rd-name">{restaurant.name}</h1>
          <div className="rd-meta-chips">
            <span className="rd-chip rd-chip--rating">⭐ {restaurant.rating || "4.5"}</span>
            <span className="rd-chip">🕒 {restaurant.deliveryTime || "30 mins"}</span>
            <span className="rd-chip">🍽 {restaurant.cuisine || restaurant.category}</span>
            <span className="rd-chip">₹{restaurant.priceForTwo || "400"} for two</span>
          </div>
        </div>

        {/* Sticky Compact Header (Sticks below Navbar on scroll) */}
        <div className="rd-sticky-header">
          <h2 className="rd-sticky-title">{restaurant.name}</h2>
          <div className="rd-sticky-meta">
            <span className="rd-sticky-rating">⭐ {restaurant.rating || "4.5"}</span>
            <span className="rd-sticky-time">🕒 {restaurant.deliveryTime || "30 mins"}</span>
          </div>
        </div>

        {/* Menu section */}
        <div className="rd-menu-section">
          <h2 className="rd-section-title">Menu</h2>
          <MenuList restaurantId={id} />
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;