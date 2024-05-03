import { useTranslation } from 'react-i18next';
import Button from '../../../../components/Button/Button';
import CrossIcon from '../../../../components/SvgIcons/CrossIcon';
import RedoIcon from '../../../../components/SvgIcons/RedoIcon';
import TicTacToeLogo from '../../../../components/SvgIcons/TicTacToeLogo';
import { ColorTheme } from '../../../../utils/interfaces';
import './GameBoardHeader.scss';

export default function GameBoardHeader() {
  const { t } = useTranslation();

  return (
    <div className="game-board-header">
      <TicTacToeLogo />
      {/* Border radius: 10px */}
      <Button
        theme={ColorTheme.NAVY}
        icon={<CrossIcon fill="#a8bfc9" />}
        text={<p className="heading-xs silver">{t('game_board.turn')}</p>}
      />

      <Button
        theme={ColorTheme.SILVER}
        icon={<RedoIcon />}
        onButtonClick={() => console.log('redo')}
      />
    </div>
  );
}
