import React from 'react'
import {useRoutes} from 'react-router-dom'

import Landing from './Landing'
import NewGame from './Games/NewGame'
import LoadGame from './Games/LoadGame'


import ScoresContainer from './Scores/ScoresContainer'


const App = () => {
  const routes = useRoutes([
    {path: '/', element: <Landing />},
    {
      path: 'game/',
      children: [
        { path: '', element: <NewGame />},  
        { path: ':game_id/', element: <LoadGame />}
      ]
    },
    {path: 'scores/', element: <ScoresContainer />},
  ])
  return <div className="container mx-auto">{routes}</div>
}

export default App