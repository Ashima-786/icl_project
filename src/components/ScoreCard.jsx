function ScoreCard({ brand, score, level }) {
  return (
    <div className="score-card">
      <h3>{brand}</h3>

      <div className="score-bar">
        <div className={`score-fill ${level}`}></div>
      </div>

      <p>Score: {score}/100</p>
    </div>
  );
}

export default ScoreCard;