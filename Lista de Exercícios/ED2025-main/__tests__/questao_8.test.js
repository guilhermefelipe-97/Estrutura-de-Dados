import GerenciadorPilhas from "../src/Questão_8";

let gerenciador;

beforeEach(() => {
    gerenciador = new GerenciadorPilhas(3);
});

test("Empilhar até encher a primeira pilha", () => {
    gerenciador.empilha(5);
    gerenciador.empilha(10);
    gerenciador.empilha(15);

    expect(gerenciador.pilhaAtual().dados).toEqual([5, 10, 15]);
});

test("Empilhar além da capacidade (criar nova pilha)", () => {
    gerenciador.empilha(5);
    gerenciador.empilha(10);
    gerenciador.empilha(15);
    gerenciador.empilha(20);

    expect(gerenciador.pilhas.length).toBe(2);
    expect(gerenciador.pilhaAtual().dados[0]).toBe(20);
});

test("Desempilhar elementos da pilha atual e anterior", () => {
    gerenciador.empilha(5);
    gerenciador.empilha(10);
    gerenciador.empilha(15);
    gerenciador.empilha(20);

    const desempilhado1 = gerenciador.desempilha();
    const desempilhado2 = gerenciador.desempilha();

    expect(desempilhado1).toBe(20);
    expect(desempilhado2).toBe(15);
});

test("Desempilhar de pilha vazia sem erro", () => {
    const desempilhado = gerenciador.desempilha();
    expect(desempilhado).toBeUndefined();
});
