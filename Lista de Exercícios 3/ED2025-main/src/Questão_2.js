import Lista from "./Lista";

class FilaComLista {
    constructor() {
        this.l1 = new Lista();
    }

    enqueue(dado) {
        this.l1.inserirFim(dado);
        }

    dequeue(){
        return (this.l1.removerInicio());
    }

    front() {
        if (this.l1.inicio === null) {
            return null;
        }
        return this.l1.inicio.dado;
    }

    isEmpty(){
        return this.l1.inicio === null;
    }

    clear() {
        this.l1.inicio = null;
    }
}

export default FilaComLista;