


// function addNumbers(num1, num2){
 //   return num1 + num2;


// }

// addExpenses(20, 30)


const addNumbers=(...nums)=>{
    console.log(nums)
    let total = 0;

for(let total =0; i<nums.length; i++){
    total+= num
}

    for(const num of nums){
        total+= num
    }
    return total



}

const result = addExpenses(20 , 30)

console.log(result)


// CALLBACK FUNCTIONS 

function calc(num1 , num2, callback){
    return callback(num1 , num2);



}

function add(num1 , num2){
    return num1 + num2;
}

console.log(calc(2, 4, add))

const numbers = [1 , 2, 3, 4, 5, 6]

const multiples = numbers.map((num)=> num*2)
console.log("multiples", multiples)
console.log(numbers)

const oddNumbers = numbers.filter((num)=>num %2 != 0 )
console.log(oddNumbers)


const sumOfNumbers = numbers.reduce((acc , num)=> acc + num)
console.log(sumOfNumbers)


const products = [
       { name: "Milk", price: 60, inStock: true},
       { name: "Bread", price: 40, inStock: false},
       { name: "Rice", price: 200, inStock: true},
       { name: "Cheese", price: 150, inStock: true}

];



const doublePrice = products.map((product) => product.price * 2);
console.log(doublePrice)



const availableProducts = products.filter((product) => product.inStock === true);
console.log(availableProducts)


const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice)




