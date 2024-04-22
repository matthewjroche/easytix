// "use client";
// import React from "react";
// import { useRef } from "react";
// import { useEffect } from "react";
// import { useState } from "react";



// const EventCreationForm = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     genre: "",
//     date: "",
//     location: "",
//     image: null,
//     standardTickets: 0,
//     vipTickets: 0,
//   });




  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append("title", formData.title);
//     data.append("description", formData.description);
//     data.append("genre", formData.genre);
//     data.append("date", formData.date);
//     data.append("location", formData.location);
//     data.append("image", formData.image);
//     data.append("standardTickets", formData.standardTickets.toString()); // Ensure formData.standardTickets is not undefined
//     data.append("vipTickets", formData.vipTickets.toString()); // Ensure formData.vipTickets is not undefined

//     try {
//       const response = await fetch('../api/events/create', {
//         method: 'POST',
//         body: data,  // FormData object
//     });
    
//       if (response.ok) {
//         console.log("Event created successfully!");
//         // Reset form data after successful submission
//         setFormData({
//           title: "",
//           description: "",
//           genre: "",
//           date: "",
//           location: "",
//           image: null,
//           standardTickets: 0,
//           vipTickets: 0,
//         });
//       } else {
//         console.error("Failed to create event:", response.status);
//         const responseData = await response.json();
//         console.error(responseData);
//       }
//     } catch (error) {
//       console.error("Error creating event:", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: type === "number" ? parseInt(value) : value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       image: e.target.files[0],
//     }));
//   };

//   return (
//     <div className="flex flex-row">
//       <div className="card min-w-screen bg-base-100 shadow-xl">
//         <div className="card-body">
//           <h2 className="text-lg font-bold mb-4">Create Event</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Title</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter event title"
//                 className="input input-bordered"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Description</span>
//               </label>
//               <textarea
//                 placeholder="Enter event description"
//                 className="textarea textarea-bordered"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Genre</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter event genre"
//                 className="input input-bordered"
//                 name="genre"
//                 value={formData.genre}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Date</span>
//               </label>
//               <input
//                 type="date"
//                 className="input input-bordered"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Location</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter event location"
//                 className="input input-bordered"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Upload Image</span>
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="input"
//                 onChange={handleFileChange}
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Standard Tickets</span>
//               </label>
//               <input
//                 type="number"
//                 min="10"
//                 className="input input-bordered"
//                 name="standardTickets"
//                 value={formData.standardTickets}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">VIP Tickets</span>
//               </label>
//               <input
//                 type="number"
//                 min="5"
//                 className="input input-bordered"
//                 name="vipTickets"
//                 value={formData.vipTickets}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-control mt-6 flex justify-between">
//               <button type="submit" className="btn btn-primary">
//                 Create Event
//               </button>
//               <button type="button" className="btn btn-secondary">
//                 Preview
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCreationForm;




















"use client";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";



const EventCreationForm = () => {
  const [formData, setFormData] = useState({
      title: '',
      description: '',
      genre: '',
      date: '',
      location: '',
      standardTickets: '',
      vipTickets: '',
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch('/api/events', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
      });

      if (response.ok) {
          const result = await response.json();
          console.log(result.message);  // Log the success message
          alert('Event created successfully!');
          setFormData({
              title: '',
              description: '',
              genre: '',
              date: '',
              location: '',
              standardTickets: '',
              vipTickets: '',
          });
      } else {
          console.error('Failed to create event');
          const errorResult = await response.json();
          alert(`Failed to create event: ${errorResult.message}`);
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Upload Image</span>
              </label>
              <input
                type="file"
                accept="image/*"
                className="input"
                onChange={""}
              />
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default EventCreationForm;



