import Circle from '../../components/SvgIcons/icons/Circle';
import Cross from '../../components/SvgIcons/icons/Cross';
import { useIsSmallDevice } from '../hooks/customHools';
import { GameScoreData, Mark, TurnsData } from '../types/interfaces';
const isSmallDevice = useIsSmallDevice();

export const SMALL_DEVICE_THRESHOLD = 508;

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

export const INITIAL_GAME_SCORE: GameScoreData = {
  cross: 0,
  circle: 0,
  ties: 0,
};

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

export const renderIcon = (
  mark: Mark,
  isHoverState?: boolean,
  willDissappear?: boolean
) => {
  switch (mark) {
    case Mark.CROSS:
      return (
        <Cross
          size={isSmallDevice ? '64' : '40'}
          color={willDissappear ? 'dark-blue' : 'blue'}
          style={isHoverState ? 'stroke' : 'fill'}
        />
      );
    case Mark.CIRCLE:
      return (
        <Circle
          size={isSmallDevice ? '64' : '40'}
          color={willDissappear ? 'dark-orange' : 'orange'}
          style={isHoverState ? 'stroke' : 'fill'}
        />
      );
    default:
      return null;
  }
};
