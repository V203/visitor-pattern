import AnimalVisitor from "./AnimalVisitor";
import Cattle from "./Cattle";


export default class Cow implements Cattle {
    accept(visitor: AnimalVisitor): void {
        visitor.visitCow(this);
    }
}


