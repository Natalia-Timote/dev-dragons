import { Personagem } from "./Personagem.js";

export class Arqueiro extends Personagem {
    destreza;
    tipo = 'Arqueiro';

    constructor(nome, level, destreza) {
        super(nome, level);
        this.destreza = destreza;
    }

    obterInsignia() {
        if(this.destreza >= 5) {
            return `Dominador de flechas`;
        } else {
            return super.obterInsignia();
        }
    }
}
