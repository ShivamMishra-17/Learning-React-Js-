import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement} from './redux/counter/counterSlice'

function App() {

  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <button onClick={()=>{dispatch(decrement())}}>-</button>
        Currenctly Count is {count}
        <button onClick={()=>{dispatch(increment())}}>+</button>

      </div>
    </>
  )
}

export default App
