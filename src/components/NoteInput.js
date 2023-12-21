import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";

function NoteIput({onAdd}){
    const [isExpanded, setExpanded]=useState(false);
    const [note,setNote]=useState({
    title:"",
    content:"",
})

function handlechange(e){
    const {name,value}=e.target;
    setNote(preValue=>{
        return{
            ...preValue,
            [name]:value,
        }
    })
}
function submitButton(event){
event.preventDefault()
onAdd(note);
setNote({
    title:"",
    content:"",
})
}

function handleExpanded(){
    setExpanded(true);
}

    return(
        <div>
            <form>
              {
                isExpanded &&(
                    <input
                    value={note.title} type="text" placeholder="Title" 
                    name="title"
                    onChange={handlechange}
                    />
                )
              }
                <p>
                    <textarea 
                    value={note.content}
                    onClick={handleExpanded}
                    name="content" placeholder="Take a note..."
                    onChange={handlechange}
                    rows={isExpanded ? 3:1}
                    >
                    </textarea>
                </p>
                <button onClick={submitButton}><IoIosAdd size={30}/></button>
            </form>
        </div>
    )
}

export default NoteIput;