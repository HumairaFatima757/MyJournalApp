import { useState } from "react";
import Title from "./Components/Title";
import CreateNotes from "./Components/CreateNotes";
import Notes from "./Components/Notes";
import bgGif from './assets/bg.gif'

function App() {
  return (
    <> <div className="  bg-cover bg-center bg-no-repeat h-screen overflow-y-auto bg-pink-100" style={{ backgroundImage:  `url(${bgGif})`  }}>
     <Title/>
     
     <Notes/>
     </div>
    </>
  );
}

export default App;
