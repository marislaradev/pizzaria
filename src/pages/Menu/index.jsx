import PizzaList from "../../components/PizzaList";

function Menu() {
  return (
    <section className="w-full min-h-[90vh]">
      <div>
        <h1 className="font-bold text-3xl mb-4 mt-8 dark:text-gray-200 mx-auto text-center">Cardápio</h1>
        <PizzaList />
      </div>
    </section>
  );
}

export default Menu;
