import IntercalaFilas from "../src/Questão_4";
import Fila from "../src/Fila";

let f1;
let f2;

beforeEach(() => {
    f1 = new Fila();
    f2 = new Fila();
  });

  test("Espera-se que a função consiga intercalar duas filas", () =>{
    f1.enqueue('A');
    f1.enqueue('B');
    f1.enqueue('C');
    f2.enqueue('D');
    f2.enqueue('E');
    f2.enqueue('F');
    expect(IntercalaFilas(f1,f2)).toBe('A,D,B,E,C,F');
  });