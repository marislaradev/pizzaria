import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useUserAuthentication } from "../../contexts/UserAuthentication";

function SignupForm() {
  const { signup, errorMessage, validationSchema } = useUserAuthentication();
  const [cadastroSucesso, setCadastroSucesso] = useState(false);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const { name, email, password } = values;
    try {
      await signup(name, email, password);
      setCadastroSucesso(true);
      resetForm(); // Limpa o formulário
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
            <div className="mb-4">
              <h1 className="font-bold text-center mb-4 dark:text-gray-200">
                Cadastro
              </h1>
              <label
                htmlFor="signupName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Nome:
              </label>
              <Field
                type="text"
                id="signupName"
                name="name"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-molho_de_tomate focus:border-molho_de_tomate"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-sm font-medium text-red-600 dark:text-red-600 mb-2"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="signupEmail"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email:
              </label>
              <Field
                type="email"
                id="signupEmail"
                name="email"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-molho_de_tomate focus:border-molho_de_tomate"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm font-medium text-red-600 dark:text-red-600 mb-2"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="signupPassword"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Senha:
              </label>
              <Field
                type="password"
                id="signupPassword"
                name="password"
                autoComplete="new-password"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-manjerona focus:border-manjerona"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-sm font-medium text-red-600 dark:text-red-600 mb-2"
              />
            </div>
            {errorMessage && (
              <p className="text-red-600 text-sm font-medium mb-4">
                {errorMessage}
              </p>
            )}
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-molho_de_tomate hover:bg-queijo-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-molho_de_tomate transform transition-transform hover:scale-105"
              disabled={isSubmitting}
            >
              Cadastrar
            </button>
          </div>
          {cadastroSucesso && (
            <div className="bg-green-200 text-green-800 rounded-md px-4 py-2 mt-4">
              Cadastro realizado com sucesso!
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}

export default SignupForm;
