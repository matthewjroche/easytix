import React from "react";

export const UserCard = (props) => {
    // console.log(props);
  return (
    
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>


      <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={props.user.picture} alt={props.user.name}/>
  </div>
</div>





        <img
        //   src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          






          
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.user.name}</h2>
        <p>{props.user.email}</p>
        
      </div>
    </div>
  );
};
