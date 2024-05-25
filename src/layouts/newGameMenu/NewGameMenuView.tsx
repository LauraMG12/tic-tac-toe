import './NewGameMenuView.scss';

import OponentSelector from './components/OponentSelector/OponentSelector';
import PlayerMarkSelector from './components/PlayerMarkSelector/PlayerMarkSelector';
import Logo from '../../components/SvgIcons/icons/Logo';

interface NewGameMenuProps {
  onStartGame: () => void;
}

export default function NewGameMenu(props: NewGameMenuProps) {
  return (
    <section className="new-game-menu">
      <Logo />
      <PlayerMarkSelector />
      <OponentSelector onStartGame={props.onStartGame} />
    </section>
  );
}
