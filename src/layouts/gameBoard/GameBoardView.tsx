import Board from './components/Board/Board';
import GameBoardHeader from './components/GameBoardHeader/GameBoardHeader';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';

export default function GameBoard() {
  return (
    <>
      <GameBoardHeader />
      <Board />
      <ScoreBoard />
    </>
  );
}
