export const TURNS = {
  X: '×',
  O: 'o',
}

export const WINNER = {
  NONE: null,
  DRAW: false,
}

export const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
]

export const GRADIENT_CLASSES = {    
    [WINNER.NONE]: '',
    SELECTED: 'is-selected',
    [WINNER.DRAW]: 'draw',
    [TURNS.X]: 'x-win',
    [TURNS.O]: 'o-win',
}