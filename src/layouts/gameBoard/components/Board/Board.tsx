import { useState } from 'react';
import BoxShadow from '../../../../components/BoxShadow/BoxShadow';
import './Board.scss';
import { Mark } from '../../../../utils/types/interfaces';
import Cross from '../../../../components/SvgIcons/icons/Cross';
import Circle from '../../../../components/SvgIcons/icons/Circle';

interface BoardProps {
  onSelectCell: () => void;
  activePlayer: Mark;
}

const initialGameBoard = [
  [Mark.NONE, Mark.NONE, Mark.NONE],
  [Mark.NONE, Mark.NONE, Mark.NONE],
  [Mark.NONE, Mark.NONE, Mark.NONE],
];

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
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [hoveredCell, setHoveredCell] = useState<{
    row: number;
    col: number;
  } | null>(null);

  function handleSelectCell(rowIndex: number, colIndex: number) {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedGameBoard[rowIndex][colIndex] = props.activePlayer;
      return updatedGameBoard;
    });
    props.onSelectCell();
  }

  function handleMouseEnter(rowIndex: number, colIndex: number) {
    setHoveredCell({ row: rowIndex, col: colIndex });
  }

  function handleMouseLeave() {
    setHoveredCell(null);
  }

  return (
    <>
      <ol className="board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol className="column">
              {row.map((playerMark, colIndex) => (
                <BoxShadow key={colIndex}>
                  <div
                    onClick={() => handleSelectCell(rowIndex, colIndex)}
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
