import { useState } from 'react';
import Board from './components/Board/Board';
import GameBoardHeader from './components/GameBoardHeader/GameBoardHeader';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import { Mark } from '../../utils/types/interfaces';

export default function GameBoardView() {
  const [activePlayer, setActivePlayer] = useState(Mark.CROSS);

  function handleSelectCell() {
    setActivePlayer((currActivePlayer) => {
      return currActivePlayer === Mark.CROSS ? Mark.CIRCLE : Mark.CROSS;
    });
  }

  return (
    <>
      <GameBoardHeader activePlayer={activePlayer} />
      <Board onSelectCell={handleSelectCell} activePlayer={activePlayer} />
      <ScoreBoard />
    </>
  );
}
