import LoginForm from "../../components/LoginForm";
import SignupForm from "../../components/SignUpForm";
import pizza from "./images/pizza.png";

function Home() {
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center">
      <div className="flex gap-8">
        {/* <LoginForm /> */}
        <SignupForm />
      </div>
      {/* <figure>
        <img className="w-full h-auto" src={pizza}></img>
      </figure> */}
    </section>
  );
}

export default Home;
