function PizzaItem({ name, ingredients, price }) {
  const formattedPrice = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <section className="bg-white text-gray-700 w-300 h-300 rounded-lg shadow-md p-20 flex flex-col items-center justify-between">
      <h2>{name}</h2>
      <p className="bg-gray-800">{ingredients}</p>
      <p>{formattedPrice}</p>
    </section>
  );
}

export default PizzaItem;
