import './NewGameMenuView.scss';

import { Mark } from '../../utils/types/interfaces';
import OponentSelector from './components/OponentSelector/OponentSelector';
import PlayerMarkSelector from './components/PlayerMarkSelector/PlayerMarkSelector';
import Logo from '../../components/SvgIcons/icons/Logo';

interface NewGameMenuProps {
  selectedMark: Mark;
  onSelectMark: (event: Mark) => void;
  onStartGame: () => void;
}

export default function NewGameMenu(props: NewGameMenuProps) {
  return (
    <section className="new-game-menu">
      <Logo size="32" />
      <PlayerMarkSelector
        selectedMark={props.selectedMark}
        onSelectMark={props.onSelectMark}
      />
      <OponentSelector onStartGame={props.onStartGame} />
    </section>
  );
}
