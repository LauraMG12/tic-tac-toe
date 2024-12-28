import { useState } from 'react';
import BoxShadow from '../../../../components/BoxShadow/BoxShadow';
import './Board.scss';
import { CellData, Mark, TurnsData } from '../../../../utils/types/interfaces';
import { renderIcon } from '../../../../utils/helpers/helpers';
import { useIsSmallDevice } from '../../../../utils/hooks/customHooks';

interface BoardProps {
  onSelectCell: (rowIndex: number, colIndex: number) => void;
  markToDissappear: TurnsData | undefined;
  activePlayer: Mark;
  gameBoard: Mark[][];
}

export default function Board(props: BoardProps) {
  const [hoveredCell, setHoveredCell] = useState<CellData | null>(null);
  const isSmallDevice = useIsSmallDevice();

  function handleMouseEnter(rowIndex: number, colIndex: number) {
    setHoveredCell({ row: rowIndex, col: colIndex });
  }

  function handleMouseLeave() {
    setHoveredCell(null);
  }

  function isMarkToDissappear(rowIndex: number, colIndex: number) {
    if (props.markToDissappear) {
      return (
        rowIndex === props.markToDissappear.cell.row &&
        colIndex === props.markToDissappear.cell.col
      );
    }
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
                    {isMarkToDissappear(rowIndex, colIndex)
                      ? renderIcon(playerMark, isSmallDevice, false, true)
                      : renderIcon(playerMark, isSmallDevice)}
                    {playerMark === Mark.NONE &&
                      hoveredCell?.row === rowIndex &&
                      hoveredCell?.col === colIndex &&
                      renderIcon(props.activePlayer, isSmallDevice, true)}
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
