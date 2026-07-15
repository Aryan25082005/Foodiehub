import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
 const {
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} = useContext(CartContext);

const navigate = useNavigate();

  // Calculate Total Price
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryCharge = cart.length > 0 ? 40 : 0;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryCharge + gst;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-8">
        🛒 Your Cart
      </h1>

      {cart.length === 0 ? (
        <div className="bg-gray-100 rounded-xl p-10 text-center shadow">

          <h2 className="text-2xl font-semibold">
            Your Cart is Empty
          </h2>

          <p className="text-gray-500 mt-3">
            Add delicious food to your cart.
          </p>

        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">

          {/* Left Side */}
          <div className="md:col-span-2 space-y-5">

            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500">
                    {item.type}
                  </p>

                  <p className="text-lg font-semibold mt-2">
                    ₹{item.price * item.quantity}
                  </p>

                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-9 h-9 bg-black text-white rounded-full hover:bg-gray-700 transition"
                    >
                      -
                    </button>

                    <span className="font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-9 h-9 bg-black text-white rounded-full hover:bg-gray-700 transition"
                    >
                      +
                    </button>

                </div>
              </div>

                <button
                onClick={()=>removeItem(item.id)} 
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                  Remove
                </button>
              </div>
            ))}

          </div>

          {/* Right Side */}
          <div className="bg-white shadow-lg rounded-xl p-6 h-fit">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Delivery</span>
              <span>₹{deliveryCharge}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>GST (5%)</span>
              <span>₹{gst}</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
            onClick={()=>navigate("/checkout")} 
            className="w-full mt-8 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default Cart;