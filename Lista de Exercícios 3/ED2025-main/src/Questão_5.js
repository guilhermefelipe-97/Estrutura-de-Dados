function embaralhar(lista) {
    let elementos = [];
    let atual = lista.inicio;

    while (atual !== null) {
        elementos.push(atual.dado);
        atual = atual.proximo;
    }

    for (let i = elementos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [elementos[i], elementos[j]] = [elementos[j], elementos[i]];
    }

    atual = lista.inicio;
    let i = 0;
    while (atual !== null) {
        atual.dado = elementos[i];
        atual = atual.proximo;
        i++;
    }

    return lista;
}

export default embaralhar;
