import Lista from "../src/Lista.js";
import inverter from "../src/Questão_4.js";

let lista;

beforeEach(() => {
    lista = new Lista();
    lista.inserirInicio(1);
    lista.inserirInicio(2);
    lista.inserirInicio(3);
});

function pegarElementos(lista) {
    let elementos = [];
    let atual = lista.inicio;
    while (atual !== null) {
        elementos.push(atual.dado);
        atual = atual.proximo;
    }
    return elementos;
}

test('Deve inverter a lista corretamente', () => {
    const listaInvertida = inverter(lista);
    expect(pegarElementos(listaInvertida)).toEqual([1, 2, 3]);
});

test('Lista original antes da inversão é [3, 2, 1]', () => {
    expect(pegarElementos(lista)).toEqual([3, 2, 1]);
});

test('Inverter lista vazia retorna lista vazia', () => {
    let listaVazia = new Lista();
    const listaInvertida = inverter(listaVazia);
    expect(pegarElementos(listaInvertida)).toEqual([]);
});

test('Inverter lista com um único elemento retorna o mesmo elemento', () => {
    let listaUnica = new Lista();
    listaUnica.inserirInicio(42);
    const listaInvertida = inverter(listaUnica);
    expect(pegarElementos(listaInvertida)).toEqual([42]);
});