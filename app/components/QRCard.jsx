// import React from "react";

// const QRCard = () => {


//   return (
    
//     <dialog id="QRModal" className="modal">
//       <div className="modal-box">
//         <h3 className="font-bold text-lg">Hello!</h3>
//         <p className="py-4">Press ESC key or click outside to close</p>
//       </div>
//       <form method="dialog" className="modal-backdrop">
//         <button>close</button>
//       </form>
//     </dialog>
//   );
// };

// export default QRCard;


import React from 'react'

function Modal({title, text, visible, onClose}) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    visible ? modalRef.current.showModal() : modalRef.current.close();
  }, [visible]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  }

  const handleESC = (event) => {
    event.preventDefault();
    handleClose();
  }

  return (
    <dialog ref={modalRef} id="my_modal_1" className="modal" onCancel={handleESC}>
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn" onClick={handleClose}>Close</button>
        </div>
      </form>
    </dialog>
  );
}