import './NewGameMenu.scss';

import TicTacToeLogo from '../../components/SvgIcons/TicTacToeLogo';
import CrossIcon from '../../components/SvgIcons/CrossIcon';
import CircleIcon from '../../components/SvgIcons/CircleIcon';
import Button from '../../components/Button/Button';
import { ColorTheme, Mark } from '../../utils/interfaces';
import { useTranslation } from 'react-i18next';
import BoxShadow from '../../components/BoxShadow/BoxShadow';

interface NewGameMenuProps {
  selectedMark: Mark;
  onSelectMark: (event: Mark) => void;
}

export default function NewGameMenu(props: NewGameMenuProps) {
  const { t } = useTranslation();

  const toggleSelectedMark = () => {
    props.selectedMark === Mark.CROSS
      ? props.onSelectMark(Mark.CIRCLE)
      : props.onSelectMark(Mark.CROSS);
  };

  return (
    <section className="new-game-menu">
      <TicTacToeLogo />
      <BoxShadow>
        <div className="player-selector navy-theme">
          <p className="heading-xs">
            {t('player_selector.pick_player_one_mark')}
          </p>
          <div className="mark-selector">
            <div
              className={`option ${props.selectedMark === Mark.CROSS ? 'silver-theme' : ''}`}
              onClick={toggleSelectedMark}
            >
              <CrossIcon
                fill={props.selectedMark === Mark.CROSS ? '#1a2a33' : '#a8bfc9'}
              />
            </div>
            <div
              className={`option ${props.selectedMark === Mark.CIRCLE ? 'silver-theme' : ''}`}
              onClick={toggleSelectedMark}
            >
              <CircleIcon
                fill={
                  props.selectedMark === Mark.CIRCLE ? '#1a2a33' : '#a8bfc9'
                }
              />
            </div>
          </div>
          <p className="body">{t('player_selector.x_goes_first')}</p>
        </div>
      </BoxShadow>
      <div className="oponent-buttons-wrapper">
        <Button theme={ColorTheme.ORANGE}>
          {t('player_selector.one_player')}
        </Button>
        <Button theme={ColorTheme.BLUE}>
          {t('player_selector.two_players')}
        </Button>
      </div>
    </section>
  );
}
