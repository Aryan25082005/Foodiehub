import { useEffect, useState } from "react";
import { getMenuItems } from "../../services/menuService";
import { useCart } from "../../context/CartContext";
import "./MenuList.css";

function MenuList({ restaurantId }) {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await getMenuItems(restaurantId);
      setMenuItems(data);
      setLoading(false);
    };

    fetchMenu();
  }, [restaurantId]);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  if (loading) {
    return (
      <div className="ml-status-wrap">
        <div className="ml-spinner"></div>
        <p>Loading menu...</p>
      </div>
    );
  }

  if (menuItems.length === 0) {
    return (
      <div className="ml-status-wrap">
        <span className="ml-empty-icon">🍽️</span>
        <p>No menu items available for this restaurant.</p>
      </div>
    );
  }

  return (
    <div className="ml-grid" aria-label="Menu items">
      {menuItems.map((item) => (
        <article key={item.id} className="ml-card">
          <div className="ml-info">
            <h3 className="ml-name">{item.name}</h3>
            <p className="ml-price">₹{item.price}</p>
            {item.description && (
              <p className="ml-desc">{item.description}</p>
            )}
          </div>

          <div className="ml-action">
            <div className="ml-img-box">
              {item.image || item.imageUrl ? (
                <img
                  src={item.image || item.imageUrl}
                  alt={item.name}
                  className="ml-img"
                  loading="lazy"
                />
              ) : (
                <div className="ml-img-placeholder">
                  <span aria-hidden="true">🍽️</span>
                </div>
              )}
              <button
                className="ml-add-btn"
                onClick={() => handleAddToCart(item)}
                aria-label={`Add ${item.name} to cart`}
              >
                ADD
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default MenuList;
