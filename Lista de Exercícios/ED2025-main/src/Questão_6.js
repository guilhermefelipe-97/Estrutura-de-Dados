import PilhaInvertida from "./Questão_1";

function rpn(expressao) {
    const precedencia = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };
    let operadores = new PilhaInvertida(expressao.length);
    let resultado = [];

    for (let char of expressao) {
        if ("+-*/^".includes(char)) { 
            while (!operadores.isEmpty() && operadores.dados[operadores.topo - 1] !== '(' &&
            precedencia[operadores.dados[operadores.topo - 1]] >= precedencia[char]) {
         resultado.push(operadores.pop());
     }
     operadores.push(char); 
        } 
        else if (char === '(') {  
            operadores.push(char);
        } 
        else if (char === ')') {  
            while (!operadores.isEmpty() && operadores.dados[operadores.topo - 1] !== '(') {
                resultado.push(operadores.pop());
            }
            operadores.pop(); 
        } 
        else { 
            resultado.push(char); 
        }
    }

    while (!operadores.isEmpty()) {
        resultado.push(operadores.pop());
    }

    return resultado.join('');
}

export default rpn;