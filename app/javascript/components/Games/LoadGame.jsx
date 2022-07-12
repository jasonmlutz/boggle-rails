import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import BoardDisplay from '../Board/BoardDisplay';

const LoadGame = () => {
  const [data, setData] = useState(null);
  const params = useParams();
  const game_id = params.game_id.toString();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/games/${game_id}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const data = await response.json();

      setData(data);
    }

    return () => {
      fetchData();
    }
  }, [])
  
  return (
    <div className='border border-black rounded-md p-2 m-2'>
      <p className='font-bold'>app/javascript/components/Games/LoadGame.jsx</p>
      <p>game id: {game_id}</p>
      {data && data.cubes ? <BoardDisplay cubes = {data.cubes} /> : null}
    </div>
  )
}

export default LoadGame