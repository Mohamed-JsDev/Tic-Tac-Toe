import { useState } from "react";
import Board from "./Board";
export default function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move  - " + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button
          className="  flex  mt-8 p-2  tracking-tight text-xl align-center justify-between  rounded  shadow-[0_20px_20px_-15px_rgba(0,0,0)]   hover:shadow-white  "
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });
  return (
    <div>
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />{" "}
      </div>
      <div className="absolute top-36 left-96">
        <h3 className="text-3xl capitalize   border-solid border-white p-2 text-center shadow-white  shadow-[0_20px_20px_-15px_rgba(0,0,0)] ">
          history
        </h3>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
