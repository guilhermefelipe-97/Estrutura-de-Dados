import PilhaComLista from "../src/Questão_1";

let pilha;

beforeEach(() => {
    pilha = new PilhaComLista();
});

test('pilha deve iniciar vazia', () => {
    expect(pilha.isEmpty()).toBe(true);
});

test('push deve adicionar elementos', () => {
    pilha.push(10);
    expect(pilha.topo).toBe(10);

    pilha.push(20);
    expect(pilha.topo).toBe(20);
});

test('pop deve remover o elemento do topo', () => {
    pilha.push(5);
    pilha.push(15);
    pilha.pop();
    expect(pilha.topo).toBe(5);
});

test('pop deve deixar a pilha vazia', () => {
    pilha.push(100);
    pilha.pop();
    expect(pilha.isEmpty()).toBe(true);
});

test('length deve retornar o valor do topo', () => {
    pilha.push(42);
    expect(pilha.length()).toBe(42);
});