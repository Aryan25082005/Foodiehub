// import restaurants from "../../data/Restaurants";
// import RestaurantCard from "../RestaurantCard/RestaurantCard";

// const Restaurants = ({ search,category }) => {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-16">

//       <h2 className="text-4xl font-bold text-center mb-10">
//         Popular Restaurants
//       </h2>

//       <p className="text-2xl text-center text-gray-900 mb-10">
//         Order from the most loved restaurants near you.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//         {restaurants
//          .filter((restaurant) =>
//             restaurant.name.toLowerCase().includes(search.toLowerCase())
//           )
//           .filter((restaurant) =>
//             !category || category === "All"
//               ? true
//               : restaurant.category === category
//           )
//           .map((restaurant) => (
//             <RestaurantCard
//               key={restaurant.id}
//               restaurant={restaurant}
//             />
//         ))}

//       </div>

//     </section>
//   );
// };

// export default Restaurants;



import restaurants from "../../data/Restaurants";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const Restaurants = ({ search,category }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-4xl font-bold text-center mb-10">
        Popular Restaurants
      </h2>

      <p className="text-2xl text-center text-gray-900 mb-10">
        Order from the most loved restaurants near you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {restaurants
         .filter((restaurant) =>
            restaurant.name.toLowerCase().includes(search.toLowerCase())
          )
          .filter((restaurant) =>
            !category || category === "All"
              ? true
              : restaurant.category === category
          )
          .map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
        ))}

      </div>

    </section>
  );
};

export default Restaurants;