import React, { useContext } from 'react'
import { store } from './App'

const Countproduct = () => {
    const[data,setData]=useContext(store)
  return (
    <div><h1>Countproduct :  {data.length}</h1></div>
  )
}

export default Countproduct