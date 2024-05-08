import React from "react";

export const EventCreatedModal = () => {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">


        {/* <h3 className="font-bold text-lg">Event Created!</h3>
        <p className="py-4">Title: Summer Vibes Music Festival</p>
        <p className="py-4">Description: Join us for an unforgettable experience at the annual Summer Vibes Music Festival, featuring top artists from around the globe, diverse food options, and activities for all ages.</p>
        <p className="py-4">Genre: Family</p>
        <p className="py-4">Date: 2024-07-20T18:00:00Z</p>
        <p className="py-4">Location: Sunshine Park, California</p>
        <p className="py-4">Standard Tickets: 5000</p>
        <p className="py-4">VIP Tickets: 300</p> */}


        <h3 className="font-bold text-lg">Event Failed</h3>
        <p className="py-4">Invalid date </p>
  









        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
