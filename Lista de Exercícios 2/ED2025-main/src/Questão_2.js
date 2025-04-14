import Pilha from "./Pilha";

class FilaComPilhas {
    constructor(tamanho) {
        this.p1 = new Pilha(tamanho);
        this.p2 = new Pilha(tamanho);
        this.tamanho = 0;
        this.tamanhoMax = tamanho;
    }

    enqueue(dado) {
        if (this.p2.isFull()) {
            return false;
        }
        if (this.p1.isFull()) {
            while(!this.p1.isEmpty()){
                this.p2.push(this.p1.pop());
            }
        }else{
            this.p1.push(dado);
        }
        this.tamanho++;
    }

    dequeue(){
        let aux;
        if (this.p1.isEmpty() && this.p2.isEmpty()){
            return false;
        }else{
            
            while(this.p1.topo !== 1){
                this.p2.push(this.p1.pop());
            }
            aux = this.p1.pop();
            while(!this.p2.isEmpty()){
                this.p1.push(this.p2.pop());
            }
        }
        this.tamanho--;
        return aux;
    }

    front() {
        if (!this.p1.isEmpty()){
            return this.p1.dados[0];
        }
        return this.p2.dados[0];
    }

    isEmpty(){
        return this.tamanho === 0;
    }

    isFull(){
        return this.tamanho === this.tamanhoMax;
    }

    clear() {
        while(!this.p1.isEmpty()){
            this.p1.pop();
            this.tamanho--;
        }
        while(!this.p2.isEmpty()){
            this.p2.pop();
            this.tamanho--;
        }
    }
}

export default FilaComPilhas;