class Pilha {
    constructor(tamanho) {
        this.dados = new Array(tamanho);
        this.topoA = tamanho - 1;
        this.topoB = 0;
        this.tamanhoMax = tamanho;
    }


pilhaisFull(){
    return this.topoA + 1 === this.topoB;
}

eVaziaA(){
    return this.topoA === this.tamanhoMax - 1;
}

eVaziaB(){
    return this.topoB === 0;
}

empilhaA(dado){
    if (this.pilhaisFull()) throw new Error("Pilha Cheia - Stack Overflow");
    this.dados[this.topoA] = dado;
    this.topoA--;
}

empilhaB(dado){
    if (this.pilhaisFull()) throw new Error("Pilha Cheia - Stack Overflow");
    this.dados[this.topoB] = dado;
    this.topoB++;
}

desempilhaA(){
    if (this.eVaziaA()) throw new Error("Pilha Vazia - Stack Underflow");
    this.topoA++;
}

desempilhaB(){
    if (this.eVaziaB()) throw new Error("Pilha Vazia - Stack Underflow");
    this.topoB--;
}

}

export default Pilha;