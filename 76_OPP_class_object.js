// class railwayFrom{
//     submit(){
//         alert("Sabmitted")
//     }
//     cancel(){
//         alert("From is cancalled")
//     }
// }

// let prit = new railwayFrom()
// let sant = new railwayFrom()

// prit.submit()
// sant.submit()
// sant.cancel()

// from with take detials
/*
class railwayFrom{
    submit(){
        alert(this.name+": Your from is Sabmitted")
    }
    cancel(){
        alert(this.name+": Your From is cancalled")
    }
    fill(givenName){
        this.name = givenName
    }
}
// create a from for prit
let pritFrom = new railwayFrom()
pritFrom.fill("Prity Sahni") // filling detial for prity

// Create a from for sant
let santFrom = new railwayFrom()
santFrom.fill("Santosh Sahni")

santFrom.submit() //santosh's from submitted
pritFrom.submit() // prity's from submitted
pritFrom.cancel() // prity's from cancel
*/

// upper code with many detials filling
class railwayFrom{
    submit(){
        alert(this.name+": Your from is Sabmitted for Train :"+this.trainNo)
    }
    cancel(){
        alert(this.name+": Your From is cancalled for Train :"+this.trainNo)
    }
    fill(givenName , trainNo){
        this.name = givenName
        this.trainNo = trainNo
    }
}
// create a from for prit
let pritFrom = new railwayFrom()
pritFrom.fill("Prity Sahni" , 161219) // filling detial for prity

// Create a from for sant
let santFrom = new railwayFrom()
let santFrom1 = new railwayFrom()
santFrom.fill("Santosh Sahni" , 191216)
santFrom1.fill("Santosh Sahni" , 124222) // second from for santosh

santFrom.submit() //santosh's from submitted
santFrom1.submit() // santosh from 1 submitted
pritFrom.submit() // prity's from submitted
pritFrom.cancel() // prity's from cancel
santFrom1.cancel() // santosh from 1 cancel