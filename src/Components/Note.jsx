import React, { useState } from "react";


const Note = ({ title, mood, date, content , onEdit , onDelete }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  const noteStyle = {
    height: isExpanded ? "auto" : "300px", // 100px when collapsed, auto when expanded
    overflow: "hidden",
    transition: "height 0.3s ease", // smooth transition when expanding or collapsing
  };


 
  return (
    <>
      {" "} 
      <div>
      <div className="w-[350px] mx-auto bg-pink-300 rounded-lg p-4 shadow-md mt-8 text-3xl font-black text-gray-500" style={noteStyle}>
      <h3 className="text-yellow-300 text-center" >Your Note 📝 </h3>
          <div className="text-center" >
            {title}
            <br />
            <span className="text-pink-500">mood:</span> {mood}
            <br />
            <span className="text-pink-500">Date:</span>{date}
            <br />
            <p>
  <strong className="text-pink-500">Content:</strong>{" "}
  {isExpanded ? content : `${content.substring(0,10)}... `}
  <button
    className="text-blue-500 hover:underline text-base"
    onClick={toggleExpand}
  >
    {isExpanded ? "Show less" : "Read more"}
  </button>
</p>
            
            <br /> <br />
            <br />
            <div className="flex gap-x-16">
              <button onClick={onEdit} >✏️ Edit</button>
              <button onClick={onDelete}>🗑️ Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
