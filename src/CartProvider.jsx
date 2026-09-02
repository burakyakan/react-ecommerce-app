import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('userCart');
    if (savedCart) {
      return JSON.parse(savedCart);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('userCart', JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) => {
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item;
        });
      }
      else {
        return [...prevItems, { ...product, quantity: 1 }];
      }

    });
  }

  function removeFromCart(productId) {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.id !== productId);
    });
  }

  function clearCart() {
    setCartItems([]);
  }




  return (
    <createContext.Provider>
      {children}
    </createContext.Provider>
  );

}

export default CartProvider