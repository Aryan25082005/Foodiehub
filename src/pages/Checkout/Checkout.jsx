import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryCharge = cart.length > 0 ? 40 : 0;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryCharge + gst;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "Cash on Delivery",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = () => {
    alert("🎉 Order Placed Successfully!");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-8">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Delivery Details */}
        <div className="bg-white shadow-lg rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Delivery Details
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-4"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-4"
          />

          <textarea
            name="address"
            placeholder="Delivery Address"
            rows="4"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-4"
          />

          <select
            name="payment"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
          </select>

        </div>

        {/* Order Summary */}
        <div className="bg-white shadow-lg rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-3">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>

                <span>
                  ₹{item.price * item.quantity}
                </span>
              </div>
            ))}

          </div>

          <hr className="my-5" />

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Delivery</span>
            <span>₹{deliveryCharge}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>GST</span>
            <span>₹{gst}</span>
          </div>

          <hr className="my-5" />

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={handleOrder}
            className="w-full mt-8 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Place Order
          </button>

        </div>

      </div>

    </div>
  );
};

export default Checkout;