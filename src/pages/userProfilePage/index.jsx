import React from "react";
import { useCart } from "../../contexts/Cart";
import { useNavigate } from "react-router-dom";
import { useUserAuthentication } from "../../contexts/UserAuthentication";
import OrderDetails from "../../components/OrderDetails";

function UserProfilePage() {
  const navigate = useNavigate();
  const { orders } = useCart();
  const { user, logout } = useUserAuthentication();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <section className="w-full min-h-[90vh] flex flex-col items-center justify-center">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 w-fit h-fit mt-6">
        <h1 className="font-bold text-3xl mb-4 dark:text-gray-200 mx-auto text-center">
        Meus Pedidos
        </h1>
        {orders.map((order) => (
          <OrderDetails key={order.id} order={order} />
        ))}
      </div>
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 w-fit h-fit mt-6">
        <h1 className="font-bold text-3xl mb-4 dark:text-gray-200 mx-auto text-center">
          Informações do Usuário
        </h1>
        {user && (
          <div className="text-center">
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
            <button
              onClick={handleLogout}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default UserProfilePage;
