import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useUserAuthentication } from "../../contexts/UserAuthentication";

function SignupForm() {
  const { signup, message } = useUserAuthentication(); 

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Campo obrigatório")
      .matches(/^[a-zA-ZÀ-ÿ\s]+$/, "Apenas letras são permitidas no nome"),
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    password: Yup.string()
      .required("Campo obrigatório")
      .min(4, "A senha deve ter no mínimo 4 caracteres"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await signup(values.name, values.email, values.password);
      console.log("Usuário cadastrado com sucesso!");
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
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Nome:
              </label>
              <Field
                type="text"
                id="name"
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
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email:
              </label>
              <Field
                type="email"
                id="email"
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
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Senha:
              </label>
              <Field
                type="password"
                id="password"
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
            {message && (
              <p className="text-red-600 text-sm font-medium mb-4">{message}</p>
            )}
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-molho_de_tomate hover:bg-queijo-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-molho_de_tomate transform transition-transform hover:scale-105"
              disabled={isSubmitting}
            >
              Cadastrar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SignupForm;
