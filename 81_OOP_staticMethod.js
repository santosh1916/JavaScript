class Animal{
    constructor(name){
        this.name = Animal.capitalize(name)
    }
    walk(){
        alert(`${this.name} is a Animal and that is walking`)
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
}

let animal1 = new Animal("monkey")
animal1.walk();