import './ScoreBoard.scss';

export default function ScoreBoard() {
  // No hover effect
  return (
    <div className="score-board">
      <div className="cell cross blue-theme ">
        <p className="font-body">X (YOU)</p>
        <p className="heading-m">0</p>
      </div>
      <div className="cell ties silver-theme">
        <p className="font-body">TIES</p>
        <p className="heading-m">0</p>
      </div>
      <div className="cell circle orange-theme">
        <p className="font-body">O (CPU)</p>
        <p className="heading-m">0</p>
      </div>
    </div>
  );
}
