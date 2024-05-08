// // app/events/[eventid/page.jsx]
// import React from 'react'
    
// export default function(params){


    
//     console.log(params)
//   return (
//     <div>{params.id}</div>
//   )
// }





// "use client"
// // Located in app/events/[eventid]/page.jsx
// import React from 'react';
// // import { useRouter } from 'next/router';
// import { useRouter } from 'next/navigation';
// // import EventDetails from './EventDetails.server';
// import EventDetails from '@/app/components/EventDetails.server';

// export default function Page() {
//   const router = useRouter();
//   const { eventid } = router.query; // Using the name `eventid` to match the folder name

//   return (
//     <EventDetails eventId={eventid} />
//   );
// }




// // app/events/[eventid]/page.jsx
// import { EventCard } from '@/app/components/EventCard';
// import { EventCardDetailed } from '@/app/components/EventCardDetailed';
// import React from 'react';
// // import { useData } from 'next/data';


// // Loader function to fetch event data based on event ID
// export async function loader({ params }) {
//     const response = await fetch(`http://localhost:3000/api/events/${params.eventid}`);
//     const data = await response.json();
//     return data;
// }

// // Component to display event details
// export default function EventPage() {
//     // const event = useData(loader);
//     var event =1
    
//     // Check if the event data is available
//     if (!event) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div>
//             {/* <h1>{event.title}</h1>
//             <img src={event.image} alt={event.title} style={{ width: '100%' }} />
//             <p>{event.description}</p>
//             <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
//             <p><strong>Location:</strong> {event.location}</p>
//             <p><strong>Tickets Available:</strong> Standard: {event.standardTickets}, VIP: {event.vipTickets}</p> */}

//             <EventCard/>
//             {/* <EventCardDetailed/> */}


//         </div>
//     );
// }


// // app/events/[eventid]/page.jsx
// import React from 'react';
// import { EventCardSingle } from '../../components/EventCardSingle';
// import { fetch } from 'next/navigation';  // Import fetch from next/navigation if needed

// // Loader function for fetching specific event details
// export async function loader({ params }) {
//     // Fetch all events from the API
//     const response = await fetch(`http://localhost:3000/api/events/`);
//     const allEvents = await response.json();

//     // Find the specific event by ID from the list of all events
//     const event = allEvents.documents.find(e => e._id === params.eventid);

//     // Return the specific event to be available as a prop
//     return { event };  // This will make `event` available as a prop
// }

// // EventPage component that receives the event directly from loader
// export default function EventPage({ event }) {
//     return <EventCardSingle event={event} />;
// }







// // app/events/[eventid]/page.jsx
// import React from 'react';
// import { EventCardSingle } from '../../components/EventCardSingle';
// import { fetch } from 'next/navigation';  // Import fetch from next/navigation if needed

// // Loader function for fetching specific event details
// export async function loader({ params }) {
//     try {
//         const response = await fetch(`http://localhost:3000/api/events/`);
//         if (!response.ok) {
//             throw new Error(`Failed to fetch events: ${response.status} ${response.statusText}`);
//         }
//         const allEvents = await response.json();

//         // Find the specific event by ID from the list of all events
//         const event = allEvents.documents.find(e => e._id === params.eventid);
//         if (!event) {
//             throw new Error('Event not found');
//         }

//         // Return the specific event to be available as a prop
//         return { event };
//     } catch (error) {
//         // Handle errors and possibly return an error state
//         return { error: error.message };
//     }
// }

// // EventPage component that handles the event or an error state
// export default function EventPage({ event, error }) {
//     if (error) {
//         return <p>Error loading event: {error}</p>;
//     }

//     return <EventCardSingle event={event} />;
// }















// // app/events/[eventid]/page.jsx
// import React from 'react';
// import { EventCardSingle } from '../../components/EventCardSingle';
// import { fetch } from 'next/navigation';  // Import fetch from next/navigation if needed

// // Loader function for fetching specific event details
// export async function loader({ params }) {
//     console.log(params)
//     try {
//         const response = await fetch(`http://localhost:3000/api/events/`);
//         if (!response.ok) {
//             throw new Error(`Failed to fetch events: ${response.status} ${response.statusText}`);
//         }
//         const allEvents = await response.json();

//         // Find the specific event by ID from the list of all events
//         const event = allEvents.documents.find(e => e._id === params.eventid);
//         console.log(params.eventid)
//         if (!event) {
//             throw new Error('Event not found');
//         }

//         // Instead of returning the event, return eventID
//         return { props: { eventID: params.eventid } };  // Change here
//     } catch (error) {
//         // Handle errors and possibly return an error state
//         return { props: { error: error.message } };  // Change here
//     }
// }

// // EventPage component now expects eventID instead of event
// export default function EventPage({ eventID, error }) {
//     // if (error) {
//     //     return <p>Error loading event: {error}</p>;
//     // }

//     // Pass eventID instead of event
//     return <EventCardSingle eventID={eventID} />;
// }















"use client"
// app/events/[eventid]/page.jsx
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function EventPage(params) {
    console.log(params.data)
    const router = useRouter();
    // Use optional chaining to safely access eventid
    const eventid = router.query?.eventid;

    const [paymentUrl, setPaymentUrl] = useState('');

    useEffect(() => {
        // Check if eventid is available
        if (!eventid) {
            console.log("Event ID is not available yet.");
            return;
        }

        // You can also perform other operations dependent on `eventid` here
        console.log("Event ID is available:", eventid);
    }, [eventid]); // Reacting on change of eventid

    const handlePayment = async () => {
        if (!eventid) {
            console.error("Event ID is undefined, cannot proceed with payment.");
            return;
        }

        try {
            const response = await fetch('/api/create-payment-link', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ eventId: eventid }),
            });

            const data = await response.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error('Failed to create payment link:', data.error);
            }
        } catch (error) {
            console.error('Error fetching payment link:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Stripe Payment Portal</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                        <a href='https://buy.stripe.com/test_7sI15D2yt6Ve7GofYY'><button className="btn btn-primary"  >Buy Now</button>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
