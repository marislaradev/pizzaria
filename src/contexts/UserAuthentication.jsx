import React, { createContext, useState, useContext } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const UserAuthenticationContext = createContext();

export const useUserAuthentication = () => {
  return useContext(UserAuthenticationContext);
};

export const UserAuthenticationProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Campo obrigatório")
      .matches(/^[a-zA-ZÀ-ÿ\s]+$/, "Apenas letras são permitidas no nome"),
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    password: Yup.string()
      .required("Campo obrigatório")
      .min(4, "A senha deve ter no mínimo 4 caracteres"),
  });

  const login = async (email, password) => {
  };

  const signup = async (name, email, password) => {
    try {
      await validationSchema.validate(
        { name, email, password },
        { abortEarly: false }
      );
      const newUser = { name, email };
      setUser(newUser);
      setMessage("Usuário cadastrado com sucesso!");

      setTimeout(() => {
        setMessage(null);
        navigate("/cardapio")
      }, 2000);
    } catch (error) {
      setMessage("Erro ao cadastrar usuário. Tente novamente!");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserAuthenticationContext.Provider
      value={{ user, login, signup, logout, message }}
    >
      {" "}
      {children}
    </UserAuthenticationContext.Provider>
  );
};
