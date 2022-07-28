// app/javascript/components/Landing.jsx
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Spinner } from "../resources/Spinner";
import BoardDisplay from "../features/games/BoardDisplay";

import { addNewGame } from "../features/games/gamesSlice";

const Landing = () => {
  const [data, setData] = useState(null);
  const [addGameRequestStatus, setAddGameRequestStatus] = useState('idle')

  const dispatch = useDispatch();
  const error = useSelector((state) => state.games.error);

  let content;

  async function generateGame() {
    if (addGameRequestStatus === "idle") {
      try {
        setAddGameRequestStatus('pending')
        const token = document.querySelector("[name=csrf-token]").content;
        const data = await dispatch(addNewGame({token})).unwrap();
        setData(data);
      } catch {
        console.error("Failed to create game: ", err);
      } finally {
        setAddGameRequestStatus("succeeded");
      }
    }
  }

  if (addGameRequestStatus === "idle") {
    content = (
      <div>
        <ul>
          <li>
            <div onClick={generateGame} className="hover:underline">
              New Game
            </div>
          </li>
          <li>
            <Link to="/scores" className="hover:underline">
              High Scores
            </Link>
          </li>
        </ul>
      </div>
    );
  } else if (addGameRequestStatus === "pending") {
    content = <Spinner text="Loading..." />;
  } else if (addGameRequestStatus === "succeeded") {
    content = <Navigate to={`/games/${data.id}`} />
  }

  return (
    <div className="border border-black rounded-md p-2 m-2">
      <p className="font-bold">app/javascript/components/Landing.jsx</p>
      {content}
    </div>
  );
};

export default Landing;
