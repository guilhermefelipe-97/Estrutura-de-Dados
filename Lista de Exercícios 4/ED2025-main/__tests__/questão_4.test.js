import MegaSena from "../src/MegaSena";

let m;

beforeEach(() => {
    m = new MegaSena;
});

test('Testando a função para encontrar ganhadores da Mega Sena', () => {
    m.apostar([10,14,19,26,31,42], [{ nome: "Mario", aposta: [10,9,8,6,5,4] },{ nome: "Ana", aposta: [14,19,26,31,42,10]},{ nome: "Raquel", aposta: [14,8,26,31,42,10]}]);
    expect(m.resultado()).toEqual({"ganhadoresQuina": "Raquel,","ganhadoresMega": "Ana,"});
});