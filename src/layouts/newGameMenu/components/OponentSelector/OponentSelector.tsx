import { useTranslation } from 'react-i18next';

import './OponentSelector.scss';
import Button from '../../../../components/Button/Button';
import { ColorTheme, OponentType } from '../../../../utils/types/interfaces';

interface OponentSelectorProps {
  onStartGame: () => void;
}

export default function OponentSelector(props: OponentSelectorProps) {
  const { t } = useTranslation();

  function startGame(oponentType: OponentType): void {
    switch (oponentType) {
      case OponentType.CPU:
        //props.onStartGame();
        console.log('vs CPU');
        break;
      case OponentType.PLAYER:
        props.onStartGame();
        break;
      default:
        throw new Error('Unhandled oponent type');
    }
  }

  return (
    <>
      <div className="oponent-selector">
        <Button
          theme={ColorTheme.ORANGE}
          onButtonClick={() => startGame(OponentType.CPU)}
          text={
            <p className="heading-s dark-navy">
              {t('player_selector.one_player')}
            </p>
          }
          wide={true}
        />
        <Button
          theme={ColorTheme.BLUE}
          onButtonClick={() => startGame(OponentType.PLAYER)}
          text={
            <p className="heading-s dark-navy">
              {t('player_selector.two_players')}
            </p>
          }
          wide={true}
        />
      </div>
    </>
  );
}
