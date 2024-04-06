import { useState } from "react";

function QuantitySelector() {
  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-4">
      <button
        onClick={handleDecrease}
        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
      >
        <span class="m-auto text-2xl font-thin">−</span>
      </button>
      <input
        type="number"
        min="0"
        value={quantity}
        readOnly
        className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
      />
      <button
        onClick={handleIncrease}
        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
      >
        <span class="m-auto text-2xl font-thin">+</span>
      </button>
    </div>
  );
}

export default QuantitySelector;
