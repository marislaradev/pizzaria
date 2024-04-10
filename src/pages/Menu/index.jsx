import PizzaList from "../../components/PizzaList";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center">
      <div>
        <h1 className="font-bold text-3xl mb-4 mt-8 dark:text-gray-200 mx-auto text-center">
          Cardápio
        </h1>
        <PizzaList />
        <div className="flex items-center justify-center">
          <Link
            className="mt-4 mb-12 w-32 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-manjerona hover:bg-queijo-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-molho_de_tomate transform transition-transform hover:scale-105"
            to="/carrinho"
          >
            Ver carrinho
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Menu;
