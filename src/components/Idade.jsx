import React from 'react';

const Idade = (dataNasc) => {
    
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDay();
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

    return (idade);
}
 
export default Idade;