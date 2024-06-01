import { useState } from 'react';
import Board from './components/Board/Board';
import GameBoardHeader from './components/GameBoardHeader/GameBoardHeader';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import { Mark, TurnsData } from '../../utils/types/interfaces';

export default function GameBoardView() {
  const [activePlayer, setActivePlayer] = useState(Mark.CROSS);
  const [gameTurns, setGameTurns] = useState<TurnsData[]>([]);

  function handleSelectCell(rowIndex: number, colIndex: number) {
    setActivePlayer((currActivePlayer) => {
      return currActivePlayer === Mark.CROSS ? Mark.CIRCLE : Mark.CROSS;
    });
    setGameTurns((prevTurns) => {
      let currentPlayer = Mark.CROSS;
      if (prevTurns.length > 0 && prevTurns.at(-1)?.player === Mark.CROSS) {
        currentPlayer = Mark.CIRCLE;
      }
      const updatedTurns = [
        ...prevTurns,
        { cell: { row: rowIndex, col: colIndex }, player: currentPlayer },
      ];

      return updatedTurns;
    });
  }

  return (
    <>
      <GameBoardHeader activePlayer={activePlayer} />
      <Board
        onSelectCell={handleSelectCell}
        turns={gameTurns}
        activePlayer={activePlayer}
      />
      <ScoreBoard />
    </>
  );
}
