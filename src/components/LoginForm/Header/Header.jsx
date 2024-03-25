function Header() {
  return (
    <header className="w-full h-16 bg-red-700 text-white fixed top-0 flex items-center justify-between pl-6">
      <span className="text-1 font-bold">Pizzaria Delícia 🍕</span>
      <nav>
        <a className="text-white no-underline pr-6 text-lg hover:text-yellow-600">
          Home
        </a>
        <a className="text-white no-underline pr-6 text-lg hover:text-yellow-600">
          Carrinho
        </a>
        <a className="text-white no-underline pr-6 text-lg hover:text-yellow-600">
          Pedidos
        </a>
        <a className="text-white no-underline pr-6 text-lg hover:text-yellow-600">
          Perfil
        </a>
      </nav>
    </header>
  );
}

export default Header;
