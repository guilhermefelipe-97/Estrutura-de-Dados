import Fila from "./Fila";

class PilhaComFilas {
    constructor(tamanho = 7) {
        this.f1 = new Fila(tamanho);
        this.f2 = new Fila(tamanho);
    }

    push(dado) {
        this.f2.enqueue(dado);

        while (!this.f1.isEmpty()) {
            this.f2.enqueue(this.f1.dequeue());
        }

        const temp = this.f1;
        this.f1 = this.f2;
        this.f2 = temp;
    }

    pop() {
        return this.f1.dequeue();
    }

    top() {
        return this.f1.front();
    }

    isEmpty() {
        return this.f1.isEmpty();
    }

    isFull() {
        return this.f1.isFull();
    }
}

export default PilhaComFilas;