class Animal{
    constructor(name,color){
        this.name= name;
        this.color = color

    }
    run(){
        console.log(this.name + " is runnning")
    }
    shout(){
        console.log(this.name+ " is Shouting")
    }
}

/*
class Monkey{  //this method is very complex for large amount of change
    constructor(name,color){
        this.name= name;
        this.color = color

    }
    run(){
        console.log(this.name + " is runnning")
    }
    shout(){
        console.log(this.name+ " is Shouting")
    }
    eatBanana(){
        console.log(this.name+ " is eating")
    }
}

let ani = new Animal("brono" , "white")
let m = new Monkey("chimpu", "orange")

ani.shout();
m.eatBanana();
*/

// Inherit from Animal
class Monkey extends Animal {
    eatBanana(){
        console.log(this.name+ " is eating Banana")
    }
    hide(){
        console.log(`${this.name} is hiding`)
    }
}

let ani = new Animal("brono" , "white")
let m = new Monkey("chimpu", "orange")

ani.shout();
m.eatBanana();
m.hide();
// ani.hide(); //throw an Error
