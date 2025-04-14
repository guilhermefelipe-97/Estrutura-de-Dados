import Fila from "../src/Fila";
import PilhaComFilas from "../src/Questão_1";

let f1;
let f2;
let pilha;

beforeEach(() => {
  f1 = new Fila(3);
  f2 = new Fila(3);
  pilha = new PilhaComFilas();
});

test("Deve empilhar e desempilhar corretamente usando duas filas", () => {
  pilha.push('A');
  pilha.push('B');
  pilha.push('C');

  expect(pilha.pop()).toBe('C');
  expect(pilha.pop()).toBe('B');
  expect(pilha.pop()).toBe('A');
});

test("Espera-se que as filas estejam vazias", () =>{
  expect(f1.dequeue()).toBe(false);
  expect(f2.dequeue()).toBe(false);
});

test("Espera-se que a fila esteja cheia, e que não esteja após dequeue", () =>{
  f1.enqueue('A');
  f1.enqueue('B');
  f1.enqueue('C');
  expect(f1.isFull()).toBe(true);
  f1.dequeue();
  expect(f1.isFull()).toBe(false);
});

test("Testando o front", () =>{
  f1.enqueue('A');
  f1.enqueue('B');
  f1.enqueue('C');
  expect(f1.front()).toBe('A');
});

