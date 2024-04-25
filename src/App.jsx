import React, { useState } from "react";
import Form from "./components/form";
import RenderingPpl from "./components/renderingPpl";
import axios from "axios";
import { useEffect } from "react";
import notes from "./services/notes";
import { Notification, SucsessNotification } from "./components/alert";

/////////////////////////
//EVERYTHING BUT 2.09 and 2.15 and 2.18-2.20 that were starred, i tried to do it thats why theres the filter component but it does not work>//
////////////////////////
const App = () => {
  const [persons, setPersons] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [sucsessMessage, setSucsessMessage] = useState(null);

  useEffect(() => {
    notes.getAll().then((response) => {
      setPersons(response.data);
    });
  });

  const addPerson = (newPerson) => {
    const personCheck = persons.find(
      (person) => person.name === newPerson.name
    );

    if (!personCheck) {
      setPersons([...persons, newPerson]);
      notes.create(newPerson);
      setSucsessMessage(`Added ${newPerson.name}`);
      setTimeout(() => {
        setSucsessMessage(null);
      }, 3000);
    } else {
      alert(`${newPerson.name} is already in the phonebook`);
    }
  };

  return (
    <div>
      <Notification message={errorMessage} />
      <SucsessNotification message={sucsessMessage} />
      <h1>Filter</h1>
      <h2>Phonebook</h2>
      <Form addPerson={addPerson} />
      <RenderingPpl persons={persons} />
    </div>
  );
};

export default App;

/*

import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((response) => {
      setNotes(response.data);
    });
  }, []);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1,
    };

    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;

*/
