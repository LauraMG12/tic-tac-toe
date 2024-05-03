import BoxShadow from '../../../../components/BoxShadow/BoxShadow';
import './Board.scss';

export default function Board() {
  return (
    <>
      <div className="board">
        <BoxShadow>
          <div className="board-cell navy-theme cell-1-1" />
        </BoxShadow>
        <BoxShadow>
          <div className="board-cell navy-theme cell-1-2" />
        </BoxShadow>
        <BoxShadow>
          <div className="board-cell navy-theme cell-1-3" />
        </BoxShadow>
        <BoxShadow>
          <div className="board-cell navy-theme cell-2-1" />
        </BoxShadow>
        <BoxShadow>
          <div className="board-cell navy-theme cell-2-2" />
        </BoxShadow>
        <BoxShadow>
          <div className="board-cell navy-theme cell-2-3" />
        </BoxShadow>
        <BoxShadow>
          <div className="board-cell navy-theme cell-3-1" />
        </BoxShadow>
        <BoxShadow>
          <div className="board-cell navy-theme cell-3-2" />
        </BoxShadow>
        <BoxShadow>
          <div className="board-cell navy-theme cell-3-3" />
        </BoxShadow>
      </div>
    </>
  );
}
