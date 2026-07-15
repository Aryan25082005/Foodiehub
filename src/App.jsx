import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Restaurants from "./pages/Restaurants/Restaurants";
import RestaurantDetails from "./pages/RestaurantDetails/RestaurantDetails";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Orders from "./pages/Orders/Orders";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Admin from "./pages/Admin/Admin";
import RestaurantMenu from "./pages/RestaurantMenu/RestaurantMenu";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/restaurant/:id" element={<RestaurantMenu />} /> */}
        <Route path="/checkout" element={<Checkout />} />
        </Route>
    </Routes>
  );
}

export default App;


