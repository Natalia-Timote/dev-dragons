import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/Mago.js";
import { Arqueiro } from "./modules/Arqueiro.js";
import { ArqueiroMago } from "./modules/Arqueiro-mago.js";

const magoLucas = new Mago('Lucas', 4, 'Água', 4, 3);
const magaMeulia = new Mago('Méulia', 8, 'Terra', 7, 10);
const arqueiroMarcelo = new Arqueiro('Marcelo', 6, 10);
const arqueiroMagoIara = new ArqueiroMago('Iara', 7, 10, 'Ar', 4, 8);

const personagens = [magoLucas, magaMeulia, arqueiroMarcelo, arqueiroMagoIara];

new PersonagemView(personagens).render();
