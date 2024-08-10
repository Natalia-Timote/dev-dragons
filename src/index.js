import { Personagem } from "./modules/Personagem.js";

// const personagemPedrinho = {
//     nome: 'Pedrinho',
//     vida: 7,
//     mana: 12,
//     level: 5,
//     tipo: 'Mago',
// }

// const personagemJose = {
//     nome: 'Jose',
//     vida: 7,
//     mana: 6,
//     level: 3,
//     tipo: 'Arqueiro',
// }

const personagemLucas = {
    nome: 'Lucas',
    vida: 10,
    mana: 8,
    level: 4,
    tipo: 'Guerreiro'
}

const personagemPedrinho = new Personagem();
personagemPedrinho.nome = 'Pedrinho';
personagemPedrinho.vida = 7;
personagemPedrinho.mana = 12;
personagemPedrinho.level = 5;
personagemPedrinho.tipo = 'Mago';

console.log(`Insígnia de ` + personagemPedrinho.nome + `: ` + personagemPedrinho.obterInsignia());

const personagemJose = new Personagem;
personagemJose.nome = 'José';
personagemJose.vida = 7;
personagemJose.mana = 6;
personagemJose.level = 3;
personagemJose.tipo = 'Arqueiro';

console.log(`Insígnia de ` + personagemJose.nome + `: ` + personagemJose.obterInsignia());
