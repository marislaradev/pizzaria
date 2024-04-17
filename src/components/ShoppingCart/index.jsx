import { Link } from "react-router-dom";
import { useCart } from "../../contexts/Cart";

export function formattedPrice(price) {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function ShoppingCart() {
  const { cartItems, removeFromCart, total, clearCart, addToCart } = useCart();

  const countItemsById = (id) => {
    return cartItems.filter((item) => item.id === id).length;
  };

  const handleCheckout = () => {
    clearCart();
    alert("Pedido finalizado com sucesso!");
  };

  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 w-96 h-96 mt-6">
      <h1 className="font-bold text-3xl mb-4 mt-2 dark:text-gray-200 mx-auto text-center">
        Carrinho
      </h1>
      {cartItems.length === 0 ? (
        <>
        <p className="text-center">Seu carrinho está vazio... 🛒</p>
        <Link
        to="/cardapio"
        className="block mx-auto mt-4 mb-4 w-fit py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mostarda hover:bg-queijo-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-molho_de_tomate transform transition-transform hover:scale-105">Ver cardápio 🍕</Link>
        </>
      ) : (
        <>
          <ul>
            {cartItems
              .reduce((uniqueItems, item) => {
                const exists = uniqueItems.find(
                  (uniqueItem) => uniqueItem.id === item.id
                );
                if (!exists) {
                  uniqueItems.push({ ...item, quantity: countItemsById(item.id) });
                }
                return uniqueItems;
              }, [])
              .map((item, index) => (
                <li key={index}>
                  <span>
                    {item.name} - {formattedPrice(item.price)} -
                    {item.quantity > 1 && ` Quantidade: ${item.quantity}`}
                  </span>
                  <button
                    className="mt-2 mb-4 w-fit flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-molho_de_tomate hover:bg-queijo-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-molho_de_tomate transform transition-transform hover:scale-105"
                    onClick={() => removeFromCart(index)}
                  >
                    Diminuir quantidade
                  </button>
                  <button
                    className="mt-2 mb-4 w-fit flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-molho_de_tomate hover:bg-queijo-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-molho_de_tomate transform transition-transform hover:scale-105"
                    onClick={() => addToCart(item)}
                  >
                    Aumentar quantidade
                  </button>
                </li>
              ))}
          </ul>
          <div>
            <Link
              to="/cardapio"
              className="mt-2 mb-4 w-fit flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mostarda hover:bg-queijo-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-molho_de_tomate transform transition-transform hover:scale-105"
            >
              Voltar ao cardápio
            </Link>
            <button
              className="mt-2 mb-4 w-fit flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-molho_de_tomate hover:bg-queijo-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-molho_de_tomate transform transition-transform hover:scale-105"
              onClick={handleCheckout}
            >
              Finalizar Compra
            </button>
          </div>
          <p className="font-bold text-center">Total: R$ {total().toFixed(2)}</p>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
