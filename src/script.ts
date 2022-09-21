import { Felino } from "./felinos";
import { Leao } from "./leao";

const felino: Felino = new Felino ();
const leao: Leao = new Leao();

felino.emitirSom('mial');
leao.emitirSom('Roaw');
leao.caca('javali');
leao.caca('zebra', 10);
leao.caca('giraffa', 2, 'mamifero');

const numeros: number[ ] = [ ];
const leoes: Leao[ ] = [ ];

const leao1 = new Leao('Scar');
const leao2 = new Leao('nala');
const leao3 = new Leao('demi');

leoes.push(leao, leao1, leao2, leao3);
leoes.pop();
leoes.forEach((leao) =>{
console.log(leao.name);
})
console.log(leoes[0],);
