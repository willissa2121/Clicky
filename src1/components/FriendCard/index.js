import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div onClick={()=>props.delete(props.id)} className="card">
      <div className="img-container">
      <img src={props.image} alt="not"/>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span  className="remove">𝘅</span>
    </div>
  );
}

export default FriendCard;
