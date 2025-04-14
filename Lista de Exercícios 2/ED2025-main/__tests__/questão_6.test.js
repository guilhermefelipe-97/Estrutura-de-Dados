import inverterFila from '../src/Questão_6';
import Fila from '../src/Fila';

describe('Testes da função inverterFila', () => {
    test('Deve inverter a fila', () => {
        const filaOriginal = new Fila(5);
        filaOriginal.enqueue(1);
        filaOriginal.enqueue(2);
        filaOriginal.enqueue(3);
        filaOriginal.enqueue(4);
        filaOriginal.enqueue(5);

        const filaInvertida = inverterFila(filaOriginal);
        
        expect(filaInvertida.dequeue()).toBe(5);
        expect(filaInvertida.dequeue()).toBe(4);
        expect(filaInvertida.dequeue()).toBe(3);
        expect(filaInvertida.dequeue()).toBe(2);
        expect(filaInvertida.dequeue()).toBe(1);
    });

    test('Deve retornar uma fila vazia ao inverter uma fila vazia', () => {
        const filaVazia = new Fila(5);
        
        const filaInvertida = inverterFila(filaVazia);
        
        expect(filaInvertida.isEmpty()).toBe(true);
    });
});
