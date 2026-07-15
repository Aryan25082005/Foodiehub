import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>FoodieHub</h2>

      <Link to="/">Home</Link>
      <Link to="/restaurants">Restaurants</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;