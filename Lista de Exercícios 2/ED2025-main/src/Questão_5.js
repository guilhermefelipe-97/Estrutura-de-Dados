class Deque {
    constructor(capacidade) {
      this.capacidade = capacidade;
      this.deque = new Array(capacidade);
      this.frente = -1;
      this.traseira = -1;
    }
  
    estaCheio() {
      return (this.traseira + 1) % this.capacidade === this.frente;
    }
  
    estaVazio() {
      return this.frente === -1;
    }
  
    inserirInicio(valor) {
      if (this.estaCheio()) {
        return 'Deque cheio! Não é possível inserir no início.';
      }
  
      if (this.estaVazio()) {
        this.frente = this.traseira = 0;
        this.deque[this.frente] = valor;
      } else {
        this.frente = (this.frente - 1 + this.capacidade) % this.capacidade;
        this.deque[this.frente] = valor;
      }
    }
  
    inserirFim(valor) {
      if (this.estaCheio()) {
        return 'Deque cheio! Não é possível inserir no fim.';
      }
  
      if (this.estaVazio()) {
        this.frente = this.traseira = 0;
        this.deque[this.traseira] = valor;
      } else {
        this.traseira = (this.traseira + 1) % this.capacidade;
        this.deque[this.traseira] = valor;
      }
    }
  
    removerInicio() {
      if (this.estaVazio()) {
        return 'Deque vazio! Não é possível remover.';
      }
  
      const removido = this.deque[this.frente];
      if (this.frente === this.traseira) {
        this.frente = this.traseira = -1; 
      } else {
        this.frente = (this.frente + 1) % this.capacidade;
      }
      return removido;
    }
  

    removerFim() {
      if (this.estaVazio()) {
        return 'Deque vazio! Não é possível remover.';
      }
  
      const removido = this.deque[this.traseira];
      if (this.frente === this.traseira) {
        this.frente = this.traseira = -1; 
      } else {
        this.traseira = (this.traseira - 1 + this.capacidade) % this.capacidade;
      }
      return removido;
    }
  
    exibirDeque() {
      if (this.estaVazio()) {
        return '';
      }
  
      let resultado = '';
      let i = this.frente;
      while (i !== this.traseira) {
        resultado += this.deque[i] + ',';
        i = (i + 1) % this.capacidade;
      }
      resultado += this.deque[this.traseira];
      return resultado;
    }
  }
  
  export default Deque;