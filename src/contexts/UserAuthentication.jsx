import React, { createContext, useState, useContext } from "react";
import * as Yup from "yup";

const UserAuthenticationContext = createContext();

export const useUserAuthentication = () => {
  return useContext(UserAuthenticationContext);
};

export const UserAuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    password: Yup.string().required("Campo obrigatório").min(6, "Senha deve ter no mínimo 6 caracteres"),
  });

  const login = async (email, password) => {
    // Implementação da função login...
  };

  const signup = async (name, email, password) => {
    try {
      await validationSchema.validate({ name, email, password }, { abortEarly: false });
      // Simulação de cadastro do usuário
      setUser({ name, email });
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Erro ao cadastrar usuário. Tente novamente.");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserAuthenticationContext.Provider value={{ user, login, signup, logout, errorMessage }}>
      {children}
    </UserAuthenticationContext.Provider>
  );
};




