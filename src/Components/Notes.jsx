import React, { useState, useEffect } from "react";
import Note from "./Note";
import { db } from "../Firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import CreateNotes from "./CreateNotes";
import EditNotes from "./EditNotes";
import DeleteNote from "./DeleteNote";

const Notes = () => {
  const [viewNotes, setviewNotes] = useState(false);
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    const fetchFunc = async () => {
      const snapshot = await getDocs(collection(db, "notes"));
      const notesList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setNotes(notesList);
    };
    fetchFunc();
  }, []);

  function create() {
    setviewNotes(true);
  }

  const handleDelete = async (noteId) => {
    await DeleteNote(noteId, () => {
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
    });
  };

  return (
    <>
      {edit ? (
        <EditNotes note={edit} onSave={() => setEdit(null)} />
      ) : !viewNotes ? (
        <>
          <button
            className="fixed top-25 left-1/2 transform -translate-x-1/2 bg-pink-500 p-4 rounded-lg shadow-md text-2xl font-black text-gray-900 z-20 "
            onClick={create}
          >
            📝 Make New Notes
          </button>

          <div className="flex flex-wrap gap-8 justify-center mt-40 mb-20">
            {notes.map((note) => (
              <Note
                key={note.id}
                title={note.title}
                mood={note.mood}
                date={note.date}
                content={note.content}
                onEdit={() => setEdit(note)}
                onDelete={() => handleDelete(note.id)}
              />
            ))}
          </div>
        </>
      ) : (
        <CreateNotes />
      )}
    </>
  );
};

export default Notes;
