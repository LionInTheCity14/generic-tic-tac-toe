// import { useState } from 'react'
import MakeBoard from "./utilities/Board"


function handleClick(){
  console.log("hello")
}

function App() {

  return (
    <>
      <h1 className='text-center font-bold text-2xl font-mono m-2'>Tic Tac Toe</h1>

      <MakeBoard />
    </>
  )
}

export default App
