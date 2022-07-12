// app/javascript/components/Landing.jsx
import React, {useEffect, useState} from 'react'
import { Link, Navigate } from 'react-router-dom'

const Landing = () => {
  const [data, setData] = useState(null)

  async function createGame() {
    const token = document.querySelector('[name=csrf-token]').content;
    const response = await fetch(`/api/games`, {
      method: "POST",
      headers: {
      "X-CSRF-TOKEN": token,
      },
    })

    if (!response.ok) {
      const message = `An error has occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const data = await response.json();

    setData(data);
  }

  return (
    <div className='border border-black rounded-md p-2 m-2'>
      <p className='font-bold'>app/javascript/components/Landing.jsx</p>
      <div>
          <ul>
          <li>
            {data && data.id ? <Navigate to={`/game/${data.id}`} replace={true} /> : <div onClick={createGame}
              className='hover:underline'
            >
              New Game
            </div>}
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