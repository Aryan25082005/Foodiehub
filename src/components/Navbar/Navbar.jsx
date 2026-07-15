import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">
          FoodieHub
        </h1>

        <div className="flex gap-6 items-center"> 
          <Link to="/" className="bg-black text-white px-5 py-2 rounded-lg">
            Home
          </Link> 
          
          <Link to="/restaurants" className="bg-black text-white px-5 py-2 rounded-lg">
            Restaurants
          </Link>

          <Link to="/orders" className="bg-black text-white px-5 py-2 rounded-lg">
            Orders
          </Link>
          
          <Link to="/cart" className="bg-black text-white px-5 py-2 rounded-lg">
            Cart
          </Link>

          <Link to="/profile" className="bg-black text-white px-5 py-2 rounded-lg">
            Profile
          </Link>
          
          <Link to="/login" className="bg-black text-white px-5 py-2 rounded-lg">
            Login
          </Link>

          <Link to="/about" className="bg-black text-white px-5 py-2 rounded-lg">
            About
          </Link>

          <Link to="/contact" className="bg-black text-white px-5 py-2 rounded-lg">
            Contact
          </Link>
        </div>
      </div>   
    </nav>
  );
}

export default Navbar;