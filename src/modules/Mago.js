import { Personagem } from "./Personagem.js";

export class Mago extends Personagem {
    elementoMagico;
    levelMagico;
    inteligencia;
    static tipo = 'Mago';
    static descricao = 'Grandes feitos de Magos durante a história tornam estes seres reconhecidos como de enorme poder!';

    constructor(nome, elementoMagico, levelMagico, inteligencia) {
        super(nome);
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