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

  return (
    <div className="cart-page">

      {/* Header */}
      <div className="cart-header">
        <h1 className="cart-title">Your Cart</h1>
        {items.length > 0 && (
          <button className="cart-clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        )}
      </div>

      {/* Empty state */}
      {items.length === 0 && (
        <p className="cart-empty">Your cart is empty. Add items from a restaurant menu.</p>
      )}

      {/* Item list */}
      {items.length > 0 && (
        <>
          <ul className="cart-list">
            {items.map((item) => (
              <li key={item.id} className="cart-item">

                {/* Thumbnail */}
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="cart-item-img"
                  />
                )}

                {/* Name + unit price */}
                <div className="cart-item-info">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-unit-price">₹{item.price} each</p>
                </div>

                {/* Qty stepper + line total + remove */}
                <div className="cart-item-controls">

                  {/* Quantity stepper */}
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

                  {/* Line total */}
                  <span className="cart-item-total">
                    ₹{item.price * item.quantity}
                  </span>

                  {/* Remove */}
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

          {/* Order summary */}
          <div className="cart-summary">
            <div className="cart-summary-row">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>
            <hr className="cart-summary-divider" />
            <div className="cart-summary-total">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>

            {/* Proceed to Checkout */}
            <Link to="/checkout" className="cart-checkout-btn">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}

    </div>
  );
}

export default Cart;