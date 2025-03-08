import React from 'react';

const NoteCard = ({ title, description }) => {
  return (
    <div className="card " style={{ width: '18rem', margin: '10px' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default NoteCard;
