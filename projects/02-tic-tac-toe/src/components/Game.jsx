import Square from "./Square";

const Game = ({ board, updateBoard }) => {
  return (
    <section className="game">
      {board.map((_, index) => (
        <Square key={index} index={index} updateBoard={updateBoard}>
          {board[index]}
        </Square>
      ))}
    </section>
  );
};

export default Game;
