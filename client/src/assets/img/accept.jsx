import React from "react";

export function AcceptIcon(props) {
  return (
    <div onClick={props.acceptInvite}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        >
        <path
            fill="#4caf50"
            d="M44 24c0 11.045-8.955 20-20 20S4 35.045 4 24 12.955 4 24 4s20 8.955 20 20z"
        ></path>
        <path
            fill="#ccff90"
            d="M34.602 14.602L21 28.199l-5.602-5.598-2.797 2.797L21 33.801l16.398-16.402-2.796-2.797z"
        ></path>
        </svg>
    </div>
  );
}