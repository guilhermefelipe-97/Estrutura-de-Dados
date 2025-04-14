import Fila from "./Fila";

class FilaDeCaminhoes {
    constructor() {
        this.FilaDeCaminhoes = new Fila(10);
    }

    entradaCaminhoneiro(caminhao){
        if(!this.FilaDeCaminhoes.isFull()){
        this.FilaDeCaminhoes.enqueue(caminhao);
        }else{
            return false;
        }
    }

    saidaCaminhoneiro(){
        if(!this.FilaDeCaminhoes.isEmpty()){
        this.FilaDeCaminhoes.dequeue();
        }else{
            return false;
        }
    }

    existeCaminhoneiro(){
        return !this.FilaDeCaminhoes.isEmpty();
    }

    verificaCarregamento(){
        return this.FilaDeCaminhoes.isFull();
    }

    listaCaminhoes(){
        if(this.FilaDeCaminhoes.isEmpty()){
            return false;
        }
        let aux = [];
        let j = 0;
        for(let i = this.FilaDeCaminhoes.inicioFila; i < this.FilaDeCaminhoes.fimFila; i++){
            aux[j] = this.FilaDeCaminhoes.dados[i];
            j++;
        }
        return aux.join(',');
    }
}

export default FilaDeCaminhoes;