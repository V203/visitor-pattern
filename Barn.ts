import Ianimal from "./Cattle";
import Sheep from "./Sheep";
import Goat from "./Goat";
import AnimalVisitor from "./AnimalVisitor";
import Cow from "./Cow";
import Cattle from "./Cattle";


export default class Barn implements AnimalVisitor {


    private _arr = new Array<any>();

    getCattle() {
        return this._arr;
    }
    addCattle(value:Cattle) {
        this._arr.push(value);
    }

    getSheep(){
        
      return  this._arr.filter((el)=> el instanceof Sheep );
    }

    getGoat(){
        
        return  this._arr.filter((el)=> el instanceof Goat );
      }

      getCows (){
        return  this._arr.filter((el)=> el instanceof Cow );
      }


    visitGoat(animal: Sheep): void {

        console.log("A Goat has been sent to the barn");
    }





    visitSheep(animal: Goat): void {

        console.log("A Sheep has been sent to the barn");

    }

    visitCow(animal: Cow): void {

        console.log("A cow has been sent to the barn");
        let cow: Array<Cow> = []


    }

    public  queryAnimal(animal:Cattle){

        this._arr.push(animal)

    }





}

