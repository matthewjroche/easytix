import React from "react";

export const UserEventCard = ({props, title, location, date, description, image}) => {
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
      </div>
    </div>
  );
};
