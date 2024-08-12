import { Personagem } from "./modules/Personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/Mago.js";

const magoLucas = new Mago('Lucas', 4, 'Água', 4, 3);
const magaMeulia = new Mago('Méulia', 8, 'Terra', 7, 10);

const personagens = [magoLucas, magaMeulia];

new PersonagemView(personagens).render();
