import React, { useState,useEffect } from "react";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import Note from "./components/Note";
import Count from "./components/Count";

function App() {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });
  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote) {
    if(newNote.length>=1){
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }
  else{
    alert("Fill all fields")
  }
  }

  function DeleteNotes(id){
    setNotes((preValue)=>{
      return [...preValue.filter((note,index)=>
        index!==id
        )]
    })
    
  }


  return (
    <div className="App">
      <Header />
      <Count count={notes.length ===0? "Empty":
    `showing ${notes.length} Notes in Database`
    }/>
      <NoteInput onAdd={addNote} />
      {notes.map((note, index) => (
        <Note key={index} id={index} title={note.title} content={note.content} 
        onDelete={DeleteNotes} setedit={setNotes}
        />
      ))}
    </div>
  );
}

export default App;
