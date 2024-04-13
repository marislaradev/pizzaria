import { useCart } from "../../contexts/Cart";

function PizzaItem({ id, name, ingredients, price }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const pizza = { id, name, price };
    addToCart(pizza);
  };

  const formattedPrice = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <section className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
      <h2 className="text-2xl font-bold text-gray-700">{name}</h2>
      <p className="text-sm mt-2 text-gray-700">{ingredients}</p>
      <p className="block text-xl font-semibold text-gray-700 cursor-auto mt-1">
        {formattedPrice}
      </p>
      <button
        onClick={handleAddToCart}
        className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-molho_de_tomate hover:bg-queijo-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-molho_de_tomate transform transition-transform hover:scale-105"
      >
        Adicionar ao carrinho
      </button>
      {/* <QuantitySelector /> */}
    </section>
  );
}

export default PizzaItem;
