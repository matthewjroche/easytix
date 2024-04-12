import React from "react";

export const EventCard = () => {
  return (
    <a href="/events/read">
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://ukf.com/wp-content/uploads/2023/11/dill.jpg"
          alt="EVENT PICTURE"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">EVENT TITLE</h2>
        <p>EVENT DESCRIPTION</p>
        <p>EVENT DATE</p>
        <p>EVENT LOCATION</p>
        <p>EVENT GENRE</p>


        <div className="card-actions justify-end">
          <button className="btn btn-primary">Get Tickets</button>
        </div>
      </div>
    </div>
    </a>
  );
};
