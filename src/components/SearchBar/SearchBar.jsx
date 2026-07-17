const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      <div className="flex justify-center">

        <input
          type="text"
          placeholder="Search restaurants or food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-2/3 lg:w-1/2 border border-gray-300 rounded-lg px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-black"
        />

      </div>

    </div>
  );
};

export default SearchBar;