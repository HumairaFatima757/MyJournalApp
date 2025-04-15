import React, { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

const EditNotes = ({note, onSave}) => {

  const [title,setTitle] = useState(note.title);
  const [mood,setMood] = useState(note.mood);
  const [content,setContent] = useState(note.content);

  const handleUpdate = async ()=>{
await updateDoc(doc(db,"notes" ,note.id),{
   title,
   mood,
   content
});
onSave();
  } 
  return (
    <div className='w-[500px] mx-auto bg-pink-300 rounded-lg p-4 shadow-md mt-8 text-3xl font-black text-gray-500 mt-30'>
      
     <span className='text-pink-500'> Title:</span><input className='border-2' value={title} onChange={(e)=>setTitle(e.target.value)} type="text" />
      <span className='text-pink-500'> Mood :</span><input className='border-2' value={mood} onChange={(e)=>setMood(e.target.value)}  type="text" />
     <span className='text-pink-500' > Content: </span><textarea className='border-2' value={content} onChange={(e)=>setContent(e.target.value)}  name="" id=""></textarea>
      <button onClick={handleUpdate} className='text-pink-500 bg-black'>💾save</button>
    </div>
  )
}

export default EditNotes