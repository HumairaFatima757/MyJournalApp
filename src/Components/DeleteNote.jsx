import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

// This function deletes the note from Firebase
const DeleteNote = async (noteId, onDelete) => {
  try {
    await deleteDoc(doc(db, "notes", noteId));
    if (onDelete) onDelete(); // Optional callback after delete
  } catch (error) {
    console.error("Error deleting note:", error);
  }
};

export default DeleteNote;
