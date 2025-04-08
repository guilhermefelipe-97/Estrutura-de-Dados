import PilhaInvertida from "./Questão_1";

function verificador(sequencia) {
    let p = new PilhaInvertida();

    for (let char of sequencia) {
        if (char === '(' || char === '[') {
            p.push(char);
        } else if (char === ')' && p.pop() !== '(') {
            return false;
        } else if (char === ']' && p.pop() !== '[') {
            return false;
        }
    }
    return p.isEmpty();
}

export default verificador;