// // Located in app/events/[id]/EventDetails.server.jsx
// import React, { useEffect, useState } from 'react';

// const EventDetails = ({ eventId }) => {
//     const [event, setEvent] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchEvent = async () => {
//             const response = await fetch(`http://localhost:3000/api/events/${eventId}`);
//             const eventData = await response.json();
//             setEvent(eventData);
//             setLoading(false);
//         };

//         if (eventId) {
//             fetchEvent();
//         }
//     }, [eventId]);

//     if (loading) return <p>Loading...</p>;
//     if (!event) return <p>No event found.</p>;

//     return (
//         <div>
//             <h1>{event.title}</h1>
//             <p>{event.description}</p>
//             {/* More details can be rendered here */}
//         </div>
//     );
// };

// export default EventDetails;




// Located in app/events/[eventid]/EventDetails.server.jsx
import React, { useState, useEffect } from 'react';

const EventDetails = ({ eventId }) => {
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await fetch(`http://localhost:3000/api/events/${eventId}`);
      const data = await response.json();
      setEvent(data);
      setIsLoading(false);
    };

    if (eventId) {
      fetchEvent();
    }
  }, [eventId]);

  if (isLoading) return <p>Loading...</p>;
  if (!event) return <p>No event found.</p>;

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      {/* Render more event details as needed */}
    </div>
  );
};

export default EventDetails;
