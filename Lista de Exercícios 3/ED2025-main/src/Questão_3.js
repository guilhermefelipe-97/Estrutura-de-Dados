import No from "./No";

class ListaSimples {
    constructor() {
        this.dados = [];
        this.inicio = - 1;
        this.livre = 0;
    }

    inserir(dado) {
        let novoNo = new No(dado);
        novoNo.proximo = - 1;
        this.dados[this.livre] = novoNo;
        if(this.inicio === -1){
            this.inicio = this.livre;
        }else{
            let atual = this.inicio;
            while (this.dados[atual].proximo !== -1) {
            atual = this.dados[atual].proximo;
        }
            this.dados[atual].proximo = this.livre;
        }
        this.livre++;
    }

    exibir() {
        let atual = this.inicio;
        let elementos = [];
    
        while (atual !== -1) {
            elementos.push(this.dados[atual].dado);
            atual = this.dados[atual].proximo;
        }
    
        return elementos;
    }
    

    remover(dado) {
        let atual = this.inicio;
        let passado = this.inicio;
    
        while (atual !== -1 && this.dados[atual].dado !== dado) {
            passado = atual;
            atual = this.dados[atual].proximo;
        }
    
        if (atual === -1) {
            return false;
        }
    
        if (passado === atual) {
            this.inicio = this.dados[atual].proximo;
        } else {
            if (this.dados[atual].proximo === -1) {
                this.dados[passado].proximo = -1;
            } else {
                this.dados[passado].proximo = this.dados[atual].proximo;
            }
        }
    
        this.dados[atual] = null;
        return dado;
    }
    

    buscar(dado) {
        let atual = this.inicio;
        while (atual !== -1 && this.dados[atual].dado !== dado) {
            atual = this.dados[atual].proximo;
        }
        if (atual !== -1 && this.dados[atual].dado === dado) {
            return atual;
        }
        return false;
    }
}

export default ListaSimples;