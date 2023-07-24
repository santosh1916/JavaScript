class bird{
    constructor(name){
        this._name = name
    }
    fly(){
        alert(`The ${this._name} can fly ` )
    }
    get name(){
        return this._name
    }
    set name(newNAme){
        this._name = newNAme
    }
}
class Animal extends bird{
    eatCarrot(){
        console.log(`${this._name} eating carrot`)
    }
}
let rabit = new Animal("khargos")
let bird1 = new bird("pigeon")
bird1.fly();
console.log(bird1.name) // pigeon
bird1.name = "Hen"
console.log(bird1.name) // Hen

let a = 65

console.log(bird1 instanceof bird ) // return True
console.log(a instanceof bird ) // return False

rabit.eatCarrot(); // khargos eating carrot
console.log(rabit instanceof bird) // return True