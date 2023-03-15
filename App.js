import React from 'react'
import TodoApp from './myTodoComponents/TodoApp'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './myTodoComponents/About';
import Navbar from './myTodoComponents/Navbar';



const App = () => {
  return (
    <>
      <Router>

        <Navbar />






        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/myabout" element={<About />} />

        </Routes>
      </Router>
    </>
  )
}

export default App


