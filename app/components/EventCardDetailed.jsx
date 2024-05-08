// "use client";
// import React from "react";
// import { useState } from "react";

// export const EventCardDetailed = () => {
//   // State to manage ticket quantities
//   const [ticketQuantities, setTicketQuantities] = useState({
//     generalAdmission: 0,
//     vip: 0,
//     // Add more ticket types as needed
//   });

//   // Function to handle quantity change for a ticket type
//   const handleQuantityChange = (ticketType, quantity) => {
//     setTicketQuantities({ ...ticketQuantities, [ticketType]: quantity });
//   };

//   const getTotalPrice = () => {
//     let totalPrice = 0;
//     for (const ticketType in ticketQuantities) {
//       totalPrice += ticketQuantities[ticketType] * ticketPrices[ticketType];
//     }
//     return totalPrice;
//   };

//   // Ticket prices
//   const ticketPrices = {
//     generalAdmission: 20,
//     vip: 50,
//     // Add more ticket types as needed
//   };

//   return (
  
//     <div className="flex flex-row">
//       <div className="card min-w-screen bg-base-100 shadow-xl">
//         <div className="card-body">
//           <h2 className="card-title">EVENT TITLE - Tickets</h2>

//           <table className="table w-full">
//             <thead>
//               <tr>
//                 <th>Ticket Type</th>
//                 <th>Price</th>
//                 <th>Quantity Available</th>
//                 <th>Quantity</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>General Admission</td>
//                 <td>$20</td>
//                 <td>100</td>
//                 <td>
//                   <select
//                     value={ticketQuantities.generalAdmission}
//                     onChange={(e) =>
//                       handleQuantityChange(
//                         "generalAdmission",
//                         parseInt(e.target.value)
//                       )
//                     }
//                   >
//                     {[...Array(101).keys()].map((num) => (
//                       <option key={num} value={num}>
//                         {num}
//                       </option>
//                     ))}
//                   </select>
//                 </td>
//               </tr>
//               <tr>
//                 <td>VIP</td>
//                 <td>$50</td>
//                 <td>50</td>
//                 <td>
//                   <select
//                     value={ticketQuantities.vip}
//                     onChange={(e) =>
//                       handleQuantityChange("vip", parseInt(e.target.value))
//                     }
//                   >
//                     {[...Array(51).keys()].map((num) => (
//                       <option key={num} value={num}>
//                         {num}
//                       </option>
//                     ))}
//                   </select>
//                 </td>
//               </tr>
//               {/* Add more rows for additional ticket types */}
//             </tbody>
//           </table>

//           <div className="card-actions justify-end">
//             <button
//               className="btn btn-primary"
//               onClick={() => alert(`Total Price: $${getTotalPrice()}`)}
//             >
//               Get Tickets
//             </button>{" "}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };




"use client"
import React, { useState } from "react";

export const EventCardDetailed = ({ event }) => {
  // State to manage ticket quantities
  const [ticketQuantities, setTicketQuantities] = useState({
    generalAdmission: 0,
    vip: 0,
  });

  // Function to handle quantity change for a ticket type
  const handleQuantityChange = (ticketType, quantity) => {
    setTicketQuantities({ ...ticketQuantities, [ticketType]: quantity });
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (const ticketType in ticketQuantities) {
      totalPrice += ticketQuantities[ticketType] * (event.ticketPrices[ticketType] || 0);
    }
    return totalPrice;
  };

  return (
    <div className="flex flex-row">
      <div className="card min-w-screen bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{event.title} - Tickets</h2>

          <table className="table w-full">
            <thead>
              <tr>
                <th>Ticket Type</th>
                <th>Price</th>
                <th>Quantity Available</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(event.ticketPrices).map(([type, price]) => (
                <tr key={type}>
                  <td>{type}</td>
                  <td>${price}</td>
                  <td>{event.ticketAvailability[type]}</td>
                  <td>
                    <select
                      value={ticketQuantities[type]}
                      onChange={(e) => handleQuantityChange(type, parseInt(e.target.value))}
                    >
                      {[...Array(event.ticketAvailability[type] + 1).keys()].map(num => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={() => alert(`Total Price: $${getTotalPrice()}`)}>
              Get Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
