import { Link } from "react-router-dom";
import "./RestaurantCard.css";

const RestaurantCard = ({ restaurant }) => {
  return (
    <article className="rc-card">
      <div className="rc-img-container">
        <img
          src={restaurant.image || restaurant.imageUrl}
          alt={restaurant.name}
          className="rc-img"
          loading="lazy"
        />
        {/* Static Offer Badge */}
        <span className="rc-offer-badge">20% OFF</span>

        {/* Independent Heart Button - UI Only */}
        <button
          className="rc-heart-btn"
          aria-label="Add to wishlist"
          onClick={(e) => {
            e.preventDefault();
            // Wishlist logic will go here
            console.log("Heart clicked!");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="rc-content">
        <h3 className="rc-title">{restaurant.name}</h3>

        <div className="rc-chips">
          <span className="rc-chip rc-chip--rating">
            ⭐ {restaurant.rating || "4.5"}
          </span>
          <span className="rc-chip">
            🕒 {restaurant.deliveryTime || "30-45 mins"}
          </span>
          <span className="rc-chip">
            🍽 {restaurant.cuisine || restaurant.category}
          </span>
          <span className="rc-chip">
            ₹ {restaurant.priceForTwo || "400"} for two
          </span>
        </div>
      </div>

      {/* Clickable Overlay Link */}
      <Link
        to={`/restaurant/${restaurant.id}`}
        className="rc-link-overlay"
        aria-label={`View details for ${restaurant.name}`}
      />
    </article>
  );
};

export default RestaurantCard;