// import { useState } from 'react'
import MakeBoard from "./utilities/Board"

function App() {

  return (
    <>
      <h1 className='text-center font-bold text-2xl font-mono m-2'>Tic Tac Toe</h1>

      <div className="h-screen flex justify-center items-center">
        <MakeBoard noOfRows={3} />
      </div>
    </>
  )
}

export default App
