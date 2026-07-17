const Hero = ({ search, setSearch }) => {
    return(
        <section className="bg-grey-100 py-20">
            <div className="max-w-7xl mx auto px-6 text center">

                <h1 className="flex justify-center text-5xl font-bold text-black mb-6">
                     Delicious Food Delivered To Your Door
                </h1>

                <p className="flex justify-center text-grey-600 text-lg mb-10">
                    Discover the best restaurants and enjoy your favorite meals
                    with fast and reliable delivery.
                </p>

                <div className="flex justify-center gap-4">
                    <input
                        type="text"
                        placeholder="Search restaurants or food..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg outline-none"
                    />

                    <button className="bg-black text-white px-6 py-3 rounded-lg">
                        Search
                    </button>
                </div>

            </div>
        </section>    
    )
}

export default Hero;