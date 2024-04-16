import React from "react";
import { useCart } from "../../contexts/Cart";
import { useUserAuthentication } from "../../contexts/UserAuthentication";
import OrderDetails from "../../components/OrderDetails";

function UserProfilePage() {
  const { orders } = useCart();
  const { user } = useUserAuthentication();

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
          </div>
        )}
      </div>
    </section>
  );
}

export default UserProfilePage;
