import { Mark, TurnsData } from '../types/interfaces';

export function deriveActivePlayer(gameTurns: TurnsData[]) {
  let currentPlayer = Mark.CROSS;
  if (gameTurns.length > 0 && gameTurns.at(-1)?.player === Mark.CROSS) {
    currentPlayer = Mark.CIRCLE;
  }
  return currentPlayer;
}

export const INITIAL_GAME_BOARD = [
  [Mark.NONE, Mark.NONE, Mark.NONE],
  [Mark.NONE, Mark.NONE, Mark.NONE],
  [Mark.NONE, Mark.NONE, Mark.NONE],
];

export const WINNING_COMBINATIONS = [
  [
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: 2 },
  ],
  [
    { row: 1, col: 0 },
    { row: 1, col: 1 },
    { row: 1, col: 2 },
  ],
  [
    { row: 2, col: 0 },
    { row: 2, col: 1 },
    { row: 2, col: 2 },
  ],
  [
    { row: 0, col: 0 },
    { row: 1, col: 0 },
    { row: 2, col: 0 },
  ],
  [
    { row: 0, col: 1 },
    { row: 1, col: 1 },
    { row: 2, col: 1 },
  ],
  [
    { row: 0, col: 2 },
    { row: 1, col: 2 },
    { row: 2, col: 2 },
  ],
  [
    { row: 0, col: 0 },
    { row: 1, col: 1 },
    { row: 2, col: 2 },
  ],
  [
    { row: 0, col: 2 },
    { row: 1, col: 1 },
    { row: 2, col: 0 },
  ],
];
