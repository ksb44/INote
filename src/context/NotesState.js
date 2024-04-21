import React from "react";
import NoteContext from "./noteContext";

const NoteStateProvider=(props)=>{
const initalState=[
   
]
  
  
let [notes,setNotes]=React.useState(initalState);

const getNotes=async()=>{
    try{
    const response=await fetch("http://localhost:8000/api/notes/fetchAllNotes",{
        method:"GET" ,headers:{
            'Content-Type':'application/json',
            'authorization':localStorage.getItem('accessToken')
        }
            })
            const json=await response.json()
            setNotes(json)
        }
        catch(error){
            throw new Error(error)
        }
        }
        
const  addNote=async(note)=>{
    try{
    const response=await fetch("http://localhost:8000/api/notes/addNotes",{
        method:"POST" ,headers:{
            'Content-Type':'application/json',
            'authorization':localStorage.getItem('accessToken')
        },
        body:JSON.stringify(note)
            })
            const json=await response.json()
            console.log(json)
setNotes(notes.concat(note))
        }
        catch(error){
            throw new Error(error)
        }
}
const deleteNote=async(id)=>{
    try{
    const response=await fetch(`http://localhost:8000/api/notes/deleteNote/${id}`,{
        method:"DELETE" ,headers:{
            'Content-Type':'application/json',
            'authorization':localStorage.getItem('accessToken')
        }
            })
        const json=await response.json()
        console.log(json)
    let newNotes= notes.filter((el) => el._id !== id)
    setNotes(newNotes)
        }
        catch(error){
            throw new Error(error)
        }
}
const editNote=async(id,title,description,tag)=>{
    try{
    const response=await fetch(`http://localhost:8000/api/notes/updateNote/${id}`,{
        method:"PUT" ,headers:{
            'Content-Type':'application/json',
            'authorization':localStorage.getItem('accessToken')
        },body: JSON.stringify({title,description,tag})
            })
            const json=await response.json()
            console.log(json)
for(let index=0;index<notes.length;index++){
if(notes[index]._id===id){
    notes[index].title=title
    notes[index].description=description
    notes[index].tag=tag
    break;

}
}
setNotes([...notes])
    }
    catch(error){
        throw new Error(error)
    }
}
return (
    <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote,getNotes}}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteStateProvider