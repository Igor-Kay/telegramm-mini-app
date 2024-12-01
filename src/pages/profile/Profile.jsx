import React from "react";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-50 profile-box">
      <h1>Личный кабинет</h1>

      <div className="inputBoxItem">
        <h3>Логин в PlayStation</h3>
        <input type="text" placeholder="Введите e-mail от турецкого аккаунта" />
      </div>

      <div className="inputBoxItem">
        <h3>Пароль в PlayStation</h3>
        <input type="text" placeholder="Введите пароль от турецкого аккаунта" />
      </div>

      <p>
        Бот запомнит данные и автоматически использует при оформлении заказа
      </p>

      <h2>Моя приставка</h2>


      <div className="selectPlatformBox">
        <div className="selectPlatformBoxItem">PLayStation 4</div>
        <div className="selectPlatformBoxItem">PLayStation 5</div>
      </div>
    </div>
  );
};

export default Profile;
