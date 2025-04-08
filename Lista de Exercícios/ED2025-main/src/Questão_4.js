import PilhaInvertida from "./Questão_1";

function conversor(numero){
    let p = new PilhaInvertida(7);
    let result = "";
    let cont = 0;

    while(numero > 0){
        p.push(numero % 2);
        numero = parseInt(numero/2);
        cont++;
    }

    for (let i = 0; i < cont; i++){
        result += p.pop().toString();
    }
    return result;
}

export default conversor;