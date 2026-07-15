import categories from "../../data/Categories";

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-4xl font-bold text-center mb-10">
        Explore Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer
             transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >

            <div className="overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
            />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-black">
                {category.name}
              </h3>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Categories;