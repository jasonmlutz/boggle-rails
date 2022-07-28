import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import BoardDisplay from "./BoardDisplay";
import { Spinner } from "../../resources/Spinner";

import { fetchGameById, selectGameById } from "./gamesSlice";

export const GamePage = () => {
  const params = useParams();
  const { gameId } = params;

  const gameStatus = useSelector((state) => state.games.status);
  const error = useSelector((state) => state.games.error);
  const game = useSelector((state) => selectGameById(state, gameId))

  const dispatch = useDispatch();

  useEffect(() => {
    if (gameStatus === "idle") {
      dispatch(fetchGameById(gameId))
    }
  }, [gameStatus, dispatch]);

  let content;

  if (gameStatus === "loading") {
    content = <Spinner text="Loading..." />;
  } else if (gameStatus === "succeeded") {
    content = <BoardDisplay cubes={game.cubes} />;
  } else if (gameStatus === "failed") {
    content = <div>ERROR: {error}</div>;
  }

  return (
    <div className="w-[550px] border border-black rounded-md p-2 m-2">
      <p className="font-bold">app/javascript/features/games/GamePage.jsx</p>
      <p className="italic text-xs">width 450px</p>
      {content}
    </div>
  );
};
