import { createContext } from 'react';
import { Mark, Player, PlayerType } from '../utils/types/interfaces';

const defaultMark = Mark.CROSS;
const alternativeMark = Mark.CIRCLE;

export const defaultMarkContext = createContext(defaultMark);

const defaultPlayers: Player[] = [
  {
    name: PlayerType.ONE,
    mark: defaultMark,
  },
  {
    name: PlayerType.TWO,
    mark: alternativeMark,
  },
];
export const defaultPlayersContext = createContext(defaultPlayers);
