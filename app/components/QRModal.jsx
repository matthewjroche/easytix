import React from 'react'

export const QRModal = () => {


function qrgen(){
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example "

}


  return (
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">QR Code</h3>
    {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1024px-QR_code_for_mobile_English_Wikipedia.svg.png"></img>

    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
  )
}
