import { useState } from 'react';
import BoxShadow from '../../../../components/BoxShadow/BoxShadow';
import './Board.scss';
import { CellData, Mark, TurnsData } from '../../../../utils/types/interfaces';
import Cross from '../../../../components/SvgIcons/icons/Cross';
import Circle from '../../../../components/SvgIcons/icons/Circle';

interface BoardProps {
  onSelectCell: (rowIndex: number, colIndex: number) => void;
  turns: TurnsData[];
  activePlayer: Mark;
  gameBoard: Mark[][];
}

const renderIcon = (mark: Mark, isHoverState?: boolean) => {
  switch (mark) {
    case Mark.CROSS:
      return (
        <Cross
          size="64"
          color="blue"
          style={isHoverState ? 'stroke' : 'fill'}
        />
      );
    case Mark.CIRCLE:
      return (
        <Circle
          size="64"
          color="orange"
          style={isHoverState ? 'stroke' : 'fill'}
        />
      );
    default:
      return null;
  }
};

export default function Board(props: BoardProps) {
  const [hoveredCell, setHoveredCell] = useState<CellData | null>(null);

  function handleMouseEnter(rowIndex: number, colIndex: number) {
    setHoveredCell({ row: rowIndex, col: colIndex });
  }

  function handleMouseLeave() {
    setHoveredCell(null);
  }

  return (
    <>
      <ol className="board">
        {props.gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol className="column">
              {row.map((playerMark, colIndex) => (
                <BoxShadow key={colIndex}>
                  <div
                    onClick={() => {
                      handleMouseLeave();
                      props.onSelectCell(rowIndex, colIndex);
                    }}
                    onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                    onMouseLeave={handleMouseLeave}
                    className={`board-cell navy-theme ${playerMark !== Mark.NONE ? 'disabled' : ''}`}
                  >
                    {renderIcon(playerMark)}
                    {playerMark === Mark.NONE &&
                      hoveredCell?.row === rowIndex &&
                      hoveredCell?.col === colIndex &&
                      renderIcon(props.activePlayer, true)}
                  </div>
                </BoxShadow>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
