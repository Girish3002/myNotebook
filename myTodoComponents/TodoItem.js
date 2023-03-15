import React from "react";

const MyTodoItem = ({curElem, onDelete, onEdit}) => {
  //here we are destructuring from curElem.
  const{Title, Description , Id} = curElem
   

  return (
    <>
      <div class="  max-w-sm rounded mx-auto overflow-hidden shadow-lg my-6 bg-slate-600">
        <div class="  px-6 py-4 ">
          <div class="font-bold text-xl text-white mb-2">{Title}</div>
          <p class=" text-base text-white">
            {Description}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #myNotebook
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #myNotes
          </span>
        
        </div>
        <div className="px-6 ">
        <button className="bg-white  mx-3 p-0.5 px-1 rounded-md my-2" onClick={()=>{onDelete(Id)}}>Delete</button>
        <button className="bg-white  mx-3 p-0.5 px-1 rounded-md my-2 w-14" onClick={()=>{onEdit(Id)}}>Edit</button>
        </div>
      </div>
    </>
  );
};

export default MyTodoItem;
