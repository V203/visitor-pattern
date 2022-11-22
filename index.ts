import Barn from "./Barn";
import Sheep from "./Sheep";
import Cow from "./Cow";
import Goat from "./Goat";

let barn = new Barn();

barn.addCattle(new Sheep());

console.log(barn.getCattle());//prints: [ Sheep {} ]

barn.addCattle(new Goat());

console.log(barn.getCattle())//Now it prints: [Sheep {}, Goat {}]


barn.addCattle(new Goat()); barn.addCattle(new Goat());
barn.addCattle(new Sheep()); barn.addCattle(new Goat());
barn.addCattle(new Sheep()); barn.addCattle(new Sheep());
barn.addCattle(new Cow()); barn.addCattle(new Cow());

console.log(barn.getCattle());// Now prints [Sheep {}, Goat {},Goat {}, Goat {},Cow {}, Cow {}, Sheep {}, Goat {},Sheep {}, Sheep {},]


console.log(`There are ${barn.getCows().length} cows in the barn.`);//prints :There are 2 cows in the barn.

console.log(`There are ${barn.getGoat().length} goats in the barn.`);//prints :There are 4 goats in the barn.

console.log(`There are ${barn.getSheep().length} sheep in the barn.`);//prints :There are 4 sheep in the barn.

console.log(`There is a total sum of  ${barn.getCattle().length} livestock`);//prints :There is a total sum of  10 livestock
    
    
    
    
  



