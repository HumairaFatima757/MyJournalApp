import React, { useState } from "react";
import { db } from "../Firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const CreateNotes = () => {
  const inputStyles = "border-3 border-blue-100 rounded  w-full mb-4 text-1xl";

  const [title, setTitle] = useState("");
  const [mood, setMood] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "notes"), {
        title: title,
        mood: mood,
        date: date,
        content: content,
      });
      setTitle("");
      setMood("");
      setDate("");
      setContent("");
      alert('Note added successfully!');
    } catch (error) {
      console.error("Error adding note: ", error);
    }
  };

  return (
    <>
      <div className="w-[500px] h-100 mx-auto bg-pink-300 rounded-lg p-4 shadow-md mt-8 text-3xl font-black text-gray-500 border-2">
        <form onSubmit={handleSubmit}>
          <div className="">
            Title:{" "}
            <input
              className={inputStyles}
              type="text"
              value={title}
              placeholder="enter Title here :"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <br />
            Mood:{" "}
            <input
              className={inputStyles}
              type="text"
              value={mood}
              placeholder="enter mood"
              onChange={(e) => {
                setMood(e.target.value);
              }}
            />
            <br />
            Date:{" "}
            <input
              className={inputStyles}
              type="text"
              value={date}
              placeholder=" enter Date:"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <br />
            Content :{" "}
            <input
              className={inputStyles}
              type="text"
              value={content}
              placeholder=" enter Content:"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Add Note
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateNotes;
