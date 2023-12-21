// Note.js
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

function Note({ id, title, content, onDelete, setedit }) {
  const [noteColor, setNoteColor] = useState("#ffffff");
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleColorChange = (e) => {
    setNoteColor(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Update the title and content with the edited values
    setedit((prevNotes) =>
      prevNotes.map((note, index) =>
        index === id ? { ...note, title: editedTitle, content: editedContent } : note
      )
    );
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Reset edited title and content, and toggle back to view mode
    setEditedTitle(title);
    setEditedContent(content);
    setIsEditing(false);
  };

  return (
    <div className={`note ${isEditing ? "edited" : ""}`} style={{ backgroundColor: noteColor, padding: "10px", marginBottom: "10px" }}>
      {isEditing ? (
        <>
          <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
          <textarea value={editedContent} onChange={(e) => setEditedContent(e.target.value)} />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <>
          <h2>{title}</h2>
          <p>{content}</p>
          <div className="btns">
            <input type="color" value={noteColor} onChange={handleColorChange}></input>
            <button onClick={handleEditClick}> <CiEdit size={25} /></button>
            <button onClick={() => onDelete(id)}>
              <MdDelete size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Note;
