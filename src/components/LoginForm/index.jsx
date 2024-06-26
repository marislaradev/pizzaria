import { ErrorMessage, Field, Form, Formik } from "formik";
import { useUserAuthentication } from "../../contexts/UserAuthentication";

function LoginForm() {
  const { login, errorMessage } = useUserAuthentication();

  const handleSubmit = async (values) => {
    const { email, password } = values;
    try {
      await login(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
            <div className="mb-4">
              <h1 className="font-bold text-center mb-4 dark:text-gray-200">
                Login
              </h1>
              <label
                htmlFor="loginEmail"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email:
              </label>
              <Field
                type="email"
                id="loginEmail"
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
                htmlFor="loginPassword"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Senha:
              </label>
              <Field
                type="password"
                id="loginPassword"
                name="password"
                autoComplete="current-password"
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
              Enviar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
