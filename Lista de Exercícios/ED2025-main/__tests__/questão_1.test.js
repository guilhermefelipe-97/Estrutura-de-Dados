import PilhaInvertida from "../src/Questão_1";

let p;

beforeEach(() => {
  p = new PilhaInvertida();

});

test("Inverte a palavra corretamente", () =>{
  let resultado = p.inverte("ABACAXI");
  expect(resultado).toBe("IXACABA");
});

