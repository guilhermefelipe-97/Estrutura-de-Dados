class Fila {
    constructor(tamanho = 7) {  
        this.dados = [];
        this.inicioFila = 0;
        this.fimFila = 0;
        this.tamanho = 0;
        this.tamanhoMax = tamanho;
    }

    enqueue(dado) {
        if (this.isFull()) {
            return false;
        }else if (this.isEmpty()) {
            this.dados[this.inicioFila] = dado;
            this.fimFila++;
        } else {
            this.dados[this.fimFila] = dado;
            this.fimFila++;
        }
    
        this.tamanho++;
    }

    dequeue(){
        if (this.isEmpty()){
            return false;
        }
        let aux;
        aux = this.dados[this.inicioFila];
        this.inicioFila++;
        this.tamanho--;
        return aux;
    }

    front() {
        if (!this.isEmpty()) return this.dados[this.inicioFila];
    }

    isEmpty(){
        return this.tamanho === 0;
    }

    isFull(){
        return this.tamanho === this.tamanhoMax;
    }

    clear() {
        this.inicioFila = 0;
        this.fimFila = 0;
    }

}

export default Fila;