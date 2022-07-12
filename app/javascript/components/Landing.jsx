// app/javascript/components/Landing.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <div>app/javascript/components/Landing.jsx</div>
      <div>
          <ul>
          <li>
            <Link
              to='/game'
              className='hover:underline'
            >
              New Game
            </Link>
          </li>
          <li>
            <Link
              to='/scores'
              className='hover:underline'
            >
              High Scores
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Landing