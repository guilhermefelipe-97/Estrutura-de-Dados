import ListaAlgoritmo from "../src/Questão_8";

describe('Testes para a lista encadeada', () => {
  
  test('Testar inserção e ordenação alfabética', () => {
    let lista = new ListaAlgoritmo();
    lista.inserir('Maria', 25);
    lista.inserir('José', 30);
    lista.inserir('Ana', 20);
    
    let listaOrdenada = lista.ordemAlfabetica();
    let resultado = listaOrdenada.exibir();
    
    // Verifique a ordem alfabética
    expect(resultado).toEqual([
      { nome: 'Ana', idade: 20 },
      { nome: 'José', idade: 30 },
      { nome: 'Maria', idade: 25 }
    ]);
  });

  test('Testar inserção e ordenação por idade', () => {
    let lista = new ListaAlgoritmo();
    lista.inserir('Maria', 25);
    lista.inserir('José', 30);
    lista.inserir('Ana', 20);
    
    let listaOrdenadaPorIdade = lista.ordemIdade();
    let resultado = listaOrdenadaPorIdade.exibir();
    
    // Verifique a ordem por idade
    expect(resultado).toEqual([
      { nome: 'Ana', idade: 20 },
      { nome: 'Maria', idade: 25 },
      { nome: 'José', idade: 30 }
    ]);
  });
  
  test('Testar caso de lista vazia', () => {
    let lista = new ListaAlgoritmo();
    
    let listaOrdenadaAlfabetica = lista.ordemAlfabetica();
    let resultadoAlfabetica = listaOrdenadaAlfabetica.exibir();
    let listaOrdenadaIdade = lista.ordemIdade();
    let resultadoIdade = listaOrdenadaIdade.exibir();
    
    // Verifique se as listas vazias retornam arrays vazios
    expect(resultadoAlfabetica).toEqual([]);
    expect(resultadoIdade).toEqual([]);
  });
  
  test('Testar lista com um único elemento', () => {
    let lista = new ListaAlgoritmo();
    lista.inserir('Carlos', 30);
    
    let listaOrdenadaAlfabetica = lista.ordemAlfabetica();
    let resultadoAlfabetica = listaOrdenadaAlfabetica.exibir();
    let listaOrdenadaIdade = lista.ordemIdade();
    let resultadoIdade = listaOrdenadaIdade.exibir();
    
    // Verifique se o único elemento está presente e sem alterações
    expect(resultadoAlfabetica).toEqual([{ nome: 'Carlos', idade: 30 }]);
    expect(resultadoIdade).toEqual([{ nome: 'Carlos', idade: 30 }]);
  });
});
