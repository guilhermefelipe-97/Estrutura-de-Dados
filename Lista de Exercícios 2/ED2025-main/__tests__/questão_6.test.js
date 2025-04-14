import Fila from '../src/Fila';
import inverterFila from '../src/Questão_6';

  let fila;

  beforeEach(() => {
    fila = new Fila();
  });

  test("Fila com elementos, deve inverter a ordem", () => {
    fila.enqueue(1);
    fila.enqueue(2);
    fila.enqueue(3);
    fila.enqueue(4);

    inverterFila(fila);

    expect(fila.dados).toEqual([4, 3, 2, 1]);
  });

  test("Fila vazia, deve permanecer vazia após inversão", () => {
    inverterFila(fila);

    expect(fila.dados).toEqual([]);
  });

  test("Fila com um único elemento, deve permanecer inalterada após inversão", () => {
    fila.enqueue(10);

    inverterFila(fila);

    expect(fila.dados).toEqual([10]);
  });
