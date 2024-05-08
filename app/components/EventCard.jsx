// import React from "react";

// async function getEvents() {
//   const res = await fetch("http://localhost:3000/api/events");
//   console.log(res.data)
//   return res.json();
// }

// // export const EventCard = () => {
// export async function EventCard() {
//   const events = await getEvents();
//   // console.log('Returned event data:', JSON.stringify(events, null, 2));
//   // console.log('Returned event data:', JSON.stringify(events, null, 2));

//   return (
//     <a href="/events/read">
//       <div className="card w-96 bg-base-100 shadow-xl">
//         <figure>
//           <img
//             src="https://ukf.com/wp-content/uploads/2023/11/dill.jpg"
//             alt="EVENT PICTURE"
//           />
//         </figure>
//         {events.map((event) => (
//           <div key={event.title} className="card-body">
//             <h2 className="card-title">{event.title}</h2>
//             <p>{event.description}</p>
//             <p>{event.date}</p>
//             <p>{event.location}</p>
//             <p>{event.genre}</p>
//           </div>
//         ))}

//         <div className="card-actions justify-end">
//           <button className="btn btn-primary">Get Tickets</button>
//         </div>
//       </div>
//     </a>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";

async function getEvents() {
  const res = await fetch("http://localhost:3000/api/events");
  if (!res.ok) {
    throw new Error(`Failed to fetch events: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  return data.documents;  // Assuming the 'documents' key contains the event data array
}



export function EventCard() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getEvents()
      .then(data => {
        if (Array.isArray(data)) {
          setEvents(data);
        } else {
          setError("Fetched data is not an array");
        }
      })
      .catch(err => {
        console.error("Error fetching events:", err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <p>Error loading events: {error}</p>;
  }

  return (
    <div>
      {events.map((event) => (
      <a key={event._id} href={`/events/${event._id}`} className="card w-96 bg-base-100 shadow-xl m-4">
      <figure>
            <img
              src={event.image || "https://ukf.com/wp-content/uploads/2023/11/dill.jpg"}
              alt="Event"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{event.title}</h2>
            <p>{event.description}</p>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Location: {event.location}</p>
            <p>Genre: {event.genre}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Get Tickets</button>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

// "use client"
// import React, { useEffect, useState } from "react";

// async function getEvents() {
//   var res = await fetch("http://localhost:3000/api/events");
//     console.log("res here: ",res)
//     var data = await res.json();
//     console.log("data here: ",data)

//   try {

//     if (!res.ok) {
//       throw new Error(`Failed to fetch events: ${res.status}`);
//     }
//     console.log("Fetched events data:", data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching events:", error);
//     throw error;  // Rethrow the error to be handled in the component
//   }
// }

// export function EventCard() {
//   const [events, setEvents] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     getEvents()
//       .then(eventsData => {
//         if (Array.isArray(eventsData)) {  // Check if the data is an array
//           setEvents(eventsData);
//         } else {
//           throw new Error("Data is not an array");
//         }
//       })
//       .catch(err => {
//         console.error("Error fetching events:", err);
//         setError(err.message);
//       });
//   }, []);

//   if (error) {
//     return <p>Error loading events: {error}</p>;
//   }

//   return (
//     <div>
//       {events.map((event) => (
//         <a key={event._id.$oid} href="/events/read" className="card w-96 bg-base-100 shadow-xl m-4">
//           <figure>
//             <img
//               // src={event.image || "https://ukf.com/wp-content/uploads/2023/11/dill.jpg"}

//               src={event.image || "https://ukf.com/wp-content/uploads/2023/11/dill.jpg"}
//               alt="Event"
//             />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">{event.title}</h2>
//             <p>{event.description}</p>
//             <p>Date: {new Date(event.date).toLocaleDateString()}</p>
//             <p>Location: {event.location}</p>
//             <p>Genre: {event.genre}</p>
//             <div className="card-actions justify-end">
//               <button className="btn btn-primary">Get Tickets</button>
//             </div>
//           </div>
//         </a>
//       ))}
//     </div>
//   );
// }
