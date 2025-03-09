import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';

function NoteCard() {
  const { notes, deleteNote } = useContext(NoteContext);

  const handleDelete = (noteId) => {
    deleteNote(noteId);
    console.log('Deleted note with id:', noteId);
  };

  const handleEdit = (noteId) => {
    // Implement your edit logic here or navigate to an edit page
    console.log('Edit note with id:', noteId);
  };

  if (notes.length === 0) {
    return <h3 className=' m-5 text-secondary '>No Notes</h3>;
  }

  return (
    <div className="p-5">
      <h2>Your Notes</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {notes.map(note => (
          <div className="col" key={note.note_id}>
            <div className="card h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{note.title}</h5>
                  <p className="card-text">{note.content}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <button className="btn btn-primary" onClick={() => handleEdit(note.note_id)} style={{ marginRight: '10px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                      <path d="M12.146.854a.5.5 0 0 1 .708 0l1.292 1.292a.5.5 0 0 1 0 .708L6.354 11.646a.5.5 0 0 1-.168.11L2 14l2.244-.647a.5.5 0 0 1-.11.168L14.292 3.5a.5.5 0 0 1 .708 0zM11.354 2L3 10.354V13h2.646L13.646 4.354 11.354 2z"/>
                    </svg> Edit
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDelete(note.note_id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5M8 5.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6a.5.5 0 0 0-1 0V6z"/>
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteCard;
