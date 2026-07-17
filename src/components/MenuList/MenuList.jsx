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

  const handleAddToCart = (item) => addToCart(item);

  if (loading) {
    return <p className="ml-status">Loading menu...</p>;
  }

  if (menuItems.length === 0) {
    return <p className="ml-status">No menu items available.</p>;
  }

  return (
    <ul className="ml-list" aria-label="Menu items">
      {menuItems.map((item) => (
        <li key={item.id} className="ml-item">
          {/* Name + description */}
          <div className="ml-item-info">
            <p className="ml-item-name">{item.name}</p>
            {item.description && (
              <p className="ml-item-description">{item.description}</p>
            )}
          </div>

          {/* Price + Add to Cart */}
          <div className="ml-item-actions">
            <span className="ml-item-price">₹{item.price}</span>
            <button
              className="ml-add-btn"
              onClick={() => handleAddToCart(item)}
              aria-label={`Add ${item.name} to cart`}
            >
              Add to Cart
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MenuList;
