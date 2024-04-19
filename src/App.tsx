import { useState } from 'react';
import NewGameMenu from './layouts/newGameMenu/NewGameMenu';
import { Mark } from './utils/interfaces';

export default function App() {
  const [selectedMark, setSelectedMark] = useState(Mark.CROSS);
  function onSelectMark(markType: Mark): void {
    setSelectedMark(markType);
  }
  return (
    <>
      <NewGameMenu selectedMark={selectedMark} onSelectMark={onSelectMark} />
      {/* 3 layouts rendered conditionally
    Initial game setting
    Game
    End game Banner
  */}
    </>
  );
}
