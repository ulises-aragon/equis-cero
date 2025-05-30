import { GRADIENT_CLASSES } from '../constants'

export const Square = ({ children, winner, onClick }) => {
  const className = `square ${GRADIENT_CLASSES[winner]}`;
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
}