// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import "./index.css";
// <<<<<<< Updated upstream
// import App from "./App";
// import { AuthProvider } from "./context/AuthContext";
// =======
// import App from "./App.jsx";
// import CartProvider from "./context/CartContext";
// >>>>>>> Stashed changes

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
// <<<<<<< Updated upstream
//       <AuthProvider>
//         <App />
//       </AuthProvider>
// =======
//       <CartProvider>
//         <App />
//       </CartProvider>
// >>>>>>> Stashed changes
//     </BrowserRouter>
//   </StrictMode>
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import { AuthProvider } from "./context/AuthContext";
import CartProvider from "./context/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);