import josephus from "../src/Questão_7";

describe('Testes do Problema de Josephus', () => {
  
  test('Caso com 41 soldados e contagem de 3', () => {
    let N = 41;
    let D = 3;
    let resultado = josephus(N, D);
    
    expect(resultado.eliminados.length).toBe(N - 1);
    expect(resultado.vencedor).toBe(31);
  });
  
  test('Caso com 5 soldados e contagem de 2', () => {
    let N = 5;
    let D = 2;
    let resultado = josephus(N, D);
    
    expect(resultado.eliminados).toEqual([2, 4, 1, 5]);
    expect(resultado.vencedor).toBe(3);
  });
  
  test('Caso com 7 soldados e contagem de 3', () => {
    let N = 7;
    let D = 3;
    let resultado = josephus(N, D);
    
    expect(resultado.eliminados).toEqual([3, 6, 2, 7, 5, 1]);
    expect(resultado.vencedor).toBe(4);
  });

  test('Caso com 1 soldado (deve ser o vencedor sem eliminações)', () => {
    let N = 1;
    let D = 1;
    let resultado = josephus(N, D);

    expect(resultado.eliminados.length).toBe(0);
    expect(resultado.vencedor).toBe(1);
  });
  
});