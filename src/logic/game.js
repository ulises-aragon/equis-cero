import { WINNER_COMBOS, WINNER, TURNS } from "../constants";

export const checkWinner = (slots) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;
        if (slots[a] && slots[a] === slots[b] && slots[a] === slots[c]) {
        return [slots[a], combo];
        }
    }

    return [slots.includes(null) ? WINNER.NONE : WINNER.DRAW, Array(3).fill(null)];
}

export const createNewBoard = () => {
    return {
      slots: Array(9).fill(null),
      turn: TURNS.X,
      winner: WINNER.NONE,
      winnerLine: Array(3).fill(null),
    };  
}