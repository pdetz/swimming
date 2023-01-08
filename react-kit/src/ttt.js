import React, { useState } from 'react';

const initialBoard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

const TicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [nextPlayer, setNextPlayer] = useState('⚡️');

  const handleClick = (row, col) => {
    if (board[row][col] !== ' ') {
      return;
    }
    const newBoard = [...board];
    newBoard[row][col] = nextPlayer;
    setBoard(newBoard);
    setNextPlayer(nextPlayer === '⚡️' ? '😘' : '⚡️');
  };

  return (
    <table><tbody>
      {board.map((row, rowIndex) => (
        <tr>
          {row.map((col, colIndex) => (
            <td className="square" onClick={() => handleClick(rowIndex, colIndex)}>{col}</td>
          ))}
        </tr>
      ))}
    </tbody></table>
  );
};

export default TicTacToe;