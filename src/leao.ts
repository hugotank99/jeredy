import { Felino } from "./felinos";


class Leao extends Felino{
   
    public name: string;

  constructor (name: string) {
    super();
    this.name = name;
  }

    public emitirSom(sound: string): void {
        console.log(`o leão emiti ${sound}`);
        
    }
    public caca(presa: string): void; 
    public caca( presa: string, QuatDePresas: number,): void;
    public caca(presa: string, QuatDePresas: number, tipoDePresa: string): void;

    public caca(presa: string, QuatDePresas?: number, tipoDePresa?: string){
        if (tipoDePresa != undefined) {
            console.log(`Leão esta caçando um/a ${tipoDePresa}`);  
        }
        const numPresas = (QuatDePresas = undefined)? 1: QuatDePresas
        console.log(`O leão esta caçando o numero de presas ${numPresas} ${presa}`);
            
        
    }
    
            
}
export { Leao }