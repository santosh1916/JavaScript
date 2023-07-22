const f =()=>{
    try{
        let a = 0;
        // console.log(program)
        console.log("program run successfully")
        return
    }
    catch(error){
        console.log("this is error")
        console.log(p)
    }
    finally{
        console.log("I am finnaly run") // always run this line becoz of finally
        // close the file
        // exit the loop
        // write the log file
    }
}
f()
console.log("end here")