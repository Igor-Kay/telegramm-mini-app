import React from "react";
import "./GameCard.scss";

const GameCard = ({
  name,
  price,
  description,
  photos,
  exchangeRate,
  addToCart,
  isInCart,
}) => {
  const cleanPrice = price;
  const numericPrice = parseFloat(cleanPrice);
  const priceInRubles = (numericPrice * exchangeRate).toFixed(2);

  return (
    <div className="gameCardBox">
      <img src={photos} alt={name} />
      <div className="">
        <h3 className="">{name}</h3>
        <div className="flex items-center justify-between">
          <div>
            <span className="price-text">
              {priceInRubles} руб.
            </span>
          </div>
        </div>
        <button
          onClick={() =>
            addToCart({ name, price: priceInRubles, description, photos })
          }
          className={`shopCardBoxBtn rounded-lg ${
            isInCart
              ? "bg-gray-400"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
          disabled={isInCart}
        >
          {isInCart ? "Добавлено" : "В корзину"}
        </button>
      </div>
    </div>
  );
};


export default GameCard