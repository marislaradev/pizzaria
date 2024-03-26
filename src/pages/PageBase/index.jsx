import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";


function PageBase() {
  return (
    <main>
      <Header />
      <Container>
        <LoginForm/>
      </Container>
      <Footer />
    </main>
  );
}

export default PageBase;
