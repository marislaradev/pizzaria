import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageBase from "./pages/PageBase";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import { CartProvider } from "./contexts/Cart";
import UserProfilePage from "./pages/userProfilePage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<PageBase />}>
            <Route index element={<Home />}></Route>
            <Route path="/cardapio" element={<Menu />}></Route>
            <Route path="/carrinho" element={<ShoppingCartPage />}></Route>
            <Route path="/perfil" element={<UserProfilePage />}></Route>
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
