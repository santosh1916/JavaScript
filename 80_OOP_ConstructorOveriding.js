class Employee{
    constructor(name){
        this.name = name
        console.log(`${name} Constructor is here`)
    }
    login(){
        console.log(`Employee has Logged in`)
    }
    logout(){
        console.log(`Employee has Logged Out`)
    }
    requestLeaves(leaves){
        console.log(`Emplolyee has request ${leaves} leaves - approved auto`)
    }
}
//Inherit class
class Programmer extends Employee{
    constructor(name){
        super(name)
        // this.name = name // this is optional becoz this.name already derived in parent class
        console.log(`${name} Newly return Constructor is here`)
    }
    // constructor(...args){ --> if there no constructor in the child class this is create autometically by JavaScript Engin if there are an argument it is also passed
    //     super(...args)
    // }
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffee`)
    }
    // overriding
    requestLeaves(leaves){
        super.requestLeaves(4)
        console.log("one Extra is granted")
        // console.log(`Emplolyee has request ${leaves + 1} leaves (one Extra)`)
    }
}

let santosh = new Programmer("Santosh")
santosh.login();
santosh.requestLeaves(3);