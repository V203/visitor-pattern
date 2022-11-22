import AnimalVisitor from "./AnimalVisitor";
import Cattle from "./Cattle";

export default class Goat implements Cattle{
    accept(visitor: AnimalVisitor): void {
        visitor.visitGoat(this);
    }
    


        
    
}



