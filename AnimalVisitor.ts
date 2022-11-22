import Cow from "./Cow";
import Sheep from "./Sheep";
import Goat from "./Goat";

  export default interface AnimalVisitor{
    
    visitGoat(animal:Sheep):void;
    visitSheep(animal:Goat): void;
    visitCow(animal:Cow): void;
  }