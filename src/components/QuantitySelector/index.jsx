import { useState } from "react";

function QuantitySelector() {
  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleDecrease}
        className="bg-gray-200 px-3 py-1 rounded-1-md focus:outline-none"
      >
        -
      </button>
      <input
        type="number"
        min="0"
        value={quantity}
        readOnly
        className="w-16 px-2 py-1 border border-gray-300 text-center focus:outline-none"
      />
      <button
        onClick={handleIncrease}
        className="bg-gray-200 px-3 py-1 rounded-1-md focus:outline-none"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
