import React from "react";
import { QRCard } from "./QRCard";
import Popup from "reactjs-popup";
import { QRCode } from "qrcode";


export const UserEventCard = ({
  props,
  title,
  location,
  date,
  description,
  image,
}) => {

  function handleClick(){

    console.log("Log1")
    


  }



  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          //   src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          src="{image}"
          alt="EVENT IMAGE"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          EVENT NAME {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>EVENT DESCRIPTION {description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">GENRE1</div>
          {/* <div className="badge badge-outline">GENRE2</div> */}
        </div>

        <button className="btn btn-success" onClick={handleClick}>
          Get QR code
        </button>

        {/* <QRCard text="https://www.awd.com"/> */}
      </div>
    </div>
  );
};
