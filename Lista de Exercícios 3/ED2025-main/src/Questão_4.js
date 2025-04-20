function inverter(lista){
    let atual = lista.inicio;
    let proximo = null;
    let anterior = null;

    while (atual !== null){ 
        proximo = atual.proximo;
        atual.proximo = anterior;
        anterior = atual;
        atual = proximo;
    }
    lista.inicio = anterior; 
    return lista;
}

export default inverter;