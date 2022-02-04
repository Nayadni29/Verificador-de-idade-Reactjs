import React from 'react';
import Button from './components/Button';
import Background  from './components/background'
import Avatar from './components/avatar';
import './App.css';


const App = () => {
 
  const [valueIdade, setValueIdade] = React.useState(null);
  const [idade, setIdade] = React.useState(null);
  const [genero, setGenero] = React.useState(null);
  const [color, setColor] = React.useState('#ccc');
  const [imageDestaque, setImageDestaque] = React.useState(null);

  const calculaIdade = (dataNasc) => {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const anoNascParts = dataNasc.split('-');

    const diaNasc = anoNascParts[2];
    const mesNasc = anoNascParts[1];
    const anoNasc = anoNascParts[0];

    const idade = anoAtual - anoNasc;

    if(mesAtual < mesNasc){
        //Se o mês atual for menor que o nascimento, não fez aniversário ainda;
        return idade - 1;

    }else if(mesAtual == mesNasc){
        //Se estiver no mês do nascimento, verificar o dia;

        if(new Date().getDate() < diaNasc){
        //Se a data for menor que o dia de nascimento ele ainda não fez aniversário;
        return idade - 1;

        }else{
            return idade;
        }
    }
  }

  const handleChangeDataNasc = (e) => {
    setValueIdade(e.target.value)
    setIdade(calculaIdade(e.target.value));
  }
  const handleCheckGenero = (e) => {
    setGenero(parseInt(e.target.value))
  }
  const handleClick = () => {

    if(idade < 0 || idade == null){
      alert('[ERRO] Verifique os dados e tente novamente!');
    }else if(idade >= 0 && idade < 4){
        //Bebê
        setImageDestaque( genero?
          'https://raw.githubusercontent.com/Nayadni29/verificador-de-idade/master/foto-bebe-f.png'
          :'https://raw.githubusercontent.com/Nayadni29/verificador-de-idade/master/foto-bebe-m.png');
          setColor( genero?'#f1e257':'#ad967b');
    }else if(idade < 11){
        //Criança
        setImageDestaque( genero?
          'https://raw.githubusercontent.com/Nayadni29/verificador-de-idade/master/foto-crianca-f.png'
          :'https://raw.githubusercontent.com/Nayadni29/verificador-de-idade/master/foto-crianca-m.png');
        setColor( genero?'#e9b9ab':'#ad967b');
    }else if(idade < 21){
        //Jovem
        setImageDestaque( genero?
          'https://raw.githubusercontent.com/Nayadni29/verificador-de-idade/master/foto-jovem-f.png'
          :'https://raw.githubusercontent.com/Nayadni29/verificador-de-idade/master/foto-jovem-m.png');
        setColor( genero?'#7cb0b4':'#b0b0ae');
    }else if(idade < 40){
        //Jovem Adulto
        setImageDestaque( genero?
          'https://raw.githubusercontent.com/Nayadni29/verificador-de-idade/master/foto-jovemadulto-f.png'
          :'https://raw.githubusercontent.com/Nayadni29/verificador-de-idade/master/foto-jovemadulto-m.png');
        setColor( genero?'#c7ab68':'#e2dcde');
    }else if(idade < 60){
        //Adulto
        setImageDestaque( genero?
          'https://raw.githubusercontent.com/Nayadni29/verificador-de-idade/master/foto-adulto-f.png'
          :'https://raw.githubusercontent.com/Nayadni29/verificador-de-idade/master/foto-adulto-m.png');
        setColor( genero?'#ef5620':'#85766b');
    }else{
        //Idoso
        setImageDestaque( genero?
          'https://raw.githubusercontent.com/Nayadni29/verificador-de-idade/master/foto-idoso-f.png'
          :'https://raw.githubusercontent.com/Nayadni29/verificador-de-idade/master/foto-idoso-m.png');
        setColor( genero?'#98a32a':'#adb6b5');
    }

  }

  return (
    <Background color={color}>
      
      <div className="title"><h1>Verificador de Idade</h1></div>
      <div className="container">
        <p>Data de Nascimento:
          <input id="data" type="date" onChange={handleChangeDataNasc} name="txtdat" id="txtdat" min="01-01-0001" required></input>          
        </p>
        <div>Sexo:
          <div onChange={handleCheckGenero}>
            <input type="radio"  name="radsex" id="mas" value="0"></input>
            <label htmlFor="mas">Masculino</label>
            <input type="radio"  name="radsex" id="fem" value="1"></input>
            <label htmlFor="fem">Feminino</label>
          </div>
        </div>
        <Button onClick={handleClick}>Verificar</Button>

        <div id="res">
            Preencha os dados acima para ver o resultado!
            <p>Detectamos <u>{genero?'mulher':'homem'}</u> com <strong>{idade} anos.</strong></p>
            <Avatar url={imageDestaque} className={'dasdas'} />
        </div>
      </div>
      <div>
        <p className='assinatura'>&copy; NayadniMarganelli</p>
      </div>

    </Background>
    
  );
}
export default App;