import LoginForm from "../../components/LoginForm";
import PizzaList from "../../components/PizzaList";
import pizza from "./images/pizza.png";

function Home() {
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center">
      <div>
        <LoginForm />
      </div>
      {/* <figure>
        <img className="w-full h-auto" src={pizza}></img>
      </figure> */}
    </section>
  );
}

export default Home;
