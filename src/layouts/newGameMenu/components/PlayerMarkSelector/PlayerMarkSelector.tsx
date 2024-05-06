import { useTranslation } from 'react-i18next';
import BoxShadow from '../../../../components/BoxShadow/BoxShadow';
import { Mark } from '../../../../utils/types/interfaces';
import './PlayerMarkSelector.scss';
import Cross from '../../../../components/SvgIcons/icons/Cross';
import Circle from '../../../../components/SvgIcons/icons/Circle';

interface PlayerMarkSelectorProps {
  selectedMark: Mark;
  onSelectMark: (event: Mark) => void;
}

export default function PlayerSelector(props: PlayerMarkSelectorProps) {
  const { t } = useTranslation();

  const toggleSelectedMark = () => {
    props.selectedMark === Mark.CROSS
      ? props.onSelectMark(Mark.CIRCLE)
      : props.onSelectMark(Mark.CROSS);
  };

  return (
    <>
      <BoxShadow wide={true}>
        <div className="player-mark-selector navy-theme">
          <p className="heading-xs">
            {t('player_selector.pick_player_one_mark')}
          </p>
          <div className="mark-selector">
            <div
              className={`option ${props.selectedMark === Mark.CROSS ? 'silver-theme hover' : 'navy-theme hover'}`}
              onClick={toggleSelectedMark}
            >
              <Cross
                size="32"
                color={
                  props.selectedMark === Mark.CROSS ? 'dark-navy' : 'silver'
                }
              />
            </div>
            <div
              className={`option ${props.selectedMark === Mark.CIRCLE ? 'silver-theme hover' : 'navy-theme hover'}`}
              onClick={toggleSelectedMark}
            >
              <Circle
                size="32"
                color={
                  props.selectedMark === Mark.CIRCLE ? 'dark-navy' : 'silver'
                }
              />
            </div>
          </div>
          <p className="font-body">{t('player_selector.x_goes_first')}</p>
        </div>
      </BoxShadow>
    </>
  );
}
