function Square({ value, onSquareClick }) {
  return (
    <button
      className=" w-[8rem] h-[6rem] text-center text-3xl border border-solid border-White"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
export default Square;
