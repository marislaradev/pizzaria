function PizzaItem({ name, ingredients, price }) {
  const formattedPrice = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <section className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
      <h2 className="text-2xl font-bold text-gray-700">{name}</h2>
      <p className="text-sm mt-2 text-gray-700">{ingredients}</p>
      <p className="block text-xl font-semibold text-gray-700 cursor-auto">
        {formattedPrice}
      </p>
      <button className="mt-4 text-lg block font-semibold py-2 px-6  hover:text-white bg-molho_de_tomate rounded-lg shadow hover:shadow-md transition duration-300">
        Adicionar ao carrinho
      </button>
    </section>
  );
}

export default PizzaItem;
