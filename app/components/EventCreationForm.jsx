"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { EventCreatedModal } from "./EventCreatedModal";

const EventCreationForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: "",
    date: "",
    location: "",
    standardTickets: "",
    vipTickets: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/events", {  // Ensure the path starts with a slash
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        setFormData({
          title: "",
          description: "",
          genre: "",
          date: "",
          location: "",
          standardTickets: "",
          vipTickets: "",
        });
        // document.getElementById('my_modal_5').showModal();
      } else {
        throw new Error('Failed to create event');
      }
    } catch (error) {
      alert(error.message);
    }
  };











  return (
    <div className="flex flex-row">
      <div className="card min-w-screen bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-lg font-bold mb-4">Create Event</h2>
          <form onSubmit={handleSubmit} method="POST">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Enter event title"
                className="input input-bordered"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                placeholder="Enter event description"
                className="textarea textarea-bordered"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Genre</span>
              </label>
              <input
                type="text"
                placeholder="Enter event genre"
                className="input input-bordered"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="Enter event location"
                className="input input-bordered"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Upload Image</span>
              </label>
              <input
                type="file"
                accept="image/*"
                className="input"
                onChange={handleChange}
              />
            </div> */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Standard Tickets</span>
              </label>
              <input
                type="number"
                min="10"
                className="input input-bordered"
                name="standardTickets"
                value={formData.standardTickets}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">VIP Tickets</span>
              </label>
              <input
                type="number"
                min="5"
                className="input input-bordered"
                name="vipTickets"
                value={formData.vipTickets}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control mt-6 flex justify-between">
              <button type="submit" className="btn btn-primary">
                Create Event
              </button>
              <button type="button" className="btn btn-secondary">
                Preview
              </button>
            </div>
          </form>
          {/* <EventCreatedModal /> */}
          {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Open Modal</button> */}
        </div>
      </div>
    </div>
  );
};

export default EventCreationForm;
