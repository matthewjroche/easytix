"use client"
// import React from "react";
// import { QRCode } from "qrcode";

// export const QRCard = () => {
//   const qrgenerator = () => {
//     QRCode.generate();
//   };

//   return (
//     <div className="card w-96 bg-base-100 shadow-xl">
//       <figure>
//         <img
//           src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
//           alt="Shoes"
//         />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">
//           Shoes!
//           <div className="badge badge-secondary">NEW</div>
//         </h2>
//         <p>If a dog chews shoes whose shoes does he choose?</p>
//         <div className="card-actions justify-end">
//           <div className="badge badge-outline">Fashion</div>
//           <div className="badge badge-outline">Products</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QRCard;



// components/QRCard.js
import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

const QRCard = ({ text }) => {
  const [qrUrl, setQrUrl] = useState('');

  useEffect(() => {
    QRCode.toDataURL(text)
      .then(url => {
        setQrUrl(url);
      })
      .catch(err => {
        console.error(err);
      });
  }, [text]);

  return (
    <div className="card bg-base-100 shadow-xl p-5 text-center">
      <div className="card-body">
        <h2 className="card-title">Scan the QR Code</h2>
        {qrUrl ? <img src={qrUrl} alt="QR Code" className="mx-auto"/> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default QRCard;
