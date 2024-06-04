import { useState } from 'react';

import NewGameMenuView from './layouts/newGameMenu/NewGameMenuView';
import GameBoardView from './layouts/gameBoard/GameBoardView';

export default function App() {
  const [isNewGame, setIsNewGame] = useState(true);

  function onStartGame(): void {
    setIsNewGame(false);
  }
  function onQuitGame(): void {
    setIsNewGame(true);
  }

  return (
    <div className="app-wrapper">
      {isNewGame ? (
        <NewGameMenuView onStartGame={onStartGame} />
      ) : (
        <GameBoardView onQuitGame={onQuitGame} />
      )}
    </div>
  );
}
