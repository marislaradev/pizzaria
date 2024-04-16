import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (pizza) => {
    setCartItems((prevCartItems) => {
      const updatedCart = [...prevCartItems, pizza];
      console.log("item adicionado ao carrinho:", pizza);
      console.log("carrinho atualizado:", updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (index) => {
    setCartItems((prevCartItems) => {
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

  const clearCart = () => {
    setOrders((prevOrders) => {
      const orderNumber = prevOrders.length + 1;
      const order = {
        id: orderNumber,
        items: cartItems,
        total: total(),
        dateTime: new Date().toLocaleString("pt-BR"),
      };
      return [...prevOrders, order];
    });
    setCartItems([]);
    console.log("pedido adicionado:", orders[orders.length - 1]);
    console.log("carrinho limpo");
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, total, clearCart, orders }}
    >
      {children}
    </CartContext.Provider>
  );
};
