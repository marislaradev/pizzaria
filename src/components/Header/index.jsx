import { Link } from "react-router-dom";
import logo from "./images/logo.png";

function Header() {
  return (
    <header className="w-full h-16 bg-molho_de_tomate text-white fixed top-0 flex items-center justify-between pl-6">
      <span className="text-1 font-bold">
        <img className="w-60" src={logo} />
      </span>
      <nav>
        <Link to="/" className="text-white no-underline pr-6 text-lg hover:text-yellow-600">
          Home
        </Link>
        <Link to="/carrinho" className="text-white no-underline pr-6 text-lg hover:text-yellow-600">
          Carrinho
        </Link>
        <Link to="/cardapio" className="text-white no-underline pr-6 text-lg hover:text-yellow-600">
          Cardápio
        </Link>
        <Link to="/perfil" className="text-white no-underline pr-6 text-lg hover:text-yellow-600">
          Perfil
        </Link>
      </nav>
    </header>
  );
}

export default Header;
