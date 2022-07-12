import React from 'react'

const Cube = ({letter, row, col}) => {
  function handleClick() {
    console.log(row, col, letter)
  }
  return (
    <li 
      className='border border-black rounded-md p-2 m-2 w-24 h-24 hover:bg-slate-200'
      onClick={handleClick}
    >
      <p className='font-bold'>Cube.jsx</p>
      <p>{letter.toUpperCase()}</p>
    </li>
  )
}

export default Cube