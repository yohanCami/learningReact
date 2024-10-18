import Square from "./Square";

const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null;

  const winerText = winner === false ? "Empate" : `Ganó: ${winner}`;

  return (
    <>
      <section className="winner">
        <h2 className="text">{winerText}</h2>

        <header className="win">{winner && <Square>{winner}</Square>}</header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </section>
    </>
  );
};

export default WinnerModal;
