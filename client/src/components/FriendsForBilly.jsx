import React from 'react'
import GayBilly from "../assets/img/977.jpg";
import "../scss/Friend.scss";

export function Friend() {
    return (
        <div className="Friend">
            <img
                src={GayBilly}
                alt="Тло профілю"
                style={{
                    borderRadius: "50%",
                    height: 130,
                    width: 130,
                    overflow: "hidden",
                    objectFit: "cover",
                    marginTop: 34
                }}
            />
            <p>Арсен Аваков</p>
            <a href="https://www.pornhub.com/video/search?search=girlscore" target="_blank" rel="noreferrer">Надіслати повідомлення</a>
        </div>
    );
}
