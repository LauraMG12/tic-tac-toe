import { useTranslation } from 'react-i18next';
import BoxShadow from '../../../../components/BoxShadow/BoxShadow';
import { Mark } from '../../../../utils/types/interfaces';
import './PlayerMarkSelector.scss';
import Cross from '../../../../components/SvgIcons/icons/Cross';
import Circle from '../../../../components/SvgIcons/icons/Circle';
import { useContext, useState } from 'react';
import { defaultMarkContext } from '../../../../context/gameContext';

export default function PlayerMarkSelector() {
  const { t } = useTranslation();

  const [selectedMark, setSelectedMark] = useState(
    useContext(defaultMarkContext)
  );

  const toggleSelectedMark = () => {
    selectedMark === Mark.CROSS
      ? setSelectedMark(Mark.CIRCLE)
      : setSelectedMark(Mark.CROSS);
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
              className={`option ${selectedMark === Mark.CROSS ? 'silver-theme hover' : 'navy-theme hover'}`}
              onClick={toggleSelectedMark}
            >
              <Cross
                size="32"
                color={selectedMark === Mark.CROSS ? 'dark-navy' : 'silver'}
              />
            </div>
            <div
              className={`option ${selectedMark === Mark.CIRCLE ? 'silver-theme hover' : 'navy-theme hover'}`}
              onClick={toggleSelectedMark}
            >
              <Circle
                size="32"
                color={selectedMark === Mark.CIRCLE ? 'dark-navy' : 'silver'}
              />
            </div>
          </div>
          <p className="font-body">{t('player_selector.x_goes_first')}</p>
        </div>
      </BoxShadow>
    </>
  );
}
