import { Animal } from "./animal";

class Felino extends Animal{
    public emitirSom(sound: string): void {
       console.log(`Felino emite o ${sound}`);
       
    }

    
}
   export { Felino }
    
