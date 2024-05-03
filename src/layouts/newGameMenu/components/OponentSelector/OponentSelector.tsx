import { useTranslation } from 'react-i18next';

import './OponentSelector.scss';
import Button from '../../../../components/Button/Button';
import { ColorTheme } from '../../../../utils/interfaces';

interface OponentSelectorProps {
  onStartGame: () => void;
}

export default function OponentSelector(props: OponentSelectorProps) {
  const { t } = useTranslation();

  return (
    <>
      <div className="oponent-selector">
        <Button
          theme={ColorTheme.ORANGE}
          onButtonClick={props.onStartGame}
          text={
            <p className="heading-s dark-navy">
              {t('player_selector.one_player')}
            </p>
          }
          wide={true}
        />
        <Button
          theme={ColorTheme.BLUE}
          onButtonClick={props.onStartGame}
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
