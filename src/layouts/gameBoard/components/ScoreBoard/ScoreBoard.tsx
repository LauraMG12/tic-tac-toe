import { t } from 'i18next';
import './ScoreBoard.scss';
import { GameScoreData } from '../../../../utils/types/interfaces';

interface ScoreBoardProps {
  score: GameScoreData;
}

export default function ScoreBoard(props: ScoreBoardProps) {
  return (
    <div className="score-board">
      <div className="cell cross blue-theme ">
        <p className="font-body">X (P1)</p>
        <p className="heading-m">{props.score.cross}</p>
      </div>
      <div className="cell ties silver-theme">
        <p className="font-body">{t('score.ties')}</p>
        <p className="heading-m">{props.score.ties}</p>
      </div>
      <div className="cell circle orange-theme">
        <p className="font-body">O (P2)</p>
        <p className="heading-m">{props.score.circle}</p>
      </div>
    </div>
  );
}
