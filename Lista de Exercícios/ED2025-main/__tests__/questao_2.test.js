import Pilha from "../src/Questão_2";

let p1;

beforeEach(() => {
    p1 = new Pilha(8)  
});

test("Testando se a pilha está vazia e se ela enche", () =>{
    expect(p1.eVaziaA()).toBe(true);
    expect(p1.eVaziaB()).toBe(true);
    p1.empilhaA("A");
    expect(p1.eVaziaB()).toBe(true);
    p1.empilhaA("B");
    p1.empilhaA("C");
    p1.empilhaA("D");
    p1.empilhaA("E");
    p1.empilhaA("F");
    p1.empilhaA("G");
    p1.empilhaA("H");
    expect(p1.pilhaisFull()).toBe(true);
  });