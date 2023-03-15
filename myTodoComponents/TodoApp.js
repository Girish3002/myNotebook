import React, { useState } from 'react'
import AddTodo from './AddTodo'
import Navbar from './Navbar'
import MyTodoItem from './TodoItem'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toggle, setToggle] = useState(false);
  const [elemsno, setElemsno] = useState(null)

  const [todos, setTodos] = useState([
    {
      Id: 1,
      Title: "Enter: 1st note title",
      Description: "Enter: 1st note description"
    },
    {
      Id: 2,
      Title: "Enter: 2nd note title",
      Description: "Enter: 2nd note description"
    },
    {
      Id: 3,
      Title: "Enter: 3rd note title",
      Description: "Enter: 3rd note description"
    },
    {
      Id: 4,
      Title: "Enter: 4th note title",
      Description: "Enter: 4th note description"
    },
  ])

  const onDelete = (esno) => {
    setTodos(todos.filter((elem) => {
      return esno !== elem.Id;
    }))
  }
  const addTodo = () => {
    console.log("iam into todo");
    if (!title || !description) {//here we are checking if title or description is empty
      alert("Please fill details completely")
    }
    else if ((title && description) && (toggle)) {  // this is edit 
      setTodos(todos.map((curelem) => {//here we ate mapping all the elements and checking if id  == curememid and then editting the elem and setting others as it is
        if (curelem.Id === elemsno) {
          return { ...curelem, Title: title, Description: description }
        }
        return curelem;

      }))
      setToggle(false)

      setTitle("")
      setDescription("")
      setElemsno(null)


    }
    else {
      let Id;
      if (todos.length === 0) {
        Id = 0
      } else {
        Id = todos[todos.length - 1].Id + 1
      }
      {
        const newAddedTodo = {
          Title: title,
          Description: description,
          Id: Id
        }
        setTodos([...todos, newAddedTodo])
        setTitle("")
        setDescription("")
      }
    }
  }

  const onEdit = (esno) => {
    const editElem = todos.find((Elemsno) => {
      return esno === Elemsno.Id
    })
    setElemsno(esno)
    setTitle(editElem.Title)
    setDescription(editElem.Description)
    setToggle(true)
  }
  return (
    <>
      <div className='bg-white'>

        <AddTodo setTitle={setTitle} setDescription={setDescription} title={title} description={description} addTodo={addTodo} toggle={toggle} />
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-3 mx-3 " >
          {todos.map((curElem) => {
            return <MyTodoItem onDelete={onDelete} key={curElem.Id} onEdit={onEdit} curElem={curElem} />
          })

          }
        </div>
      </div>

    </>
  )
}

export default TodoApp
