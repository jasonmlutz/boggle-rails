import React from 'react'
import {useRoutes} from 'react-router-dom'

import Landing from './Landing'
import { ScoresList } from '../features/scores/ScoresList'


const App = () => {
  const routes = useRoutes([
    {path: '/', element: <Landing />},
    {path: 'scores/', element: <ScoresList />},
  ])
  return <div className="container mx-auto">{routes}</div>
}

export default App