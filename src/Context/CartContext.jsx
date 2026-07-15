import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Add item to cart. If it already exists, increment quantity.
  // Stores id, name, price, restaurantId, imageUrl, and quantity.
  const addToCart = (item) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          restaurantId: item.restaurantId,
          imageUrl: item.imageUrl ?? null,
          quantity: 1,
        },
      ];
    });
  };

  // Remove an item from the cart entirely, regardless of quantity.
  const removeFromCart = (itemId) => {
    setItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  // Increase the quantity of a single item by 1.
  const increaseQuantity = (itemId) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  // Decrease quantity by 1. Auto-removes the item if quantity reaches 0.
  const decreaseQuantity = (itemId) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  // Remove every item from the cart.
  const clearCart = () => setItems([]);

  // Derived values — computed on every render, not stored in state.
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
