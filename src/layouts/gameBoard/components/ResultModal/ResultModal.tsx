import { useTranslation } from 'react-i18next';
import Button from '../../../../components/Button/Button';
import { ColorTheme, Mark } from '../../../../utils/types/interfaces';
import './ResultModal.scss';
import { renderIcon } from '../../../../utils/helpers/helpers';

interface ResultModalProps {
  winner: Mark;
  handleNextRound: () => void;
  handleQuit: () => void;
}

export default function ResultModal(props: ResultModalProps) {
  const { t } = useTranslation();

  return (
    <aside className="result-modal-wrapper">
      <div className="result-modal">
        {props.winner !== Mark.NONE && (
          <p className="heading-xs silver">{t('result.winner_player')}</p>
        )}
        <div className="winner-text">
          {props.winner !== Mark.NONE ? (
            <>
              {renderIcon(props.winner)}
              <p
                className={`heading-l ${props.winner === Mark.CROSS ? 'blue' : 'orange'}`}
              >
                {t('result.takes_the_round', props.winner)}
              </p>
            </>
          ) : (
            <p className="heading-l silver">{t('result.tied_round')}</p>
          )}
        </div>
        <div className="buttons-wrapper">
          <Button
            theme={ColorTheme.SILVER}
            text={<p className="heading-xs dark-navy">{t('result.quit')}</p>}
            onButtonClick={props.handleQuit}
          ></Button>
          <Button
            theme={ColorTheme.ORANGE}
            text={
              <p className="heading-xs dark-navy">{t('result.next_round')}</p>
            }
            onButtonClick={props.handleNextRound}
          ></Button>
        </div>
      </div>
    </aside>
  );
}
