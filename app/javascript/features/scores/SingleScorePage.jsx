import React from "react";
import { Link, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectScoreById } from "../scores/scoresSlice";

export const SingleScorePage = () => {
  const params = useParams();
  const { scoreId } = params;

  const score = useSelector((state) => selectScoreById(state, scoreId));

  if (!score) {
    return (
      <section>
        <h2>score not found!</h2>
      </section>
    );
  }

  return (
    <div>
      <div>
        Player: {score.player}, Score: {score.score}, Time:{" "}
        {score.created_at || "N/A"}
      </div>
      <footer>
        <Link to={"/scores"}>Return to All Scores</Link>
      </footer>
    </div>
  );
};
