import React, { useContext, useState } from 'react';
import NoteContext from '../context/notes/NoteContext';

function AddNote() {
  const { addNote } = useContext(NoteContext);
  const [note, setNote] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    
    if (!note.title || !note.content) {
      console.error('Title and content are required.');
      return;
    }

    addNote(note.title,note.content);
    console.log('Note added:', note);
  };

  return (
    <div className="p-5" style={{ maxWidth: '600px' }}>
      <h1>iNotebook App</h1>
      <form onSubmit={handleAddNote}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter title"
            value={note.title}
            onChange={handleChange}
            style={{ height: '50px' }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Description</label>
          <input
            type="text"
            className="form-control"
            id="content"
            name="content"
            placeholder="Enter description"
            value={note.content}
            onChange={handleChange}
            style={{ height: '100px' }}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Note</button>
      </form>
    </div>
  );
}

export default AddNote;
