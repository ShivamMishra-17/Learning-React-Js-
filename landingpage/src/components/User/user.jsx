import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <h1 className='bg-blue-500 text-center'>User : {userid} </h1>
  )
}

export default User