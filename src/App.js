import './App.css';
import ColoringCard from './components/coloringCard/coloringCard.js';
import Button from './components/button/button.js';

const showBtnLabel = (label) => {
  alert(`A label desse botão é : ${label}`);
};

function App() {
  return (
    <div className="App">
      <ColoringCard text="teste" color="blue" />
      <Button label="Baixar CV" showBtnLabel={showBtnLabel} />
    </div>
  );
}

export default App;
