import React from "react";
import { useSelector } from "react-redux";

export const ScoresList = () => {
  const scores = useSelector((state) => state.scores);

  const renderedScores = scores.map((score) => (
    <tr key={score.id}>
      <td>{score.score}</td>
      <td>{score.player}</td>
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
          </tr>
        </thead>
        <tbody>{renderedScores}</tbody>
      </table>
    </div>
  );
};
