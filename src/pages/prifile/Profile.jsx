import React from "react"
import "./Profile.scss"

const Profile = () => {
    return (
        <div className="profileBox">
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

        </div>
    )
}

export default Profile 
