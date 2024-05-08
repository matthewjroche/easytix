import React from "react";
import { EventCard } from "@/app/components/EventCard";
import { BackgroundHero } from "@/app/components/BackgroundHero";
import { TicketForm } from "@/app/components/TicketForm";
import { TicketCard } from "@/app/components/TicketCard";
import { UserEventCard } from "@/app/components/UserEventCard";
import { EventCardDetailed } from "@/app/components/EventCardDetailed";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`http://localhost:3000/api/events/${id}`);
  const event = await res.json();

  return { props: { event } }; // Passing event data as props to the page
}

// export default function page() {
//   return (
//     <div>
//       <div
//         className="hero min-h-screen"
//         style={{
//           backgroundImage:
//             //   "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
//             "url(https://luxurylondon.co.uk/wp-content/uploads/2022/04/boardmasters-uk-festivals-c-shutterstock-Jordan-Crosby.jpg)",
//         }}
//       >
//         <div className="hero-overlay bg-opacity-60"></div>
//         <EventCardDetailed />
//       </div>
//     </div>
//   );
// }


const page = ({ event }) => {
  // return <EventCardDetailed event={event} />;
};

export default page;