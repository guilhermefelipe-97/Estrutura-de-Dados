import Deque from "../src/Questão_5";

    let deque;
  
    beforeEach(() => {
      deque = new Deque(5);
    });
  
    test('Deve inserir elementos no início do Deque', () => {
      deque.inserirInicio(10);
      deque.inserirInicio(20);
      deque.inserirInicio(30);
      expect(deque.exibirDeque()).toBe('30,20,10');
    });
  
    test('Deve inserir elementos no fim do Deque', () => {
      deque.inserirFim(10);
      deque.inserirFim(20);
      deque.inserirFim(30);
      expect(deque.exibirDeque()).toBe('10,20,30');
    });
  
    test('Deve remover o primeiro elemento do Deque', () => {
      deque.inserirInicio(10);
      deque.inserirFim(20);
      deque.inserirFim(30);
      const removido = deque.removerInicio();
      expect(removido).toBe(10);
      expect(deque.exibirDeque()).toBe('20,30');
    });
  
    test('Deve remover o último elemento do Deque', () => {
      deque.inserirInicio(10);
      deque.inserirFim(20);
      deque.inserirFim(30);
      const removido = deque.removerFim();
      expect(removido).toBe(30);
      expect(deque.exibirDeque()).toBe('10,20');
    });
  
    test('Deve retornar "Deque cheio" quando tentar inserir em um Deque cheio', () => {
      deque.inserirInicio(10);
      deque.inserirInicio(20);
      deque.inserirInicio(30);
      deque.inserirFim(40);
      deque.inserirFim(50);
      const mensagem = deque.inserirFim(60);  // Deque cheio
      expect(mensagem).toBe('Deque cheio! Não é possível inserir no fim.');
    });
  