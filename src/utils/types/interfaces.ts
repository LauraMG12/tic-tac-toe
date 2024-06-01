export enum ColorTheme {
  BLUE = 'blue-theme',
  ORANGE = 'orange-theme',
  NAVY = 'navy-theme',
  SILVER = 'silver-theme',
}

export enum Mark {
  CROSS = 'cross',
  CIRCLE = 'circle',
  NONE = 'none',
}

export enum OponentType {
  CPU = 'CPU',
  PLAYER = 'two-players',
}

export enum PlayerType {
  ONE = 'Player1',
  TWO = 'Player2',
}

export interface Player {
  name: PlayerType;
  mark?: Mark;
}

export interface TurnsData {
  cell: CellData;
  player: Mark;
}

export interface CellData {
  row: number;
  col: number;
}
