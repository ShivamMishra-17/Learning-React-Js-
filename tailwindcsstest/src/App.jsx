import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './cards'

function App() {

  let obj = {
    username : "Shivam",
    btntext : "Go To"
  }

  return (
    <>
      <Cards username="Hello" btntext="Find"/>
      <Cards username="Testing" btntext="Find 2"/>
    </>
  )
}

export default App
