import { TURNS, WINNER, GRADIENT_CLASSES } from '../constants';
import { Square } from './Square';

export const Board = ({ boardId, board, setSlots, setTurn, resetBoard }) => {
    const { slots, turn, winner, winnerLine } = board;

    const onMove = (index) => {
        if (slots[index] || winner !== WINNER.NONE) return;

        const newSlots = [...slots];
        newSlots[index] = turn;
        setSlots(boardId, newSlots);

        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(boardId, newTurn);
    }

    const className = `board ${GRADIENT_CLASSES[winner]}`;

    return (
        <div className={className}>
            <div className="slots">
                {
                    slots.map((_, index) => {
                        return (
                            <Square 
                                key={index}
                                onClick={() => onMove(index)}
                                winner={winnerLine.includes(index) ? winner : WINNER.NONE}
                            >
                                {slots[index]}
                            </Square>
                        )
                    })
                }
            </div>
            <footer>
                {winner === WINNER.NONE && (
                    <div className="turn">
                        <Square winner={turn === TURNS.X ? 'SELECTED' : WINNER.NONE}>
                            {TURNS.X}
                        </Square>
                        <Square winner={turn === TURNS.O ? 'SELECTED' : WINNER.NONE}>
                            {TURNS.O}
                        </Square>
                    </div>
                )}
                <button onClick={() => resetBoard(boardId)}>
                    ↻
                </button>
            </footer>
        </div>
    );
}