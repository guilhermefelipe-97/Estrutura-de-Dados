import Lista from '../src/Lista';
import embaralhar from '../src/Questão_5';

let lista;

beforeEach(() => {
    lista = new Lista();
    lista.inserirFim(1);
    lista.inserirFim(2);
    lista.inserirFim(3);
    lista.inserirFim(4);
    lista.inserirFim(5);
});

test('embaralhar deve manter os mesmos elementos', () => {
    const elementosOriginais = [1, 2, 3, 4, 5];
    const listaEmbaralhada = embaralhar(lista);

    let atual = listaEmbaralhada.inicio;
    let elementosFinais = [];
    while (atual !== null) {
        elementosFinais.push(atual.dado);
        atual = atual.proximo;
    }

    expect(elementosFinais.sort()).toEqual(elementosOriginais.sort());
});

test('embaralhar altera a ordem em pelo menos alguns casos', () => {
    const elementosAntes = [];
    let atual = lista.inicio;
    while (atual !== null) {
        elementosAntes.push(atual.dado);
        atual = atual.proximo;
    }

    const listaEmbaralhada = embaralhar(lista);

    const elementosDepois = [];
    atual = listaEmbaralhada.inicio;
    while (atual !== null) {
        elementosDepois.push(atual.dado);
        atual = atual.proximo;
    }

    const iguais = elementosAntes.every((valor, index) => valor === elementosDepois[index]);
    expect(iguais).toBe(false);
});