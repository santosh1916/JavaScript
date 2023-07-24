class Employee{
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

// inherit
/*
class Programmer extends Employee{
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffee`)
    }
    // overriding
    requestLeaves(leaves){
        console.log(`Emplolyee has request ${leaves + 1} leaves (one Extra)`)
    }
}

// let santosh = new Employee()
// santosh.login();
// santosh.requestLeaves(3); 
let prity = new Programmer()
prity.login();
prity.requestLeaves(3); 

*/
class Programmer extends Employee{
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

let santosh = new Programmer()
santosh.login();
santosh.requestLeaves(3);