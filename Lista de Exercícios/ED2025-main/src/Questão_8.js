class PilhaDePratos {
    constructor(tamanho) {
        this.topo = 0;
        this.capacidade = tamanho;
        this.dados = new Array(tamanho);
    }

    empilha(valor) {
        if (this.topo < this.capacidade) {
            this.dados[this.topo] = valor;
            this.topo++;
        }
    }

    desempilha() {
        if (this.topo === 0) return undefined;
        this.topo--;
        return this.dados[this.topo];
    }
}

class GerenciadorPilhas {
    constructor(tamanhoMaximo) {
        this.tamanhoMaximo = tamanhoMaximo;
        this.pilhas = [new PilhaDePratos(tamanhoMaximo)];
    }

    empilha(valor) {
        const atual = this.pilhas[this.pilhas.length - 1];

        if (atual.topo < atual.capacidade) {
            atual.empilha(valor);
        } else {
            const novaPilha = new PilhaDePratos(this.tamanhoMaximo);
            novaPilha.empilha(valor);
            this.pilhas.push(novaPilha);
        }
    }

    desempilha() {
        while (this.pilhas.length > 0) {
            const atual = this.pilhas[this.pilhas.length - 1];
            const valor = atual.desempilha();
            if (valor !== undefined) return valor;
            this.pilhas.pop();
        }

        console.log("A lista está vazia.");
        return undefined;
    }

    pilhaAtualDados() {
        if (this.pilhas.length === 0) return [];
        return this.pilhas[this.pilhas.length - 1].dados;
    }

    pilhaAtual() {
        return this.pilhas[this.pilhas.length - 1];
    }
}

export default GerenciadorPilhas;