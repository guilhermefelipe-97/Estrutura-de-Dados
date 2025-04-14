import Fila from "./Fila";

function IntercalaFilas(fila1, fila2){
    let fila3 = new Fila();
    let aux = [];
    while(!fila1.isEmpty() || !fila2.isEmpty()){
        fila3.enqueue(fila1.dequeue());
        aux = fila1;
        fila1 = fila2;
        fila2 = aux;
    }
    return fila3.dados.join(',');
}

export default IntercalaFilas;