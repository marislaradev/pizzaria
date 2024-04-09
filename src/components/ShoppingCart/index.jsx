import { useState } from "react";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pizza) => {
    setCartItems([...cartItems, pizza]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const total = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 w-96 h-96 mt-10">
      <h1 className="font-bold text-3xl mb-4 mt-2 dark:text-gray-200 mx-auto text-center">
        Carrinho
      </h1>
      {cartItems.length == 0 ? (
        <p className="block text-xl font-semibold text-gray-700 cursor-auto mt-6 text-center">Carrinho vazio 🛒</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li>
              <span>{item.name}</span>
              <button onClick={() => removeFromCart(index)} className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-molho_de_tomate hover:bg-queijo-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-molho_de_tomate transform transition-transform hover:scale-105">
                Remover item
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-48">
        <p className="block text-md font-semibold text-gray-700 cursor-auto mt-6 text-center">Total a pagar: R$ {total().toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ShoppingCart;
