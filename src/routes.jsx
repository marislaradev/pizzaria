import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageBase from "./pages/PageBase";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
