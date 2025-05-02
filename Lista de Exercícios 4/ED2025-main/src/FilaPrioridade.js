import No from "./No";

class FilaPrioridade {
    constructor() {
        this.arvore = [];
        this.tamanho = 0;
        this.arvore[0] = new No(0, -9999);
    }   

    inserir(dado,prioridade){
        let novoNo = new No(dado,prioridade);
        this.tamanho++;
        this.arvore[this.tamanho] = novoNo;
        let i = this.tamanho;
        while (i > 1) {
            let pai = Math.floor(i / 2);
            if (this.arvore[i].prioridade < this.arvore[pai].prioridade) {
                let aux = this.arvore[pai];
                this.arvore[pai] = this.arvore[i];
                this.arvore[i] = aux;
                i = pai;
            } else {
                break;
            }
        }
    }

    verificar(){
        let aux = '';
        for(let i = 1; i <= this.tamanho; i++){
            aux += this.arvore[i].prioridade;
            if (i === this.tamanho){
                break;
            }
            aux+= ',';
        }
        return aux;
    }

    remover() {
        if (this.tamanho === 0) {
            return;
        }
        
        this.arvore[1] = this.arvore[this.tamanho];
        this.tamanho--;
        let pai = 1;
    
        while (true) {
            let filho1 = 2 * pai;
            let filho2 = 2 * pai + 1;
            let menorFilho;
    
            if (filho1 > this.tamanho){
                break;
            }
    
            if (filho2 > this.tamanho) {
                menorFilho = filho1;
            } else {
                if (this.arvore[filho1].prioridade < this.arvore[filho2].prioridade) {
                    menorFilho = filho1;
                } else {
                    menorFilho = filho2;
                }
            }
    
            if (this.arvore[pai].prioridade <= this.arvore[menorFilho].prioridade) {
                break;
            }
    
            let aux = this.arvore[pai];
            this.arvore[pai] = this.arvore[menorFilho];
            this.arvore[menorFilho] = aux;
            pai = menorFilho;
        }
    }
}

export default FilaPrioridade;