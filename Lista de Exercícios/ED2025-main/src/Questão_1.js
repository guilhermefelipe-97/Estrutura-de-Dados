class PilhaInvertida {
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

    inverte(str){
        let i;
        for (i = 0; i < str.length; i++){
            this.push(str[i]);
        }
        let invertida = "";
        for (i = 0; i < str.length; i++){
            invertida += this.pop();
        }
        return invertida;
    }

}

export default PilhaInvertida;