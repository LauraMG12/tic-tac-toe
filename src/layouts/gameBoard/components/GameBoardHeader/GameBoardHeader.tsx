import { useTranslation } from 'react-i18next';
import Button from '../../../../components/Button/Button';
import { ColorTheme, Mark } from '../../../../utils/types/interfaces';
import './GameBoardHeader.scss';
import Logo from '../../../../components/SvgIcons/icons/Logo';
import Cross from '../../../../components/SvgIcons/icons/Cross';
import Redo from '../../../../components/SvgIcons/icons/Redo';
import Circle from '../../../../components/SvgIcons/icons/Circle';

interface GameBoardHeaderProps {
  activePlayer: Mark;
  handleRedo: () => void;
  disableRedo: boolean;
}

export default function GameBoardHeader(props: GameBoardHeaderProps) {
  const { t } = useTranslation();

  return (
    <div className="game-board-header">
      <Logo />
      {/*TODO: Button border radius: 10px */}

      <Button
        theme={ColorTheme.NAVY}
        icon={
          props.activePlayer === Mark.CROSS ? (
            <Cross size="20" color="silver" />
          ) : (
            <Circle size="20" color="silver" />
          )
        }
        text={<p className="heading-xs silver">{t('game_board.turn')}</p>}
        wide={true}
      />
      <div className="redo-button">
        <Button
          disable={props.disableRedo}
          theme={ColorTheme.SILVER}
          icon={<Redo size="20" color="dark-navy" />}
          onButtonClick={props.handleRedo}
        />
      </div>
    </div>
  );
}
