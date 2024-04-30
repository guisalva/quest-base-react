import './button.css';

const Button = ({ label, showBtnLabel }) => {
  return (
    <>
      <button onClick={() => showBtnLabel(label)}>{label}</button>
    </>
  );
};

export default Button;
