import No from "./No";

class Lista {
    constructor() {
        this.inicio = null;
    }

    inserirInicio(dado){
        let novoNo = new No(dado);
        novoNo.proximo = this.inicio;
        this.inicio = novoNo;
    }

    inserirFim(dado){
        if(this.inicio === null){
            this.inserirInicio(dado);
            return;
        }
        let novoNo = new No(dado);
        let aux = this.inicio;
        while(aux.proximo !== null){
            aux = aux.proximo;
        }
        aux.proximo = novoNo;
    }

    removerValor(dado){
        if(this.inicio === null){
            return false;
        }
        let aux = this.inicio;
        let noPassado = null;
        if(aux.dado === dado){
            this.inicio = aux.proximo;
            return true;
        }
        while(aux !== null){
            if (aux.dado === dado){
                noPassado.proximo = aux.proximo;
                return true;
            }
            noPassado = aux;
            aux = aux.proximo;
        }
        return false;

    }

    buscarValor(dado){
        if(this.inicio === null){
            return false;
        }
        let aux = this.inicio;
        while(aux !== null){
            if (aux.dado === dado){
                return true;
            }
            aux = aux.proximo;  
        }
        return false;
    }

    removerInicio(){
        if (this.inicio === null){
            return false;
        }
        let aux = this.inicio;
        this.inicio = this.inicio.proximo;
        return aux.dado;
    }
    
}

export default Lista;