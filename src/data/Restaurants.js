import dominos from "../assets/images/restaurants/Dominos-pizza.jfif"
import laPinoz from "../assets/images/restaurants/La-pinoz-pizza.jfif"
import mcdonalds from "../assets/images/restaurants/Mcdonalds.jfif";
import behrouzBiryani from "../assets/images/restaurants/Veg-behrouz-biryani.jfif";
import chineseWok from "../assets/images/restaurants/Chinese-wok.jfif";
import udupi from "../assets/images/restaurants/Udupi-dosa.jfif";
import belgianWaffle from "../assets/images/restaurants/The-Belgian-Waffle-Co.jfif";

const restaurants = [
  {
    id: 1,
    name: "Domino's Pizza",
    category: "Pizza",
    image: dominos,
    rating: 4.5,
    deliveryTime: "25-30 min",
    location: "Ahmedabad",
  },
  {
    id: 2,
    name: "La Pino'z Pizza",
    category: "Pizza",
    image: laPinoz,
    rating: 4.4,
    deliveryTime: "25-35 min",
    location: "Ahmedabad",
  },
  {
    id: 3,
    name: "McDonald's",
    category: "Burger",
    image: mcdonalds,
    rating: 4.6,
    deliveryTime: "20-25 min",
    location: "Ahmedabad",
  },
  {
    id: 4,
    name: "Veg Behrouz Biryani",
    category: "Biryani",
    image: behrouzBiryani,
    rating: 4.7,
    deliveryTime: "30-35 min",
    location: "Ahmedabad",
  },
  {
    id: 5,
    name: "Chinese Wok",
    category: "Chinese",
    image: chineseWok,
    rating: 4.3,
    deliveryTime: "25-30 min",
    location: "Ahmedabad",
  },
  {
    id: 6,
    name: "Udupi",
    category: "South Indian",
    image: udupi,
    rating: 4.8,
    deliveryTime: "20-30 min",
    location: "Ahmedabad",
  },
  {
    id: 7,
    name: "The Belgian Waffle Co.",
    category: "Desserts",
    image: belgianWaffle,
    rating: 4.7,
    deliveryTime: "20-25 min",
    location: "Ahmedabad",
  },
];

export default restaurants;