/*
let category="Action"

switch(category){
    case "Action":
        console.log("this is action movie...")
        break
    case "Comedy":
        console.log("this is comedy movie...")
        break
    case "Drama":
        console.log("this is drama movie...")
        break
    
    default:
        console.log("No category is selected")   
        
        

}
        */


/*let i = 0;

for(let i= 2; i<0 ; i++){
    console.log("this is inside block console",i)
}

console.log("this is outside block console",i)
*/


let branch=["CSE", "IT", "ECE"]

branch.newBranch="AIML"

for(const b of branch){
    console.log(b);  // it iterates over objects values

}
for(const b in branch){
    console.log(b); // it iterates over object keys
}