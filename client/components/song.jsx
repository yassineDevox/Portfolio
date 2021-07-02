import React from "react";

const Song = (props) => {
  return (
    <li className="d-flex justify-space-between align-center">
      <img src={props.thumbnailURL} alt={props.title} />
      <div>
        <span className="text-capitalize">{props.title}</span>
        <span className="text-capitalize">{props.actor}</span>
      </div>
      <button onClick={props.handleClick}>
        <i className="fas fa-trash text-danger"></i>
      </button>
    </li>
  );
};

export default Song;
