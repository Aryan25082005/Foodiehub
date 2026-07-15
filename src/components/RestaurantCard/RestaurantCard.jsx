const RestaurantCard = ({ restaurant }) => {
  return (
    <div
      style={{
        width: "300px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={restaurant.imageUrl}
        alt={restaurant.name}
        style={{
          width: "100%",
          height: "16 / 9",
          objectFit: "cover",
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
  );
};

export default RestaurantCard;