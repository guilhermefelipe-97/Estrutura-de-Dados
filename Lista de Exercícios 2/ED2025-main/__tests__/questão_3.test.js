import FilaDeCaminhoes from "../src/Questão_3";

let f1;

beforeEach(() => {
    f1 = new FilaDeCaminhoes();
  });

test("Espera-se que a fila esteja vazia ao instanciar e não seja possível realizar dequeue", () =>{
    expect(f1.saidaCaminhoneiro()).toBe(false);
    expect(f1.existeCaminhoneiro()).toBe(false);
    expect(f1.listaCaminhoes()).toBe(false);
  });

test("Espera-se que a fila esteja com caminhões ao realizar entradas", () =>{
    f1.entradaCaminhoneiro('A');
    f1.entradaCaminhoneiro('B');
    f1.entradaCaminhoneiro('C');
    expect(f1.listaCaminhoes()).toBe('A,B,C');
    expect(f1.existeCaminhoneiro()).toBe(true);
  });

test("Espera-se que a fila esteja cheia ao receber 10 caminhoneiros", () =>{
    f1.entradaCaminhoneiro('A');
    f1.entradaCaminhoneiro('B');
    f1.entradaCaminhoneiro('C');
    f1.entradaCaminhoneiro('D');
    f1.entradaCaminhoneiro('E');
    f1.entradaCaminhoneiro('F');
    f1.entradaCaminhoneiro('G');
    f1.entradaCaminhoneiro('H');
    f1.entradaCaminhoneiro('I');
    f1.entradaCaminhoneiro('J');
    expect(f1.listaCaminhoes()).toBe('A,B,C,D,E,F,G,H,I,J');
    expect(f1.verificaCarregamento()).toBe(true);
  });

test("Espera-se o comportamento de fila ao sair um caminhão", () =>{
    f1.entradaCaminhoneiro('A');
    f1.entradaCaminhoneiro('B');
    f1.entradaCaminhoneiro('C');
    f1.saidaCaminhoneiro();
    expect(f1.listaCaminhoes()).toBe('B,C');
    f1.saidaCaminhoneiro();
    expect(f1.listaCaminhoes()).toBe('C');
    f1.entradaCaminhoneiro('D');
    expect(f1.listaCaminhoes()).toBe('C,D');
  });