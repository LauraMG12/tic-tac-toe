import { useEffect, useState } from 'react';
import Board from './components/Board/Board';
import GameBoardHeader from './components/GameBoardHeader/GameBoardHeader';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import { Mark, TurnsData } from '../../utils/types/interfaces';
import {
  INITIAL_GAME_BOARD,
  WINNING_COMBINATIONS,
  deriveActivePlayer,
} from '../../utils/helpers/helpers';
import ResultModal from './components/ResultModal/ResultModal';

export default function GameBoardView() {
  const [gameTurns, setGameTurns] = useState<TurnsData[]>([]);
  const [gameBoard, setGameBoard] = useState(INITIAL_GAME_BOARD);

  const activePlayer = deriveActivePlayer(gameTurns);

  useEffect(() => {
    const updatedGameBoard = INITIAL_GAME_BOARD.map((row) => row.slice());

    for (const turn of gameTurns) {
      const { cell, player } = turn;
      const { row, col } = cell;
      updatedGameBoard[row][col] = player;
    }
    setGameBoard(updatedGameBoard);
  }, [gameTurns]);

  let winner;
  if (gameTurns.length > 4) {
    for (const combination of WINNING_COMBINATIONS) {
      const firstCellMark = gameBoard[combination[0].row][combination[0].col];
      const secondCellMark = gameBoard[combination[1].row][combination[1].col];
      const thirdCellMark = gameBoard[combination[2].row][combination[2].col];
      if (
        firstCellMark !== Mark.NONE &&
        firstCellMark === secondCellMark &&
        firstCellMark === thirdCellMark
      ) {
        winner = firstCellMark;
      }
    }
  }
  if (gameTurns.length === 9) {
    winner = Mark.NONE;
  }

  function handleSelectCell(rowIndex: number, colIndex: number) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        ...prevTurns,
        { cell: { row: rowIndex, col: colIndex }, player: currentPlayer },
      ];

      return updatedTurns;
    });
  }

  function handleRedo() {
    setGameTurns((prevTurns) => {
      if (prevTurns.length === 0) {
        return prevTurns;
      }

      const updatedTurns = [...prevTurns];
      updatedTurns.pop();

      return updatedTurns;
    });
  }

  return (
    <>
      <GameBoardHeader
        activePlayer={activePlayer}
        handleRedo={handleRedo}
        disableRedo={gameTurns.length === 0}
      />
      <Board
        onSelectCell={handleSelectCell}
        turns={gameTurns}
        activePlayer={activePlayer}
        gameBoard={gameBoard}
      />
      {winner && <ResultModal winner={winner} />}

      <ScoreBoard />
    </>
  );
}
