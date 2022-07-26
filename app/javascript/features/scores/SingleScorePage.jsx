import React from "react";

import { selectScoreById } from "../scores/scoresSlice";

export const SingleScorePage = ({ match }) => {
  const { scoreId } = match.params;

  const score = useSelector((state) => selectScoreById(state, scoreId));

  return (
    <div>
      Player: {score.player}, Score: {score.score}, Time:{" "}
      {score.created_at || "N/A"}
    </div>
  );
};
