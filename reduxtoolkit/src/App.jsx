import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {

  return (
    <>
      <center><AddTodo/></center>
      <Todos/>
    </>
  )
}

export default App
