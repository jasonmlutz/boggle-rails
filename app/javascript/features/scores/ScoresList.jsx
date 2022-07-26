import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectAllScores, fetchScores } from "../scores/scoresSlice";

export const ScoresList = () => {
  const dispatch = useDispatch();
  const scores = useSelector(selectAllScores);

  const scoreStatus = useSelector(state => state.scores.status)

  useEffect(() => {
    if (scoreStatus === 'idle') {
      dispatch(fetchScores())
    }
  }, [scoreStatus, dispatch])

  const renderedScores = scores.map((score) => (
    <tr key={score.id}>
      <td>{score.score}</td>
      <td>{score.player}</td>
      <td>{score.created_at || 'no time data'}</td>
    </tr>
  ));

  return (
    <div className="container">
      <div>High Scores</div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Score</th>
            <th>Player</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{renderedScores}</tbody>
      </table>
    </div>
  );
};
