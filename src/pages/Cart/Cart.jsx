import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    items,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  const subtotal = totalPrice;
  const deliveryCharge = items.length > 0 ? 40 : 0;
  const gst = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + deliveryCharge + gst;

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <h1 className="cart-title">Your Cart</h1>
        <p className="cart-empty">
          Your cart is empty. Add items from a restaurant menu.
        </p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1 className="cart-title">Your Cart</h1>
        <button className="cart-clear-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>

      <div className="cart-layout">

        {/* Left column — cart items */}
        <ul className="cart-list">
          {items.map((item) => (
            <li key={item.id} className="cart-item">

              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="cart-item-img"
                />
              )}

              <div className="cart-item-info">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-unit-price">₹{item.price} each</p>
              </div>

              <div className="cart-item-controls">
                <div className="cart-qty-stepper">
                  <button
                    className="cart-qty-btn"
                    onClick={() => decreaseQuantity(item.id)}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    −
                  </button>
                  <span className="cart-qty-value">{item.quantity}</span>
                  <button
                    className="cart-qty-btn"
                    onClick={() => increaseQuantity(item.id)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>
                </div>

                <span className="cart-item-total">
                  ₹{item.price * item.quantity}
                </span>

                <button
                  className="cart-remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  ✕
                </button>
              </div>

            </li>
          ))}
        </ul>

        {/* Right column — order summary */}
        <div className="cart-summary">
          <h2 className="cart-summary-title">Order Summary</h2>

          <div className="cart-summary-row">
            <span>Items ({totalItems})</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="cart-summary-row">
            <span>Delivery Charge</span>
            <span>₹{deliveryCharge}</span>
          </div>

          <div className="cart-summary-row">
            <span>GST (5%)</span>
            <span>₹{gst}</span>
          </div>

          <hr className="cart-summary-divider" />

          <div className="cart-summary-total">
            <span>Total</span>
            <span>₹{grandTotal}</span>
          </div>

          <Link to="/checkout" className="cart-checkout-btn">
            Proceed to Checkout
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Cart;