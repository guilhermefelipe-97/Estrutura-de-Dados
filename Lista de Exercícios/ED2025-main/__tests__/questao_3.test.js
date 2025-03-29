import invertePosicao from "../src/Questão_3";
import PilhaInvertida from "../src/Questão_1";

let p1;

beforeEach(() => {
    p1 = new PilhaInvertida(4)
    p1.push(1);
    p1.push(2);
    p1.push(3);
    p1.push(4);
});

test("Testando se a pilha está vazia e se ela enche", () =>{
    const p2 = invertePosicao(p1);
    expect(p2.pop()).toBe(1);
    expect(p2.pop()).toBe(2);
    expect(p2.pop()).toBe(3);
    expect(p2.pop()).toBe(4);
  });