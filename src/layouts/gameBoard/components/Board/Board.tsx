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

export default function Board(props: BoardProps) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

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
                    className={`board-cell navy-theme ${playerMark !== Mark.NONE ? 'disabled' : ''}`}
                  >
                    {playerMark === Mark.CROSS ? (
                      <Cross size="64" color="blue" />
                    ) : playerMark === Mark.CIRCLE ? (
                      <Circle size="64" color="orange" />
                    ) : (
                      ''
                    )}
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
