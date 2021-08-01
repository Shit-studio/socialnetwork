import React from "react";
import GayBilly from "../assets/img/977.jpg";
import { Friend, Ass } from "../components";
import "../scss/MainEpt.scss";

export function LOH() {
  return (
    <div>
      <div className="dBilly">
        <div className="stylesept">
          <div className="BillyGayTlo">
            {/* <img  alt="Тло профілю" className="ebanetlo" /> */}
          </div>
          <div className="tipamenu">
            <ul>
              <li className="active" >Пости</li>
              <li>Друзі</li>
              <li style={{
                position: "relative",
                bottom: 100
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
              <li>Відео</li>
            </ul>
          </div>
          <div className="tipamenu2">
            <div><span>Арсен Аваков</span></div>
            <div className="tipaknopky">
              <a href="#" style={{ marginLeft: 40 }}>Надіслати повідомлення</a>
              <a>Додати в друзі</a>
            </div>
          </div>
        </div>
      </div>
      <div className="jopaBilly">
        <Ass />
        <div className="avakus">
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
        </div>
      </div>
    </div>
  );
}
