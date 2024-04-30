import './coloringCard.css';

const ColoringCard = (props) => {
  return (
    <>
      <p style={{ color: props.color }}>{props.text}</p>
    </>
  );
};

export default ColoringCard;
