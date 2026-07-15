const Profile = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-8">
        My Profile
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-8">

        <div className="flex flex-col md:flex-row items-center gap-8">

          <img
            src="https://ui-avatars.com/api/?name=Jaydevsinh+Rana&background=000000&color=ffffff&size=200"
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-gray-300"
          />

          <div className="flex-1 space-y-4">

            <div>
              <p className="text-gray-500">Full Name</p>
              <h2 className="text-2xl font-bold">
                Jaydevsinh Rana
              </h2>
            </div>

            <div>
              <p className="text-gray-500">Email</p>
              <h2 className="text-xl">
                jaydev@example.com
              </h2>
            </div>

            <div>
              <p className="text-gray-500">Phone</p>
              <h2 className="text-xl">
                +91 9876543210
              </h2>
            </div>

            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Edit Profile
            </button>

            <button className=" ml-4 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition ">
              Logout
            </button>

          </div>

        </div>

      </div>

      <div className="bg-white shadow-lg rounded-xl p-8 mt-8">

        <h2 className="text-2xl font-bold mb-4">
          Saved Address
        </h2>

        <p className="text-gray-600">
          Bapunagar, Ahmedabad, Gujarat - 380024
        </p>

      </div>

    </div>
  );
};

export default Profile;