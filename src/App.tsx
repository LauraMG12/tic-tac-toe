import { useState } from 'react';

import NewGameMenuView from './layouts/newGameMenu/NewGameMenuView';
import GameBoardView from './layouts/gameBoard/GameBoardView';

import { Mark } from './utils/types/interfaces';

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
    <div className="app-wrapper">
      {isNewGame ? (
        <NewGameMenuView
          selectedMark={selectedMark}
          onSelectMark={onSelectMark}
          onStartGame={onStartGame}
        />
      ) : (
        <GameBoardView />
      )}
    </div>
  );
}
