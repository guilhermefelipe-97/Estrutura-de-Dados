function inverterFila(fila) {
    if (fila.isEmpty()) {
        return fila;
    }
    const item = fila.dequeue();
    const filaInvertida = inverterFila(fila);
    filaInvertida.enqueue(item);
    return filaInvertida;
}

export default inverterFila;
