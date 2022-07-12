import React, {useState, useEffect} from 'react'

import BoardDisplay from '../Board/BoardDisplay'

const NewGame = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    async function fetchData() {
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
  
    return () => {
      fetchData();
    }
  }, [])
  
  return (
    <div className='border border-black rounded-md p-2 m-2'>
      <p className='font-bold'>app/javascript/components/Games/NewGame.jsx</p>
      <div>{data ? 'id: ' + data.id : 'id not returned'}</div>
      {data && data.cubes ? <BoardDisplay cubes = {data.cubes} /> : null}
    </div>
    
  )
}

export default NewGame