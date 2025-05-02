class MegaSena {
    constructor() {
        this.ganhadoresMega = [];
        this.ganhadoresQuina = [];
    }

    apostar(resultado, apostadores){
        apostadores.forEach((apostador) => {
            let cont = 0;
            apostador.aposta.forEach((numeroApostado) => {
                resultado.forEach((numeroSorteado) => {
                    if (numeroApostado === numeroSorteado) {
                        cont++;
                    }
                });
            });
        
            if (cont === 6) {
                this.ganhadoresMega.push(apostador.nome);
            } else if (cont === 5) {
                this.ganhadoresQuina.push(apostador.nome);
            }
        });
    }

    resultado() {
        return {
            ganhadoresQuina: this.ganhadoresQuina.join(",") + (this.ganhadoresQuina.length > 0 ? "," : ""),
            ganhadoresMega: this.ganhadoresMega.join(",") + (this.ganhadoresMega.length > 0 ? "," : "")
        };
    }
}

export default MegaSena;