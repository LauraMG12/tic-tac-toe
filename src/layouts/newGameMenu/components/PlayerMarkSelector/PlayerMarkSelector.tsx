import { useTranslation } from 'react-i18next';
import BoxShadow from '../../../../components/BoxShadow/BoxShadow';
import CircleIcon from '../../../../components/SvgIcons/CircleIcon';
import CrossIcon from '../../../../components/SvgIcons/CrossIcon';
import { Mark } from '../../../../utils/interfaces';
import './PlayerMarkSelector.scss';

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
    </>
  );
}
