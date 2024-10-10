import { useState } from "react"

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index}) => {

  const className =  `square ${isSelected ? "is-selected" : ""}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div
      onClick={handleClick}
      className={className}
    >
      {children}
    </div>
  );
}

const WINNERCOMBOS = [
  [0,1,2], [3,4,5], [6,7,8], [0,3,6], 
  [1,4,7], [2,5,8], [0,4,8], [2,4,6]
]

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardCheck) => {
    for (const combo of WINNERCOMBOS) {

      const [a, b, c] = combo

      if ( boardCheck[a] && boardCheck[a] === boardCheck[b] && boardCheck[a] === boardCheck[c] ) {
        return boardCheck[a]
      }

    }

    return null
  }

  const updateBoard = (index) => {

    if (board[index] || winner) return
    
    //Actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //Cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //Revisar si hay un ganador
    const newWinner = checkWinner(newBoard)

    if (newWinner) {
      setWinner(newWinner)
    }
  }

  return (
    <main className="board">
      <h1>Tik tak toe</h1>
      <section className="game">
        {board.map((_, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {board[index]}
          </Square>
        ))}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App
