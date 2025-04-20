import ListaSimples from "../src/Questão_3";

   
    let lista;

    beforeEach(() => {
        lista = new ListaSimples();
    });

    test('inserir e exibir elementos', () => {
        lista.inserir(5);
        lista.inserir(3);
        lista.inserir(2);

        const elementos = lista.exibir();
        expect(elementos).toEqual([5, 3, 2]);
    });

    test('buscar elemento existente', () => {
        lista.inserir(5);
        lista.inserir(3);
        lista.inserir(2);

        const resultado = lista.buscar(3);
        expect(resultado).toBe(1);
    });

    test('buscar elemento inexistente', () => {
        lista.inserir(5);
        lista.inserir(3);
        lista.inserir(2);

        const resultado = lista.buscar(10);
        expect(resultado).toBe(false);
    });

    test('remover elemento existente', () => {
        lista.inserir(5);
        lista.inserir(3);
        lista.inserir(2);

        const resultado = lista.remover(3);
        expect(resultado).toBe(3);

        const elementos = lista.exibir();
        expect(elementos).toEqual([5, 2]);
    });

    test('remover primeiro elemento', () => {
        lista.inserir(5);
        lista.inserir(3);
        lista.inserir(2);

        const resultado = lista.remover(5);
        expect(resultado).toBe(5);

        const elementos = lista.exibir();
        expect(elementos).toEqual([3, 2]);
    });

    test('remover último elemento', () => {
        lista.inserir(5);
        lista.inserir(3);
        lista.inserir(2);

        const resultado = lista.remover(2);
        expect(resultado).toBe(2); 

        const elementos = lista.exibir();
        expect(elementos).toEqual([5, 3]);
    });

    test('remover elemento inexistente', () => {
        lista.inserir(5);
        lista.inserir(3);
        lista.inserir(2);

        const resultado = lista.remover(10);
        expect(resultado).toBe(false);

        const elementos = lista.exibir();
        expect(elementos).toEqual([5, 3, 2]);
    });