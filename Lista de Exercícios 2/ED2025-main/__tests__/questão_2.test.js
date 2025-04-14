import FilaComPilhas from "../src/Questão_2";

let f1;

beforeEach(() => {
    f1 = new FilaComPilhas(3);
  });

test("Espera-se que as fila esteja vazia ao instanciar e não seja possível realizar dequeue", () =>{
    expect(f1.dequeue()).toBe(false);
    expect(f1.isEmpty()).toBe(true);
  });

test("Espera-se que a fila esteja cheia", () =>{
    f1.enqueue('A');
    f1.enqueue('B');
    f1.enqueue('C');
    expect(f1.isFull()).toBe(true);
  });

test("Espera-se que o comportamento de uma fila ao remover elementos", () =>{
    f1.enqueue('A');
    f1.enqueue('B');
    f1.enqueue('C');
    expect(f1.dequeue()).toBe('A');
    expect(f1.dequeue()).toBe('B');
    expect(f1.dequeue()).toBe('C');
    expect(f1.dequeue()).toBe(false);
  });

test("Testando o front", () =>{
    f1.enqueue('A');
    f1.enqueue('B');
    f1.enqueue('C');
    expect(f1.front()).toBe('A');
    f1.dequeue();
    expect(f1.front()).toBe('B');
  });

  test("Testando o clear", () =>{
    expect(f1.isEmpty()).toBe(true);
    f1.enqueue('A');
    expect(f1.isEmpty()).toBe(false);
    f1.enqueue('B');
    f1.enqueue('C');
    f1.clear();
    expect(f1.isEmpty()).toBe(true);
  });