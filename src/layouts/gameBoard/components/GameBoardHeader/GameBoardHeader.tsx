import { useTranslation } from 'react-i18next';
import Button from '../../../../components/Button/Button';
import { ColorTheme } from '../../../../utils/types/interfaces';
import './GameBoardHeader.scss';
import Logo from '../../../../components/SvgIcons/icons/Logo';
import Cross from '../../../../components/SvgIcons/icons/Cross';
import Redo from '../../../../components/SvgIcons/icons/Redo';

export default function GameBoardHeader() {
  const { t } = useTranslation();

  return (
    <div className="game-board-header">
      <Logo />
      {/*TODO: Button border radius: 10px */}

      <Button
        theme={ColorTheme.NAVY}
        icon={<Cross size="20" color="silver" />}
        text={<p className="heading-xs silver">{t('game_board.turn')}</p>}
        wide={true}
      />
      <div className="redo-button">
        <Button
          theme={ColorTheme.SILVER}
          icon={<Redo size="20" color="dark-navy" />}
          onButtonClick={() => console.log('redo')}
        />
      </div>
    </div>
  );
}
