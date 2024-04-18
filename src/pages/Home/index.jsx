import LoginForm from "../../components/LoginForm";
import SignupForm from "../../components/SignUpForm";
import texto from "./images/pizza4.png";
import pizza from "./images/pizza.png";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className={`${styles.fixedPage} bg-molho_de_tomate w-full min-h-screen flex items-center justify-center`}>
      <div className="flex gap-8">
        <div>
          <figure>
            <img
              className={`${styles.pizzaContainer} mt-12 w-full h-fit`}
              src={texto}
              alt="Texto"
            ></img>
          </figure>
          <div className="flex justify-center">
            <Link
              to="/cardapio"
              className="mt-2 mb-4 w-fit py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mostarda hover:bg-queijo-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-molho_de_tomate transform transition-transform hover:scale-105"
            >
              Ver cardápio 🍕
            </Link>
          </div>
        </div>

        <figure className={styles.pizzaContainer}>
          <img
            className={`${styles.rotatingPizza} w-72 h-fit`}
            src={pizza}
            alt="Pizza"
          ></img>
        </figure>
      </div>
    </section>
  );
}

export default Home;
