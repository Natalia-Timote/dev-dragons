import { Personagem } from "./Personagem.js";

export class Arqueiro extends Personagem {
    destreza;
    static tipo = 'Arqueiro';
    static descricao = 'De grande destreza, tem em seu arco o poder para transformar o mundo!';

    constructor(nome, destreza) {
        super(nome);
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
