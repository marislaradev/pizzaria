import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageBase from "./pages/PageBase";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
        <Route index element={<Home />}></Route>
        <Route path="/cardapio" element={<Menu/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
