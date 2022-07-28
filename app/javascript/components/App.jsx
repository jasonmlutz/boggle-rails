import React from "react";
import { useRoutes } from "react-router-dom";

import Landing from "./Landing";
import { ScoresList } from "../features/scores/ScoresList";
import { SingleScorePage } from "../features/scores/SingleScorePage";
import { GamePage } from "../features/games/GamePage";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Landing /> },
    {
      path: "games/new",
      element: <GamePage />,
    },
    { path: "scores/", element: <ScoresList /> },
    { path: "scores/:scoreId", element: <SingleScorePage /> },
  ]);
  return <div className="container mx-auto">{routes}</div>;
};

export default App;
