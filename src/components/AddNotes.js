import React,{useState} from 'react';
import NoteContext from '../context/noteContext';
function AddNotes() {

const context=React.useContext(NoteContext);
const {addNote}=context
    const [note,setNote]=useState({title:"",description: "",tag:""})
    const onClick=(e)=>{
e.preventDefault()
addNote(note)
setNote({title:"",description: "",tag:""})

    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]: e.target.value })

    }
    return (
        <>
               <form>
  <div className="mb-3">
    <label htmlFor="title"  className="form-label">Title</label>
    <input type="text" value={note.title} className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" value={note.description} className="form-control" name="description" id="description" onChange={onChange}minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text"value={note.tag} className="form-control" name="tag" id="tag" onChange={onChange}minLength={5} required/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={onClick}>Add Note</button>
</form>
        </>
    )
}
export default AddNotes;