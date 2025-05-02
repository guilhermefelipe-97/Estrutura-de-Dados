import FilaPrioridade from "../src/FilaPrioridade";

let f;

beforeEach(() => {
    f = new FilaPrioridade();
});

test('O Heap minimo deve funcionar corretamente', () => {
    f.inserir('A',35);
    f.inserir('B',33);
    f.inserir('C',42);
    f.inserir('D',10);
    f.inserir('E',14);
    f.inserir('F',19);
    f.inserir('G',27);
    f.inserir('H',44);
    f.inserir('I',26);
    f.inserir('J',31);
    expect(f.verificar()).toBe('10,14,19,26,31,42,27,44,35,33');
    f.remover();
    expect(f.verificar()).toBe('14,26,19,33,31,42,27,44,35');
    f.remover();
    expect(f.verificar()).toBe('19,26,27,33,31,42,35,44');
});