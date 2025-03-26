import React from "react";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-50 profile-box">
      <img className="user_avatar" src="./" alt="avatar"/><h1>Личный кабинет</h1>
        <form action="" method="post">
          <div className="inputBoxItem">
            <h3>Логин в PS</h3>
              <input type="text" id="user_email" placeholder="Введите e-mail от турецкого аккаунта" />
          </div>

          <div className="inputBoxItem">
            <h3>Пароль в PS</h3>
              <input type="text" id="user_password" placeholder="Введите пароль от турецкого аккаунта" />
          </div>

          <p>
            Бот запомнит данные и автоматически использует при оформлении заказа
          </p>

          <h2>Моя приставка</h2>

          <select name="_select_platform" id="_select_platform">
            <option value="">Выбрать платформу</option>
              <div className="selectPlatformBox">
                <option value="_ps5"><div className="selectPlatformBoxItem">PS4</div></option>
                <option value="_ps4"><div className="selectPlatformBoxItem">PS5</div></option>
              </div>
          </select>
        </form> 
      <p>Бот будет составлять каталог и подбирать издания игр под вашу PlayStation</p>

      <h2>Мои подписки</h2>
    </div>
  );
};

export default Profile;
