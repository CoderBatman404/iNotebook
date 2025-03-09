import React, { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = ({ children }) => {
  const initialNotes = [
    {
      "note_id": 0,
      "title": "Shopping List",
      "content": "Milk, Bread, Eggs, Cheese, Butter",
      "created_at": "2025-03-01T10:15:30Z",
      "updated_at": "2025-03-02T14:20:30Z"
    },
    // ... (other notes)
  ];
  
  const [notes, setNotes] = useState(initialNotes);
  
  const addNote = (title, content) => {
    const note = {
      "note_id": Math.floor(Math.random() * 10000), // Changed _id to note_id
      "title": title,
      "content": content,
      "created_at": new Date().toISOString(),
      "updated_at": new Date().toISOString()
    };
    setNotes(notes.concat(note));
  };
  
  const editNote = (noteId, title, content) => {
    const updatedNotes = notes.map((note) =>
      note.note_id === noteId ? { ...note, title, content, "updated_at": new Date().toISOString() } : note
    );
    setNotes(updatedNotes);
  };
  
  const deleteNote = (noteId) => {
    const newNotes = notes.filter((note) => note.note_id !== noteId); // Used note_id
    setNotes(newNotes);
  };
  
  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
