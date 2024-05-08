"use client";

import { useRouter } from "next/router";
import { useState } from "react";

import React from "react";

export default function EventForm2() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [standardTickets, setSTix] = useState("100");
  const [vipTickets, setVTix] = useState("100");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const event = {
      title,
      description,
      genre,
      date,
      location,
      standardTickets,
      vipTickets,
    };

    // const res = await fetch("http://127.0.0.1:3000/api/events", {
      const res = await fetch("http://localhost:3000/api/events", {

      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(event)
    });

    if (res.status===201){
      // Router.push('/search')
      console.log("test1")
    }
  };

  return (
    <div className="flex flex-row">
      <div className="card min-w-screen bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-lg font-bold mb-4">Create Event</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                required
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                required
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Genre</span>
              </label>
              <input
                required
                type="text"
                onChange={(e) => setGenre(e.target.value)}
                value={genre}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                required
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                required
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Standard Tickets</span>
              </label>
              <input
                required
                type="number"
                min="100"
                onChange={(e) => setSTix(e.target.value)}
                value={standardTickets}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">VIP Tickets</span>
              </label>
              <input
                required
                type="number"
                min="100"
                onChange={(e) => setVTix(e.target.value)}
                value={vipTickets}
              />
            </div>
            <div className="form-control mt-6 flex justify-between">
              <button type="submit" className="btn btn-primary">
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// import React from 'react'

// export default function EventForm2  () {

//    // Server Action defined within the component
//    async function handleCreateEvent(formData) {
//     'use server';

//     const rawFormData = {
//       title: formData.get('title'),
//       description: formData.get('description'),
//       genre: formData.get('genre'),
//       date: formData.get('date'),
//       location: formData.get('location'),
//       standardTickets: formData.get('standardTickets'),
//       vipTickets: formData.get('vipTickets'),
//     };

//     // Here you could call an internal API, or directly interact with the database or other services
//     const response = await fetch('http://127.0.0.1:3000/api/events', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(rawFormData),
//     });

//     if (response.ok) {
//       console.log('Event created successfully!');
//       // Handle further actions like redirection or clearing the form, alerting the user, etc.
//     } else {
//       console.error('Failed to create event.');
//       // Handle error feedback
//     }
//   }
//     return (
//     <div className="flex flex-row">
//     <div className="card min-w-screen bg-base-100 shadow-xl">
//       <div className="card-body">
//         <h2 className="text-lg font-bold mb-4">Create Event</h2>
//         <form action={handleCreateEvent}>
//           <input type="text" name="title" placeholder="Enter event title" required />
//           <textarea name="description" placeholder="Enter event description" required />
//           <input type="text" name="genre" placeholder="Enter event genre" required />
//           <input type="date" name="date" required />
//           <input type="text" name="location" placeholder="Enter event location" required />
//           <input type="number" name="standardTickets" min="1" placeholder="Number of Standard Tickets" required />
//           <input type="number" name="vipTickets" min="1" placeholder="Number of VIP Tickets" required />
//           <button type="submit" className="btn btn-primary">Create Event</button>
//         </form>
//       </div>
//     </div>
//   </div>
//   )
// }

// async function EventForm2(formData) {

//   const rawFormData = {
//     title: formData.get('title'),
//     description: formData.get('description'),
//     genre: formData.get('genre'),
//     date: formData.get('date'),
//     location: formData.get('location'),
//     standardTickets: formData.get('standardTickets'),
//     vipTickets: formData.get('vipTickets'),
//   };

//   try {
//     const response = await fetch('http://127.0.0.1:3000/api/events', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(rawFormData),
//     });

//     if (response.ok) {
//       console.log('Event created successfully!');
//       // Handle further actions like redirection or clearing the form, alerting the user, etc.
//     } else {
//       const errorData = await response.json(); // Assuming the server sends a JSON response with error details
//       console.error('Failed to create event:', errorData.message);
//       alert('Failed to create event: ' + errorData.message);
//     }
//   } catch (error) {
//     console.error('Error submitting form:', error);
//     alert('Error submitting form: ' + error.message);
//   }
// }
