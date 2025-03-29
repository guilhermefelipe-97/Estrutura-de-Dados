import PilhaInvertida from "../src/Questão_1";

function invertePosicao(p1){
    let p2 = new PilhaInvertida(p1.length());

    while (!p1.isEmpty()) {
        p2.push(p1.pop());
    }
    return p2;
}

export default invertePosicao;