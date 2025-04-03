import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Profile.scss";

const Profile = () => {
/*  [userAvatar, setUserAvatar] = useState(null)
  useEffect(() => {
    const addUser = async () => {
      const userData = {
        login: "asdasd",
        password: "asdasd12312"
      }
      try {
        const response = await fetch("http://127.0.0.1:8080/add-user",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
          }
        );
      }
      catch {
        console.log("errorsuka")
      }
    }
  }, []);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://127.0.0.1:8080/data");
          const data = await response.json();
          if (data && data.users) {
            setUserAvatar(data.userAvatar)
            setError(null);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          setError("Ошибка при загрузке данных");
        } finally {
          setLoading(false);
        }
      };
  
  
      fetchData();
  
    }, []); */
  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-50 profile-box">
      <a class="_back" href="./">Назад</a>
      <img className="user_avatar" src={userAvatar} alt="avatar"/>
      <h1>Личный кабинет</h1>

        <form action="" method="post">

          <div className="inputBoxItem">
            <h3>Логин в PSN</h3>
              <input type="text" id="user_email" placeholder="Введите e-mail от турецкого аккаунта" />
          </div>

          <div className="inputBoxItem">
            <h3>Пароль в PSN</h3>
              <input type="text" id="user_password" placeholder="Введите пароль от турецкого аккаунта" />
          </div>

       <p>
         Бот запомнит данные и автоматически использует при оформлении заказа
       </p>
 
       <h2>Моя приставка</h2>
 
 
       <div className="selectPlatformBox">
         <div className="selectPlatformBoxItem">PLayStation 4</div>
         <div className="selectPlatformBoxItem">PLayStation 5</div>
       </div>
        </form>

      <p>Бот будет составлять каталог и подбирать издания игр под вашу консоль</p>

      <h2>Мои подписки</h2>
    </div>
  );
};

export default Profile;
