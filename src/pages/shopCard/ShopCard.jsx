import React from "react";
import "./ShopCard.scss";

const ShopCard = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);

  return (
    <div className="shop-card">
      <div className="shop-card-header">
        <h2>Корзина</h2>
        <span className="total-price">{totalPrice} ₽</span>
      </div>

      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index} className="shop-card-item">
            <img
              src={item.photos || "https://via.placeholder.com/60"}
              alt={item.name}
              className="item-image"
            />
            <div className="item-details">
              <h3 className="item-title">{item.name}</h3>
              <p className="item-description">{item.description}</p>
            </div>
            <button
              className="remove-item-btn"
              onClick={() => removeFromCart(index)}
            >
              🗑️
            </button>
          </div>
        ))
      ) : (
        <p className="empty-cart-text">Ваша корзина пуста</p>
      )}

      {cart.length > 0 && (
        <>
          <div className="order-section">
            <h3>Куда оформить заказ?</h3>
            <div className="order-options">
              <button className="option-btn active">На мой аккаунт</button>
              <button className="option-btn">У меня нет аккаунта</button>
            </div>
            <p className="info-text">
              У меня есть турецкий аккаунт, оформите на него
            </p>
          </div>

          <div className="account-data">
            <h3>Данные аккаунта</h3>
            <form className="account-form">
              <input type="email" placeholder="Введите e-mail" />
              <input type="password" placeholder="Введите пароль" />
              <div className="checkbox-section">
                <input type="checkbox" id="same-email" />
                <label htmlFor="same-email">
                  E-mail для чека такой же, как логин
                </label>
              </div>
              <input type="email" placeholder="Введите e-mail для чека" />
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ShopCard;
