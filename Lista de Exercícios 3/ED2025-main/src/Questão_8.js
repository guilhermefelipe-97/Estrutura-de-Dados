class Node {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.proximo = null;
    }
}

class ListaAlgoritmo {
    constructor() {
        this.inicio = null;
    }

    inserir(nome, idade) {
        let novoNo = new Node(nome, idade);
        if (this.inicio === null) {
            this.inicio = novoNo;
        } else {
            let aux = this.inicio;
            while (aux.proximo !== null) {
                aux = aux.proximo;
            }
            aux.proximo = novoNo;
        }
    }

    ordemAlfabetica() {
        let listaOrdenada = new ListaAlgoritmo();
        let arr = [];
        let aux = this.inicio;

        while (aux !== null) {
            arr.push({ nome: aux.nome, idade: aux.idade });
            aux = aux.proximo;
        }

        arr.sort((a, b) => a.nome.localeCompare(b.nome));

        for (let i = 0; i < arr.length; i++) {
            listaOrdenada.inserir(arr[i].nome, arr[i].idade);
        }

        return listaOrdenada;
    }

    ordemIdade() {
        let listaOrdenada = new ListaAlgoritmo();
        let arr = [];
        let aux = this.inicio;

        while (aux !== null) {
            arr.push({ nome: aux.nome, idade: aux.idade });
            aux = aux.proximo;
        }

        arr.sort((a, b) => a.idade - b.idade);

        for (let i = 0; i < arr.length; i++) {
            listaOrdenada.inserir(arr[i].nome, arr[i].idade);
        }

        return listaOrdenada;
    }

    exibir() {
        let aux = this.inicio;
        let elementos = [];
        while (aux !== null) {
            elementos.push({ nome: aux.nome, idade: aux.idade });
            aux = aux.proximo;
        }
        return elementos;
    }
}

export default ListaAlgoritmo;