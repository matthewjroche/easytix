// // use-client indicates that this component should only run in the client-side environment.
"use client";
// import React, { useEffect, useState } from "react";

// // Function to fetch a single event by ID
// async function getEvent(eventID) {
//     if (!eventID) {
//         throw new Error("Event ID is undefined");
//     }
//     const response = await fetch(`http://localhost:3000/api/events/${eventID}`);
//     if (!response.ok) {
//         throw new Error(`Failed to fetch event: ${response.status} ${response.statusText}`);
//     }
//     return await response.json();
// }
// export function EventCardSingle({ eventID }) {
//     const [event, setEvent] = useState(null);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         getEvent(eventID)
//             .then(setEvent)
//             .catch(err => {
//                 console.error("Error fetching event:", err);
//                 setError(err.message);
//             });
//     }, [eventID]); // Ensure eventID is in the dependency array

//     if (error) {
//         return <p>Error loading event: {error}</p>;
//     }

//     if (!event) {
//         return <p>Loading...</p>;
//     }


//   return (
//     <div className="card w-96 bg-base-100 shadow-xl m-4">
//       <figure>
//         <img
//           src={event.image || "https://ukf.com/wp-content/uploads/2023/11/dill.jpg"}
//           alt={event.title}
//         />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{event.title}</h2>
//         <p>{event.description}</p>
//         <p>Date: {new Date(event.date).toLocaleDateString()}</p>
//         <p>Location: {event.location}</p>
//         <p>Genre: {event.genre}</p>
//         <div className="card-actions justify-end">
//           <button className="btn btn-primary">Get Tickets</button>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";

async function getEvent(eventID) {
    if (!eventID) {
        throw new Error("Event ID is undefined");
    }
    const response = await fetch(`http://localhost:3000/api/events/${eventID}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch event: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}

export function EventCardSingle({ eventID }) {
    const [event, setEvent] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!eventID) {
            console.error("Event ID is undefined at the time of component mount.");
            setError("Event ID is undefined");
            return;
        }

        getEvent(eventID)
            .then(setEvent)
            .catch(err => {
                console.error("Error fetching event:", err);
                setError(err.message);
            });
    }, [eventID]); // Ensure eventID is included in the dependency array

    if (error) {
        return <p>Error loading event: {error}</p>;
    }

    if (!event) {
        return <p>Loading...</p>;
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl m-4">
            <figure>
                <img src={event.image || "placeholder-image-url"} alt={event.title} />
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
        </div>
    );
}
