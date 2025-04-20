function josephus(N, D) {
    let soldados = [];
    for (let i = 1; i <= N; i++) {
        soldados.push(i);
    }

    let eliminados = [];
    let index = 0;  

    while (soldados.length > 1) {
        index = (index + D - 1) % soldados.length; 
        eliminados.push(soldados.splice(index, 1)[0]);
    }

    return { eliminados, vencedor: soldados[0] };
}

export default josephus;