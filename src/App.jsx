import React from 'react';
import Button from './components/Button';
import Idade from './components/Idade';

import './App.css';


const App = () => {
  const handleClick = () => {
    <Idade />
    
  }

  return (
    <>
      <div className="title"><h1>Verificador de Idade</h1></div>
      <div className="container">
        <p>Data de Nascimento:
          <input id="data" type="date" name="txtdat" id="txtdat" min="01-01-0001" required></input>          
        </p>
        <p>Sexo:
          <input type="radio" name="radsex" id="mas" checked></input>
          <label for="mas">Masculino</label>
          <input type="radio" name="radsex" id="fem" checked></input>
          <label for="fem">Feminino</label>
        </p>
        <Button onClick={handleClick}>Verificar</Button>
        <div id="res">
            Preencha os dados acima para ver o resultado!
        </div>
      </div>
      <div>
        <p className='assinatura'>&copy; NayadniMarganelli</p>
      </div>
    </>
    
  );
}
export default App;