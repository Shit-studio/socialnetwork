import React from "react";
import GayBilly from "../assets/img/977.jpg";
import "../scss/MainEpt.scss";

export function Menu() {
  return (
    <div className="stylesept">
      <div className="BillyGayTlo">
        {/* <img  alt="Тло профілю" className="ebanetlo" /> */}
      </div>
      <div className="tipamenu">
        <ul>
          <li className="active" >Пости</li>
          <li>Друзі</li>
          <li style={{
              position:"relative",
              bottom:100
          }}>
            <img
              src={GayBilly}
              alt="Тло профілю"
              style={{
                borderRadius: "50%",
                height: 207,
                width: 207,
                overflow: "hidden",
                objectFit: "cover",
              }}
            />
          </li>
          <li>Фото</li>
          <li className="videoli">Відео</li>
        </ul>
      </div>
      <div className="tipaknopky">
        <a href="#" style={{marginLeft: 40}}>Надіслати повідомлення</a>
        <a>Взяти в рот</a>
      </div>
    </div>
  );
}
