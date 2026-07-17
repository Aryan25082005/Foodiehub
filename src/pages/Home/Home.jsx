// <<<<<<< Updated upstream
// import { useEffect, useState } from "react";
// import { getRestaurants } from "../../services/restaurantService";
// import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";

// const Home = () => {
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       const data = await getRestaurants();
//       setRestaurants(data);
//     };

//     fetchRestaurants();
//   }, []);

//   return (
//   <div>
//     <h1>Restaurants</h1>

//     <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         gap: "20px",
//       }}
//     >
//       {restaurants.map((restaurant) => (
//         <RestaurantCard
//           key={restaurant.id}
//           restaurant={restaurant}
//         />
//       ))}
//     </div>
//   </div>
// );
// =======
// import { useState } from "react";
// import Hero from "../../components/Hero/Hero";
// import Categories from "../../components/Categories/Categories";
// import Restaurants from "../../components/Restaurants/Restaurants";


// const Home = () => {
//   const [search, setSearch] = useState("");
//   return (
//     <>
//       <Hero
//         search={search}
//         setSearch={setSearch}
//       />
//       <Categories />
//       <Restaurants
//         restaurants={restaurants}
//         search={search}/>

      
//     </>
//   );
// >>>>>>> Stashed changes
// };

// export default Home;

import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import Restaurants from "../../components/Restaurants/Restaurants";
import { getRestaurants } from "../../services/restaurantService";

const Home = () => {
  const [search, setSearch] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const data = await getRestaurants();
      setRestaurants(data);
    };

    fetchRestaurants();
  }, []);

  return (
    <>
      <Hero
        search={search}
        setSearch={setSearch}
      />

      <Categories />

      <Restaurants
        restaurants={restaurants}
        search={search}
      />
    </>
  );
};

export default Home;