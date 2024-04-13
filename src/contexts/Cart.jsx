import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pizza) => {
    setCartItems(prevCartItems => {
      const updatedCart = [...prevCartItems, pizza];
      console.log("item adicionado ao carrinho:", pizza);
      console.log("carrinho atualizado:", updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (index) => {
    setCartItems(prevCartItems => {
      const updatedCart = [...prevCartItems];
      updatedCart.splice(index, 1);
      console.log("item removido do carrinho:", prevCartItems[index]);
      console.log("carrinho atualizado:", updatedCart);
      return updatedCart;
    });
  };

  const total = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart, total}}>
        {children}
    </CartContext.Provider>
  )
};
