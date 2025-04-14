function inverterFila(fila) {

    if (fila.isEmpty()) {
        return;
    }

    let item = fila.dequeue();

    inverterFila(fila);

    fila.enqueue(item);
}

export default inverterFila;