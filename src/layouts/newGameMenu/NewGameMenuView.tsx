import './NewGameMenuView.scss';

import TicTacToeLogo from '../../components/SvgIcons/TicTacToeLogo';
import { Mark } from '../../utils/interfaces';
import OponentSelector from './components/OponentSelector/OponentSelector';
import PlayerMarkSelector from './components/PlayerMarkSelector/PlayerMarkSelector';

interface NewGameMenuProps {
  selectedMark: Mark;
  onSelectMark: (event: Mark) => void;
  onStartGame: () => void;
}

export default function NewGameMenu(props: NewGameMenuProps) {
  return (
    <section className="new-game-menu">
      <TicTacToeLogo />
      <PlayerMarkSelector
        selectedMark={props.selectedMark}
        onSelectMark={props.onSelectMark}
      />
      <OponentSelector onStartGame={props.onStartGame} />
    </section>
  );
}
