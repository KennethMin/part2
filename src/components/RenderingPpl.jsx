import React from "react";
import DeleteButton from "./DeleteButton";

const RenderingPpl = ({ persons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li className="note" key={index}>
            {person.name} - {person.number}
            <DeleteButton index={person.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RenderingPpl;
