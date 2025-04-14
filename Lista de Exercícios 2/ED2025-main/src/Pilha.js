class Pilha {
    constructor(tamanho = 7) {
        this.topo = 0;
        this.dados = new Array(tamanho);
        this.tamanhoMax = tamanho;
    }

    push(dado){
        if (this.isFull()){
            return console.log("Stack Overflow - Pilha cheia!");
        }else{
            this.dados[this.topo] = dado;
            this.topo++;
        }
    }

    pop(){
        if (this.isEmpty()){
            return console.log("Stack Underflow - Pilha vazia!");
        }else{
            this.topo--;
            return this.dados[this.topo];
        }

    }

    length(){
        return this.topo;
    }

    isEmpty(){
        return this.topo === 0;
    }

    isFull(){
        return this.topo === this.tamanhoMax;
    }

    clear(){
        this.topo = 0;
        this.dados = new Array(this.tamanhoMax);
    }

    toString() {
        if (this.topo === 0) return "Pilha vazia";
    
        return this.dados.slice(0, this.topo).join(", ");
    }

}

export default Pilha;