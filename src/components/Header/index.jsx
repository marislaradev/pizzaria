import { Link } from "react-router-dom";
import logo from "./images/logo.png";

function Header() {
  return (
    <header className="w-full h-16 bg-mostarda text-white fixed top-0 flex items-center justify-between pl-6 z-10">
      <Link to="/">
        <span className="text-1 font-bold">
          <img className="w-28" src={logo} />
        </span>
      </Link>
      <nav>
        <Link
          to="/"
          className="text-white no-underline pr-6 text-lg hover:text-red-800"
        >
          Home
        </Link>
        <Link
          to="/cardapio"
          className="text-white no-underline pr-6 text-lg  hover:text-red-800"
        >
          Cardápio
        </Link>
        <Link
          to="/carrinho"
          className="text-white no-underline pr-6 text-lg  hover:text-red-800"
        >
          Carrinho
        </Link>
        <Link
          to="/perfil"
          className="text-white no-underline pr-6 text-lg  hover:text-red-800"
        >
          Perfil
        </Link>
      </nav>
    </header>
  );
}

export default Header;
