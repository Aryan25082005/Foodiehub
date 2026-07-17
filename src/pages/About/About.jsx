function About() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-16">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          About FoodieHub
        </h1>

        <p className="text-gray-300 text-lg leading-8">
          FoodieHub is a modern food ordering platform designed to
          connect food lovers with their favorite restaurants.
          We provide a simple and enjoyable way to discover,
          explore, and order delicious meals online.
        </p>
      </section>


      {/* Mission */}
      <section className="max-w-5xl mx-auto mt-16 grid md:grid-cols-3 gap-8">

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3">
            🍔 Quality Food
          </h2>

          <p className="text-gray-400">
            We bring tasty and quality food options from trusted
            restaurants directly to your doorstep.
          </p>
        </div>


        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3">
            🚀 Fast Delivery
          </h2>

          <p className="text-gray-400">
            Our goal is to provide a smooth and fast food ordering
            experience for every customer.
          </p>
        </div>


        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3">
            ❤️ Customer First
          </h2>

          <p className="text-gray-400">
            Customer satisfaction is our priority. We focus on
            making every order memorable.
          </p>
        </div>

      </section>


      {/* Team Section */}
      <section className="max-w-5xl mx-auto mt-16 text-center">

        <h2 className="text-3xl font-bold mb-5">
          Why Choose FoodieHub?
        </h2>

        <p className="text-gray-300">
          With an easy-to-use interface, restaurant discovery,
          secure login, and smooth ordering experience,
          FoodieHub makes food delivery simple and enjoyable.
        </p>

      </section>

    </div>
  );
}

export default About;


