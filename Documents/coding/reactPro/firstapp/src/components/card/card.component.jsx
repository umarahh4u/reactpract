import React from "react";
import "./card.style.css";

export const Card = (props) => {
  const { id, name, email } = props.monster;
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="Monster"
      />
      <h1 className="heading" key={id}>{name}</h1>
      <p>{email}</p>
    </div>
  );
};
