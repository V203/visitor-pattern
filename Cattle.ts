

import AnimalVisitor from "./AnimalVisitor";

export default interface Cattle{
     accept(visitor: AnimalVisitor): void;

}


