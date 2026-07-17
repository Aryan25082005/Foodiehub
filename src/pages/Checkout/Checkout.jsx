import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Checkout.css";

// ─── Validation ───────────────────────────────────────────────
const validate = (form) => {
  const errors = {};

  if (!form.fullName.trim() || form.fullName.trim().length < 2) {
    errors.fullName = "Full name must be at least 2 characters.";
  }
  if (!/^\d{10}$/.test(form.phone.trim())) {
    errors.phone = "Phone number must be exactly 10 digits.";
  }
  if (!form.address.trim() || form.address.trim().length < 5) {
    errors.address = "Address must be at least 5 characters.";
  }
  if (!form.city.trim() || form.city.trim().length < 2) {
    errors.city = "City must be at least 2 characters.";
  }
  if (!/^\d{6}$/.test(form.pincode.trim())) {
    errors.pincode = "Pincode must be exactly 6 digits.";
  }

  return errors;
};

// Estimated delivery time — static for now, can be made dynamic later
const ESTIMATED_DELIVERY = "30–45 mins";

// ─── Component ────────────────────────────────────────────────
function Checkout() {
  const navigate = useNavigate();
  const { items, totalItems, totalPrice, clearCart } = useCart();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  // Snapshot of the order captured at submission time.
  // Kept separate from CartContext so the success screen still shows
  // the correct total even after clearCart() is called later.
  const [orderSnapshot, setOrderSnapshot] = useState(null);

  // Single change handler — works for all fields via e.target.name
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Snapshot the order total before the cart is cleared.
    // TODO (Firestore): Replace this block with an orderService.placeOrder()
    //   call that writes { items, totalPrice, deliveryInfo: form } to Firestore.
    //   On success, set the snapshot from the returned document, then clear cart.
    setOrderSnapshot({ totalPrice, totalItems });
  };

  // Called when the user explicitly leaves the success screen.
  const handleBackToHome = () => {
    clearCart();
    navigate("/");
  };

  // ── Empty cart guard ───────────────────────────────────────
  if (items.length === 0 && !orderSnapshot) {
    return (
      <div className="co-page">
        <div className="co-empty">
          <p>Your cart is empty. Nothing to checkout.</p>
          <Link to="/restaurants" className="co-empty-link">
            Browse Restaurants
          </Link>
        </div>
      </div>
    );
  }

  // ── Success state ──────────────────────────────────────────
  if (orderSnapshot) {
    return (
      <div className="co-page">
        <div className="co-success">
          <span className="co-success-icon">✅</span>
          <h1 className="co-success-title">Order Placed Successfully!</h1>
          <p className="co-success-subtitle">
            We&apos;re preparing your food. Hang tight!
          </p>

          <div className="co-success-meta">
            <div className="co-success-chip">
              Order Total
              <strong>₹{orderSnapshot.totalPrice}</strong>
            </div>
            <div className="co-success-chip">
              Estimated Delivery
              <strong>{ESTIMATED_DELIVERY}</strong>
            </div>
          </div>

          {/* Cart is cleared only when the user actively leaves this screen */}
          <button className="co-back-btn" onClick={handleBackToHome}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // ── Main checkout view ─────────────────────────────────────
  return (
    <div className="co-page">
      <h1 className="co-title">Checkout</h1>

      <div className="co-layout">

        {/* Left — Order Summary */}
        <div className="co-panel">
          <h2 className="co-panel-title">Order Summary</h2>

          <table className="co-summary-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="co-summary-footer">
            <div className="co-summary-row">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>
            <div className="co-summary-total">
              <span>Total Price</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>
        </div>

        {/* Right — Delivery Form */}
        <div className="co-panel">
          <h2 className="co-panel-title">Delivery Information</h2>

          <form className="co-form" onSubmit={handleSubmit} noValidate>

            <div className="co-form-group">
              <label className="co-label" htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="e.g. Aryan Sharma"
                className={`co-input${errors.fullName ? " co-input-error" : ""}`}
                value={form.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <p className="co-error-msg">{errors.fullName}</p>
              )}
            </div>

            <div className="co-form-group">
              <label className="co-label" htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="10-digit mobile number"
                className={`co-input${errors.phone ? " co-input-error" : ""}`}
                value={form.phone}
                onChange={handleChange}
                maxLength={10}
              />
              {errors.phone && (
                <p className="co-error-msg">{errors.phone}</p>
              )}
            </div>

            <div className="co-form-group">
              <label className="co-label" htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Street / Building / Area"
                className={`co-input${errors.address ? " co-input-error" : ""}`}
                value={form.address}
                onChange={handleChange}
              />
              {errors.address && (
                <p className="co-error-msg">{errors.address}</p>
              )}
            </div>

            <div className="co-form-group">
              <label className="co-label" htmlFor="city">City</label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="e.g. Mumbai"
                className={`co-input${errors.city ? " co-input-error" : ""}`}
                value={form.city}
                onChange={handleChange}
              />
              {errors.city && (
                <p className="co-error-msg">{errors.city}</p>
              )}
            </div>

            <div className="co-form-group">
              <label className="co-label" htmlFor="pincode">Pincode</label>
              <input
                id="pincode"
                name="pincode"
                type="text"
                placeholder="6-digit pincode"
                className={`co-input${errors.pincode ? " co-input-error" : ""}`}
                value={form.pincode}
                onChange={handleChange}
                maxLength={6}
              />
              {errors.pincode && (
                <p className="co-error-msg">{errors.pincode}</p>
              )}
            </div>

            <button type="submit" className="co-submit-btn">
              Place Order
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Checkout;
