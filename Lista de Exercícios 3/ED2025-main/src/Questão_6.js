import No from "./No";

class ListaString {
    constructor() {
        this.inicio = null;
    }

    inserirFim(caractere) {
        const novoNo = new No(caractere);
        if (this.inicio === null) {
            this.inicio = novoNo;
        } else {
            let atual = this.inicio;
            while (atual.proximo !== null) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
        }
    }

    carregarString(texto) {
        for (let i = 0; i < texto.length; i++) {
            this.inserirFim(texto[i]);
        }
    }

    substring(a, b) {
        let novaLista = new ListaString();
        let atual = this.inicio;
        let posicao = 0;

        while (atual !== null) {
            if (posicao >= a && posicao <= b) {
                novaLista.inserirFim(atual.dado);
            }
            atual = atual.proximo;
            posicao++;
        }

        return novaLista;
    }

    exibir() {
        let atual = this.inicio;
        let resultado = '';
        while (atual !== null) {
            resultado += atual.dado;
            atual = atual.proximo;
        }
        return resultado;
    }
}

export default ListaString;