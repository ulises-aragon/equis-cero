import React, { useState, useEffect } from 'react';
import { Square } from './components/Square';
import conffeti from 'canvas-confetti';
import { TURNS, WINNER } from './constants';
import { checkWinner } from './logic/game';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(WINNER.NONE);
  const [winnerCombo, setWinnerCombo] = useState(Array(3).fill(null));

  const updateBoard = (index) => {
    if (board[index] || winner !== WINNER.NONE) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const [newWinner, combo] = checkWinner(newBoard);

    if (newWinner !== WINNER.NONE) {
      setWinner(newWinner);
      setWinnerCombo(combo);
      conffeti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
      setTurn(newTurn);
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(WINNER.NONE);
    setWinnerCombo(Array(3).fill(null));    
  }

  return (
    <main className='board'>
        <h1>×O</h1>
        <section className='game'>
          {
            board.map((_, index) => {
              return (
                <Square 
                  key={index} 
                  index={index}
                  updateBoard={updateBoard}
                  winner={winnerCombo.includes(index) ? true : false}
                >
                  {board[index]}
                </Square>
              )
            })
          }
        </section>

        { 
          winner === WINNER.NONE && (
            <section className="turn">
              <Square isSelected={turn === TURNS.X}>
                {TURNS.X}
              </Square>
              <Square isSelected={turn === TURNS.O}>
                {TURNS.O}
              </Square>
            </section>
          )
        }

        <button onClick={resetGame} className="text medium">↻</button>
        
    </main>
  );
}

export default App