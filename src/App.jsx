import React, { useState, useEffect, createContext } from 'react';
import { Board } from './components/Board';
import { TURNS, WINNER } from './constants';
import { checkWinner, createNewBoard } from './logic/game';
import conffeti from 'canvas-confetti';

export const GameContext = createContext();

function App() {
  const [match, setMatch] = useState(null);
  const [boards, setBoards] = useState([createNewBoard()]);

  useEffect(() => {
    boards.forEach((board, index) => {
      if (board.winner === WINNER.NONE) {
        const [winner, winnerLine] = checkWinner(board.slots);

        if (winner !== WINNER.NONE) {
          if (winner !== WINNER.DRAW) {
            conffeti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 }
            });
          }
          setBoardWinner(index, winner, winnerLine);
        }
      }
    })
  }, [boards]);

  const setBoardSlots = (boardIndex, newSlots) => {
    setBoards(prevBoards => prevBoards.map((board, index) => {
      return index == boardIndex ? {...board, slots: newSlots} : board;
    }));
  }

  const setBoardTurn = (boardIndex, newTurn) => {
    setBoards(prevBoards => prevBoards.map((board, index) => {
      return index == boardIndex ? {...board, turn: newTurn} : board;
    }))
  }

  const setBoardWinner = (boardIndex, newWinner, newWinnerLine) => {
    setBoards(prevBoards => prevBoards.map((board, index) => {
      return index == boardIndex ? {...board, winner: newWinner, winnerLine: newWinnerLine} : board;
    }))
  }
  
  const resetBoard = (boardIndex) => {
    setBoards(prevBoards => prevBoards.map((board, index) => {
      return index == boardIndex ? createNewBoard() : board;
    }))
  }

  return (
    <main className='game'>
        <h1>×O</h1>
        {
          boards.map((board, index) => (
            <Board 
              key={index}
              boardId={index}
              board ={board}
              setSlots={setBoardSlots}
              setTurn={setBoardTurn}
              resetBoard={resetBoard}
            />
          ))
        }
    </main>
  );
}

export default App