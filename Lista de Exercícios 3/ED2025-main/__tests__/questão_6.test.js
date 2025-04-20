import ListaString from "../src/Questão_6";

describe('ListaString', () => {
    let lista;

    beforeEach(() => {
        lista = new ListaString();
        lista.carregarString('ChatGPT');
    });

    test('Deve carregar a string corretamente', () => {
        expect(lista.exibir()).toBe('ChatGPT');
    });

    test('Deve criar substring correta (1 até 4)', () => {
        const sub = lista.substring(1, 4);
        expect(sub.exibir()).toBe('hatG');
    });

    test('Deve criar substring correta (0 até 2)', () => {
        const sub = lista.substring(0, 2);
        expect(sub.exibir()).toBe('Cha');
    });

    test('Deve criar substring correta (3 até 6)', () => {
        const sub = lista.substring(3, 6);
        expect(sub.exibir()).toBe('tGPT');
    });

    test('Substring onde A = B (posição única)', () => {
        const sub = lista.substring(2, 2);
        expect(sub.exibir()).toBe('a');
    });

    test('Substring além do tamanho da lista deve pegar até o fim', () => {
        const sub = lista.substring(5, 10); 
        expect(sub.exibir()).toBe('PT');
    });

    test('Substring com intervalo inválido (A > B) deve retornar vazio', () => {
        const sub = lista.substring(5, 3);
        expect(sub.exibir()).toBe('');
    });
});
