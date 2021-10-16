import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt={props.monster.name} />
      <h1>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
    </div>
  );
}

export default Card;
