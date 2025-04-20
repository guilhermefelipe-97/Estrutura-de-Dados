import FilaComLista from "../src/Questão_2";

let fila;

beforeEach(() => {
    fila = new FilaComLista();
  });

  test('deve criar uma fila vazia', () => {
    expect(fila.isEmpty()).toBe(true);
  });

  test('deve adicionar elementos à fila', () => {
    fila.enqueue(10);
    fila.enqueue(20);
    fila.enqueue(30);
    
    expect(fila.isEmpty()).toBe(false);
    expect(fila.front()).toBe(10);
  });

  test('deve remover elementos da fila (dequeue)', () => {
    fila.enqueue(10);
    fila.enqueue(20);
    fila.enqueue(30);
    
    const removido = fila.dequeue();
    expect(removido).toBe(10);
    expect(fila.front()).toBe(20);
  });

  test('deve retornar null se front for chamado em uma fila vazia', () => {
    expect(fila.front()).toBe(null);
  });

  test('deve verificar se a fila está vazia após remover todos os itens', () => {
    fila.enqueue(10);
    fila.enqueue(20);
    fila.dequeue();
    fila.dequeue();
    
    expect(fila.isEmpty()).toBe(true);
  });

  test('deve limpar a fila com o método clear', () => {
    fila.enqueue(10);
    fila.enqueue(20);
    fila.clear();
    
    expect(fila.isEmpty()).toBe(true);
  });