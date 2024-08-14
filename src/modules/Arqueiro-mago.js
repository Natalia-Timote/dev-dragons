import { Arqueiro } from "./Arqueiro.js";
import { Mago } from "./Mago.js";
import { Personagem } from "./Personagem.js";

export class ArqueiroMago extends Personagem {
    ladoArqueiro;
    ladoMago;
    static tipo = 'ArqueiroMago';
    static descricao = 'A combinação entre destreza e habilidades mágicas, fazem do ArqueiroMago um ser poderosíssimo!';

    constructor(nome, level, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome, level);
        this.ladoArqueiro = new Arqueiro(nome, level, destreza);
        this.ladoMago = new Mago(nome, level, elementoMagico, levelMagico, inteligencia);
    }

    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`;
    }
}