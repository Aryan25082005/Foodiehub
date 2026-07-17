import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          width: "300px",
          border: "1px solid #ddd",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          cursor: "pointer",
        }}
      >
        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            objectFit: "cover",
            display: "block",
          }}
        />

        <div style={{ padding: "15px" }}>
          <h2>{restaurant.name}</h2>

          <p>🍽 {restaurant.cuisine}</p>

          <p>⭐ {restaurant.rating}</p>

          <p>🕒 {restaurant.deliveryTime}</p>

          <p>₹{restaurant.priceForTwo} for two</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;