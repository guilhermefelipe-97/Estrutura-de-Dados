import PilhaInvertida from "./Questão_1";

function removeDuplicados(elementos){
    let p = new PilhaInvertida();
    let r = new PilhaInvertida();
    let result = "";
    let cont = 0;
    for (let e of elementos){
        if (e !== ","){
        p.push(e);
        }
    }
    for (let i = p.topo - 1; i >= 0 ; i--){
        cont = 0;
        for (let j = i; j >= 0 ; j--){
            if (p.dados[i] === p.dados[j]){
                cont++;
            }
        }
        if (cont === 2){
            p.pop();
        }else{
            r.push(p.pop());
        }  
    }

    while (!r.isEmpty()){
        result += r.pop();
        if (!r.isEmpty()) {  
            result += ",";
        }
    }

    return result;
}

export default removeDuplicados;