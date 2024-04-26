import { useState } from 'react';

import NewGameMenu from './layouts/newGameMenu/NewGameMenu';
import GameBoard from './layouts/gameBoard/GameBoard';

import { Mark } from './utils/interfaces';

export default function App() {
  const [selectedMark, setSelectedMark] = useState(Mark.CROSS);
  const [isNewGame, setIsNewGame] = useState(true);

  function onSelectMark(markType: Mark): void {
    setSelectedMark(markType);
  }

  function onStartGame(): void {
    setIsNewGame(false);
  }
  return (
    <>
      {isNewGame ? (
        <NewGameMenu
          selectedMark={selectedMark}
          onSelectMark={onSelectMark}
          onStartGame={onStartGame}
        />
      ) : (
        <GameBoard />
      )}
    </>
  );
}
