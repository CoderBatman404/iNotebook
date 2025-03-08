import React from 'react';
import NoteContext from './NoteContext';

const NoteState = ({ children }) => {
  const notes = [
    {
      "note_id": 1,
      "title": "Shopping List",
      "content": "Milk, Bread, Eggs, Cheese, Butter",
      "created_at": "2025-03-01T10:15:30Z",
      "updated_at": "2025-03-02T14:20:30Z"
    },
    {
      "note_id": 2,
      "title": "Workout Plan",
      "content": "Monday: Cardio, Tuesday: Strength Training, Wednesday: Yoga",
      "created_at": "2025-03-01T11:00:00Z",
      "updated_at": "2025-03-03T16:00:00Z"
    },
    {
      "note_id": 3,
      "title": "Project Ideas",
      "content": "Build a weather app, Create a personal blog, Develop a task manager",
      "created_at": "2025-03-01T12:30:45Z",
      "updated_at": "2025-03-04T09:45:30Z"
    }
  ];

  console.log('Providing notes:', notes); // Debugging log

  return (
    <NoteContext.Provider value={notes}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
