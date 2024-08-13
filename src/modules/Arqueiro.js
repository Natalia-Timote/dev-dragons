import { Personagem } from "./Personagem.js";

export class Arqueiro extends Personagem {
    destreza;
<<<<<<< HEAD
    static tipo = 'Arqueiro';
    static descricao = 'Sou um arqueiro!';
=======
    tipo = 'Arqueiro';
>>>>>>> e02223ff52e9e573b2912961f64591bec1f1ec97

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
