import Lista from "./Lista";

class PilhaComLista {
    constructor() {
        this.l1 = new Lista();
        this.topo = 0;
    }

    push(dado){
        this.l1.inserirInicio(dado);
        this.topo = dado;
    }

    pop(){
        this.l1.removerInicio();
        if (this.l1.inicio === null){
            this.topo = 0;
        }else{
            this.topo = this.l1.inicio.dado;
        } 
    }
    
    length(){
        return this.topo;
    }

    isEmpty(){
        return this.topo === 0;
    }
}

export default PilhaComLista;