import React from "react";
import { formattedPrice } from "../../components/ShoppingCart";

function OrderDetails({ order }) {
  return (
    <div key={order.id}>
      <p className="mt-6 font-bold text-center">Número do Pedido: {order.id}</p>
      <p className="font-bold text-center">Data e Hora: {order.dateTime}</p>
      <p className="mt-2 font-bold text-center">Itens:</p>
      <ul>
        {order.items.map((item) => (
          <li className="text-center" key={item.id}>
            {item.name} - {formattedPrice(item.price)}
          </li>
        ))}
      </ul>
      <p className="mt-4 font-bold text-center">
        Total: {formattedPrice(order.total)}
      </p>
    </div>
  );
}

export default OrderDetails;
