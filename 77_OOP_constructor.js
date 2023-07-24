//  contructor
/*
class railwayFrom{
    constructor(givenName , trainNo){
        this.name = givenName
        this.trainNo = trainNo
        console.log("CONSTRUCTOR CALLED... " + trainNo)
    }
    submit(){
        alert(this.name+": Your from is Sabmitted for Train :"+this.trainNo)
    }
    cancel(){
        alert(this.name+": Your From is cancalled for Train :"+this.trainNo)
    }
}
// create a from for prit
let pritFrom = new railwayFrom("Prity Sahni" , 161219)
//No need to fill by explictly

// Create a from for sant
let santFrom = new railwayFrom("Santosh Sahni" , 124222)
let santFrom1 = new railwayFrom()

santFrom.submit() //santosh's from submitted
pritFrom.cancel() // prity's from submitted
santFrom1.submit()
*/
//  contructor with other method
class railWayFrom{
    constructor(Fname,trainNo,address){
        this.name = Fname
        this.trainNo = trainNo
        this.address = address
    }
    submit(){
        alert(`${this.name} : your from is submitted for ${this.trainNo}`)
    }
    cancel(){
        alert(`${this.name} : your from is cancel for the train ${this.trainNo}`)
        this.trainNo = null
        this.name = null
        this.address = null
    }
    preview(){
        alert(`Name of passenger: ${this.name} \n Name of Train: ${this.trainNo} \n Address: ${this.address}`)
    }

}
let santoshFrom = new railWayFrom("Santosh" , 191216 , "City: Muzaffarpur, PS: Sakra, Bihar(843119)")

santoshFrom.submit();
santoshFrom.preview();
// santoshFrom.cancel();
// santoshFrom.preview();
