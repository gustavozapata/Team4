import React, { useState } from "react";

export default function Incident(props) {
  const [voluntering, setVoluntering] = useState(false);
  const [num, setNum] = useState(props.incident.volunteers);

  const onVolunteer = () => {
    setVoluntering(true);
    setNum(parseInt(num, 10) + 1);
  };

  return (
    <div className="Incident">
      <img
        className="priority-img"
        src={require(`../images/${props.incident.priority}.png`)}
      />
      <h1>{props.incident.name}</h1>
      <br />
      <img className="location-img" src={require("../images/location.png")} />
      <h3>{props.incident.location}</h3>
      <img
        className="incident-img"
        src={require(`../images/${props.incident.image}.jpg`)}
      />
      <button className="category">{props.incident.category}</button>
      <div className="posted-by">
        <img
          className="creator-img"
          src={require(`../images/${props.incident.postedimg}.jpeg`)}
        />
        <p>
          Published by <br />
          <span>{props.incident.postedby}</span>
        </p>
      </div>
      <p className="description">{props.incident.description}</p>
      <div className="actions">
        <div className="action-donate">
          <img src={require("../images/donate.png")} />
          <p>{props.incident.donation}</p>
          <button>Donate</button>
        </div>
        <div>
          <img src={require("../images/volunteer.png")} />
          <p>{num}</p>
          <button
            className={voluntering ? "registered" : ""}
            onClick={() => onVolunteer()}
          >
            {voluntering ? "Registered" : "Volunteer"}
          </button>
        </div>
      </div>
    </div>
  );
}
