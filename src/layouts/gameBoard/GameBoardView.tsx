import { useEffect, useState } from 'react';
import Board from './components/Board/Board';
import GameBoardHeader from './components/GameBoardHeader/GameBoardHeader';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import { GameScoreData, Mark, TurnsData } from '../../utils/types/interfaces';
import {
  INITIAL_GAME_BOARD,
  INITIAL_GAME_SCORE,
  WINNING_COMBINATIONS,
  deriveActivePlayer,
} from '../../utils/helpers/helpers';
import ResultModal from './components/ResultModal/ResultModal';

interface GameBoardViewProps {
  onQuitGame: () => void;
}

export default function GameBoardView(props: GameBoardViewProps) {
  const [gameTurns, setGameTurns] = useState<TurnsData[]>([]);
  const [gameBoard, setGameBoard] = useState(INITIAL_GAME_BOARD);
  const [gameScore, setGameScore] = useState<GameScoreData>(INITIAL_GAME_SCORE);

  const activePlayer = deriveActivePlayer(gameTurns);
  let winner: Mark | null = null;

  useEffect(() => {
    const updatedGameBoard = INITIAL_GAME_BOARD.map((row) => row.slice());

    for (const turn of gameTurns) {
      const { cell, player } = turn;
      const { row, col } = cell;
      updatedGameBoard[row][col] = player;
    }
    setGameBoard(updatedGameBoard);
  }, [gameTurns]);

  if (gameTurns.length > 4) {
    checkWinner();
  }

  function checkWinner() {
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
      } else if (gameTurns.length === 9) {
        winner = Mark.NONE;
      }
    }
  }

  function handleSelectCell(rowIndex: number, colIndex: number) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        ...prevTurns,
        { cell: { row: rowIndex, col: colIndex }, player: currentPlayer },
      ];

      if (prevTurns.length === 6) {
        updatedTurns.shift();
      }
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

  function handleNextRound() {
    setGameTurns([]);
    setGameScore((prevScore) => {
      const updatedScore = { ...prevScore };
      switch (winner) {
        case Mark.CROSS:
          updatedScore.cross++;
          break;
        case Mark.CIRCLE:
          updatedScore.circle++;
          break;
        case Mark.NONE:
          updatedScore.ties++;
          break;
      }
      return updatedScore;
    });
  }

  function handleQuit() {
    props.onQuitGame();
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
        markToDissappear={gameTurns.length === 6 ? gameTurns[0] : undefined}
        activePlayer={activePlayer}
        gameBoard={gameBoard}
      />
      {winner && (
        <ResultModal
          winner={winner}
          handleNextRound={handleNextRound}
          handleQuit={handleQuit}
        />
      )}

      <ScoreBoard score={gameScore} />
    </>
  );
}
