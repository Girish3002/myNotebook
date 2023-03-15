import React from "react";

const AddTodo = ({ setTitle, setDescription, title, description, addTodo, toggle }) => {

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(title, description)
    console.log("submit")

  }
  const onChangeT = (e) => {
    setTitle(e.target.value)
  }
  const onChangeD = (e) => {
    setDescription(e.target.value)
  }


  return (
    <>
      <div class=" gap-6 mb-6 md:grid-cols-2 mx-3 my-6 items-center" >
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label for="last_name"
              class="block mb-2 text-sm font-medium my-3  text-gray-900 dark:text-gray-300"
            >Title</label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Title"
              onChange={onChangeT}
              value={title}

              required=""
            />
          </div>
        </div>
        <div>

          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <label for="last_name"
                class="block mb-2 text-sm font-medium my-3  text-gray-900 dark:text-gray-300"
              >Description</label
              >
              <textarea id="last_name"
                rows="4"
                onChange={onChangeD}
                class="px-3 sm: w-44  md:w-96 focus:ring-0  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Description"
                value={description}
                required></textarea>




            </div>
          </div>
        </div>
      </div>

      <div className="   items-center  text-center  ">
        {toggle ?
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-3" onClick={() => { addTodo(title, description) }}
          >Edit </button> : <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-3" onClick={onSubmit}
          >Submit</button>}
      </div>
    </>
  );
};

export default AddTodo;
