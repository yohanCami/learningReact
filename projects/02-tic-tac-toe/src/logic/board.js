import { WINNERCOMBOS } from "../constants";

export const checkWinnerFrom = (boardCheck) => {
  for (const combo of WINNERCOMBOS) {
    const [a, b, c] = combo;

    if (
      boardCheck[a] &&
      boardCheck[a] === boardCheck[b] &&
      boardCheck[a] === boardCheck[c]
    ) {
      return boardCheck[a];
    }
  }

  return null;
};

export const checkEndGame = (boardCheck) => {
  return boardCheck.every((square) => square != null);
};
