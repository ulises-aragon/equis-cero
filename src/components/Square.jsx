export const Square = ({ children, isSelected, updateBoard, index, winner }) => {
  const className = `square ${(isSelected || winner) ? 'is-selected' : ''}`;

  const handleClick = () => {
    updateBoard(index);
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
}