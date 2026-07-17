import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import RestaurantsList from "../../components/Restaurants/Restaurants";

const Restaurants = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <div className="max-w-7xl mx-auto py-10">

      <div className="text-center mb-10">
      <h1 className="text-5xl font-bold">
        🍽 Restaurants
      </h1>

      <p className="text-gray-600 text-3xl mt-4">
        Discover all restaurants near you.
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-3 my-8">
      {[
        "All",
        "Pizza",
        "Burger",
        "Biryani",
        "Chinese",
        "South Indian",
        "Desserts",
      ].map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`px-5 py-2 rounded-full border transition ${
            category === item
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-gray-100"
          }`}
        >
          {item}
        </button>
      ))}
    </div>

     <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <RestaurantsList 
      search={search}
      category={category} />

    </div>
  );
};

export default Restaurants;