import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/Mago.js";
import { Arqueiro } from "./modules/Arqueiro.js";
import { ArqueiroMago } from "./modules/Arqueiro-mago.js";
import { Guerreiro } from "./modules/Guerreiro.js";

const guerreiroLuquios = new Guerreiro('Luquios', 10);
const magaMeulia = new Mago('Méulia', 8, 'Terra', 7, 10);
const arqueiroMarcellus = new Arqueiro('Marcellus', 6, 10);
const arqueiroMagoIaris = new ArqueiroMago('Iaris', 7, 10, 'Ar', 4, 8);

const personagens = [guerreiroLuquios, magaMeulia, arqueiroMarcellus, arqueiroMagoIaris];

new PersonagemView(personagens).render();
