import React from "react";

const EventCreationForm = () => {
  return (
    <div className="flex flex-row">
      <div className="card min-w-screen bg-base-100 shadow-xl">
        <div className="card-body">
        <h2 className="text-lg font-bold mb-4">Create Event</h2>
          <form>
            <div className="form-control">
    

              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Enter event title"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                placeholder="Enter event description"
                className="textarea textarea-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="Enter event location"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Upload Image</span>
              </label>
              <input type="file" accept="image/*" className="input" />
            </div>


            <div className="form-control items-center">
              <label className="label">
                <span className="label-text">Ticket Allocation</span>
              </label>
              <div className="flex space-x-4">
                <div>
                  <label className="label">
                    <span className="label-text">Standard</span>
                  </label>
                  <select className="select select-bordered">
                    {[...Array(101).keys()].map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">VIP</span>
                  </label>
                  <select className="select select-bordered">
                    {[...Array(101).keys()].map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                </div>
                </div>



            {/* Add more input fields for other event details */}
            <div className=" form-control mt-6 gap-y-4" >
              <button type="submit" className="btn btn-primary">
                Create Event
              </button>
              <button type="button" className="btn btn-secondary">Preview</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventCreationForm;
