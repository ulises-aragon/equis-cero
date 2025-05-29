import { WINNER_COMBOS, WINNER } from "../constants";

export const checkWinner = (board) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return [board[a], combo];
        }
    }

    return [board.includes(null) ? WINNER.NONE : WINNER.DRAW, Array(3).fill(null)];
}