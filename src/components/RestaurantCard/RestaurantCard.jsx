// <<<<<<< HEAD
// // <<<<<<< Updated upstream
// // const RestaurantCard = ({ restaurant }) => {
// //   return (
// //     <div
// //       style={{
// //         width: "300px",
// //         border: "1px solid #ddd",
// //         borderRadius: "12px",
// //         overflow: "hidden",
// //         boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
// //       }}
// //     >
// //       <img
// //         src={restaurant.imageUrl}
// //         alt={restaurant.name}
// //         style={{
// //           width: "100%",
// //           height: "16 / 9",
// //           objectFit: "cover",
// //         }}
// //       />

// //       <div style={{ padding: "15px" }}>
// //         <h2>{restaurant.name}</h2>

// //         <p>🍽 {restaurant.cuisine}</p>

// //         <p>⭐ {restaurant.rating}</p>

// //         <p>🕒 {restaurant.deliveryTime}</p>

// //         <p>₹{restaurant.priceForTwo} for two</p>
// //       </div>
// // =======
// // import { useNavigate } from "react-router-dom";
// // const RestaurantCard = ({ restaurant }) => {
// //   const navigate = useNavigate();
// //   return (
// //     <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

// //       {/* Restaurant Image */}
// //       <div className="overflow-hidden">
// //         <img
// //           src={restaurant.image}
// //           alt={restaurant.name}
// //           className="w-full h-52 object-cover transition-transform duration-300 hover:scale-110"
// //         />
// //       </div>

// //       {/* Restaurant Details */}
// //       <div className="p-4">

// //         <div className="flex justify-between items-center">
// //           <h3 className="text-xl font-bold">
// //             {restaurant.name}
// //           </h3>

// //           <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
// //             ⭐ {restaurant.rating}
// //           </span>
// //         </div>

// //         <p className="text-gray-600 mt-2">
// //           {restaurant.category}
// //         </p>

// //         <div className="flex justify-between mt-4 text-gray-500 text-sm">
// //           <span>📍 {restaurant.location}</span>
// //           <span>🕒 {restaurant.deliveryTime}</span>
// //         </div>

// //          {/* Button */}
// //         <button
// //           onClick={()=> navigate(`/restaurant/${restaurant.id}`)}
// //            className="mt-5 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
// //           Order Now
// //         </button>

// //       </div>

// // >>>>>>> Stashed changes
// //     </div>
// //   );
// // };

// // export default RestaurantCard;

// import { useNavigate } from "react-router-dom";
// =======
// import { Link } from "react-router-dom";
// >>>>>>> 1692a1df1dca37a51ecd04c75b46898c7875fd49

// const RestaurantCard = ({ restaurant }) => {
//   const navigate = useNavigate();

//   return (
// <<<<<<< HEAD
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

//       {/* Restaurant Image */}
//       <div className="overflow-hidden">
//         <img
//           src={restaurant.image}
//           alt={restaurant.name}
//           className="w-full h-52 object-cover transition-transform duration-300 hover:scale-110"
//         />
//       </div>

//       {/* Restaurant Details */}
//       <div className="p-4">

//         <div className="flex justify-between items-center">
//           <h3 className="text-xl font-bold">
//             {restaurant.name}
//           </h3>

//           <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
//             ⭐ {restaurant.rating}
//           </span>
//         </div>

//         <p className="text-gray-600 mt-2">
//           {restaurant.cuisine}
//         </p>

//         <div className="flex justify-between mt-4 text-gray-500 text-sm">
//           <span>🕒 {restaurant.deliveryTime}</span>
//           <span>₹{restaurant.priceForTwo} for two</span>
//         </div>

//         <button
//           onClick={() => navigate(`/restaurant/${restaurant.id}`)}
//           className="mt-5 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
//         >
//           Order Now
//         </button>

//       </div>

//     </div>
// =======
//     <Link
//       to={`/restaurant/${restaurant.id}`}
//       style={{ textDecoration: "none", color: "inherit" }}
//     >
//       <div
//         style={{
//           width: "300px",
//           border: "1px solid #ddd",
//           borderRadius: "12px",
//           overflow: "hidden",
//           boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//           cursor: "pointer",
//         }}
//       >
//         <img
//           src={restaurant.imageUrl}
//           alt={restaurant.name}
//           style={{
//             width: "100%",
//             aspectRatio: "16 / 9",
//             objectFit: "cover",
//             display: "block",
//           }}
//         />

//         <div style={{ padding: "15px" }}>
//           <h2>{restaurant.name}</h2>

//           <p>🍽 {restaurant.cuisine}</p>

//           <p>⭐ {restaurant.rating}</p>

//           <p>🕒 {restaurant.deliveryTime}</p>

//           <p>₹{restaurant.priceForTwo} for two</p>
//         </div>
//       </div>
//     </Link>
// >>>>>>> 1692a1df1dca37a51ecd04c75b46898c7875fd49
//   );
// };

// export default RestaurantCard;

import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/restaurant/${restaurant.id}`)}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Restaurant Image */}
      <div className="overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-52 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Restaurant Details */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">{restaurant.name}</h3>

          <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
            ⭐ {restaurant.rating}
          </span>
        </div>

        <p className="text-gray-600 mt-2">
          {restaurant.cuisine || restaurant.category}
        </p>

        <div className="flex justify-between mt-4 text-gray-500 text-sm">
          <span>🕒 {restaurant.deliveryTime}</span>
          <span>₹{restaurant.priceForTwo}</span>
        </div>

        <button
          className="mt-5 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;