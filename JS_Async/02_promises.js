const promiseOne = new Promise(function(resolve, reject){

     // db calls , file read write
    setTimeout(()=>{
        console.log("Async task is complete")
        resolve()
    }, 2000)


})

const promiseTwo = new Promise(function(resolve, reject){

    //let data = null
    let data = {username: "Chahat", password: "12345"}
    if(data){
        console.log("")
        resolve({data})
    }
    else{
        reject("Error: Something went wrong")

    }
})


promiseOne.then(function(){
    console.log("promise is resolved")


})

.catch(function(){
    console.log("promise is rejected")


})

.finally(function(){
    console.log("Promise is either rejected or resolved")

})


promiseTwo.then()(function(data){
      console.log(data)

}).catch(function(error){
    console.log(error)

})

async function consumePromise(){
    const response = await promiseTwo
    console.log("response using asyc await", response)

}

consumePromise()

const data = fetch("https://jsonplaceholder.typicode.com/users")
console.log("data is fetched from this endpoint api", data)

