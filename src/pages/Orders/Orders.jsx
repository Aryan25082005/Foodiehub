const orders = [
  {
    id: 1,
    restaurant: "Domino's Pizza",
    items: "2x Margherita Pizza",
    total: "₹499",
    status: "Delivered",
    date: "15 July 2026",
  },
  {
    id: 2,
    restaurant: "McDonald's",
    items: "1x McAloo Tikki Burger",
    total: "₹249",
    status: "Preparing",
    date: "17 July 2026",
  },
  {
    id: 3,
    restaurant: "The Belgian Waffle Co.",
    items: "Chocolate Waffle",
    total: "₹199",
    status: "On the Way",
    date: "18 July 2026",
  },
];

const Orders = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-2">
        My Orders
      </h1>

      <p className="text-gray-500 mb-8">
        Track your current and previous food orders.
      </p>

      <div className="space-y-6">

        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-xl shadow-md p-6 border"
          >
            <div className="flex justify-between items-center">

              <div>
                <h2 className="text-2xl font-semibold">
                  {order.restaurant}
                </h2>

                <p className="text-gray-600 mt-2">
                  {order.items}
                </p>

                <p className="mt-2 font-bold">
                  Total: {order.total}
                </p>

                <p className="text-gray-500">
                  {order.date}
                </p>
              </div>

              <div>
                <span
                  className={`px-4 py-2 rounded-full text-white font-semibold ${
                    order.status === "Delivered"
                      ? "bg-green-600"
                      : order.status === "Preparing"
                      ? "bg-yellow-500"
                      : "bg-blue-600"
                  }`}
                >
                  {order.status}
                </span>
              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Orders;