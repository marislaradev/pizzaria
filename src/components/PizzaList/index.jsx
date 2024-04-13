import PizzaItem from "../PizzaItem";
import pizzasData from "../../json/pizzas.json";

function PizzaList() {
  const pizzasWithIds = pizzasData.map((pizza, index) => ({
    ...pizza,
    id: index + 1, 
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-6">
      {pizzasWithIds.map((pizza) => (
        <PizzaItem
          key={pizza.id}
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
          id={pizza.id}
        />
      ))}
    </div>
  );
}

export default PizzaList;

