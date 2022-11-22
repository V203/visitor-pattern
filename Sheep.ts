import Cattle from "./Cattle";
import AnimalVisitor from "./AnimalVisitor";

export default class Sheep implements Cattle{

accept(visitor: AnimalVisitor): void {
    visitor.visitSheep(this)
}



}

