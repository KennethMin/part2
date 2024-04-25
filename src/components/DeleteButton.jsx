import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Delete = (props) => {
  const onClick = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:3001/persons/${props.index}`);
  };

  return (
    <div>
      <button onClick={onClick}>Delete</button>
    </div>
  );
};

export default Delete;
