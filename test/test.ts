import Barn from "../Barn";
import assert from "assert";
import Cow from "../Cow";
import Goat from "../Goat";
import Sheep from "../Sheep";


describe("Barn animals farm simulation",()=>{
    it("Added a sheep to the barn and expect the getCattle m.lengthethod to return the size of 1",()=>{

        let barn = new Barn();

        barn.addCattle(new Sheep());

        let expected:number = 1;
        let actual:number = barn.getCattle().length;

        assert.strictEqual(expected,actual);
    })

    it("Add a Cow to the barn and expect the getCattle m.lengthethod to return the size of 1 ",()=>{
        let barn = new Barn();

        barn.addCattle(new Cow());

        let expected:number = 1;
        let actual:number = barn.getCattle().length;
        
        assert.strictEqual(expected,actual);

    })

    it("Add a goat to the barn and expect the getCattle method to return the size of 1 ",()=>{
        let barn = new Barn();

        barn.addCattle(new Goat());

        let expected:number = 1;
        let actual:number = barn.getCattle().length;
        
        assert.strictEqual(expected,actual);

    })


    it("Add a goat to the barn and expect the getCattle method to return the size of 1 ",()=>{
        let barn = new Barn();

        barn.addCattle(new Goat());

        let expected:number = 1;
        let actual:number = barn.getCattle().length;
        
        assert.strictEqual(expected,actual);

    })

    it("We should add a variety of animals in the barn and be able to get total sum of livestock which would equal 16 live stock in the barn",()=>{
        let barn = new Barn()

        barn.addCattle(new Goat());barn.addCattle(new Goat());
        barn.addCattle(new Sheep());barn.addCattle(new Goat());
        barn.addCattle(new Sheep());barn.addCattle(new Sheep());
        barn.addCattle(new Cow());barn.addCattle(new Cow());
        barn.addCattle(new Goat());barn.addCattle(new Goat());
        barn.addCattle(new Sheep());barn.addCattle(new Goat());
        barn.addCattle(new Sheep());barn.addCattle(new Sheep());
        barn.addCattle(new Cow());barn.addCattle(new Cow());

        let expected:number = 16;
        let actual:number = barn.getCattle().length;
        
        
        assert.strictEqual(expected,actual);

    })

    it("We should add a variety of animals in the barn and be able to get only the getSheep should equal 3 sheep",()=>{
        let barn = new Barn();

        barn.addCattle(new Goat());barn.addCattle(new Goat());
        barn.addCattle(new Sheep());barn.addCattle(new Goat());
        barn.addCattle(new Sheep());barn.addCattle(new Sheep());
        barn.addCattle(new Cow());barn.addCattle(new Cow());

        let expected:number = 3;
        let actual:number = barn.getSheep().length;
        
        assert.strictEqual(expected,actual);

    })

    it("We should add a variety of animals in the barn and the getGoat method should return the number of 2 cows.",()=>{
        let barn = new Barn();

        barn.addCattle(new Goat());barn.addCattle(new Goat());
        barn.addCattle(new Sheep());barn.addCattle(new Goat());
        barn.addCattle(new Sheep());barn.addCattle(new Sheep());
        barn.addCattle(new Cow());barn.addCattle(new Cow());

        let expected:number = 2;
        let actual:number = barn.getCows().length;

        assert.strictEqual(expected,actual);

    })
    
    it("We should add a variety of animals in the barn and the getGoat method should return the number of 5 goats.",()=>{
        let barn = new Barn();
    
        barn.addCattle(new Goat());barn.addCattle(new Goat());
        barn.addCattle(new Sheep());barn.addCattle(new Goat());
        barn.addCattle(new Goat());barn.addCattle(new Goat());
        barn.addCattle(new Sheep());barn.addCattle(new Sheep());
        barn.addCattle(new Cow());barn.addCattle(new Cow());
    
        let expected:number = 5;
        let actual:number = barn.getGoat().length;
        
        assert.strictEqual(expected,actual);
    
    })
})