import { Personagem } from "./Personagem.js";

export class Guerreiro extends Personagem {
    forca;
    static tipo = 'Guerreiro';
    static descricao = 'A fúria de um guerreiro é capaz de afugentar até mesmo os seres mais poderosos!';

    constructor(nome, forca) {
        super(nome);
        this.forca = forca;
    }

    obterInsignia() {
        if(this.level >= 7 && this.forca >= 5) {
            return 'Guerreiro furioso';
        } else {
            return super.obterInsignia();
        }
    }
}