import { Personagem } from "./Personagem.js";

export class Mago extends Personagem {
    elementoMagico;
    levelMagico;
    inteligencia;
    static tipo = 'Mago';
    static descricao = 'Sou um mago!';

    constructor(nome, level, elementoMagico, levelMagico, inteligencia) {
        super(nome, level);
        this.elementoMagico = elementoMagico;
        this.levelMagico = levelMagico;
        this.inteligencia = inteligencia;
    }

    obterInsignia() {
        if(this.levelMagico >= 5 && this.inteligencia >= 5) {
            return `Mestre da ${this.elementoMagico}`;
        }
        return super.obterInsignia();
    }
}