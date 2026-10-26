// JAVASCRIPT CLASS TEST 
 
SECTION - A

ANS-1 : option B (object , number , object)

ANS-2 : option B (205 , 200 , NaN)

ANS-3 : option D

ANS-4 : option B

ANS-5 : option B

ANS-6 : Option C

ANS-7 : option B [collects the arguments into an array]

ANS-8 : option B

SECTION - B

ANS-9 : 52 , because + operator concatenates the String
3 , because - operator first converts 5 into a number then subtracts it 
true is 1 in boolean so 1+ 2 = 3
True , because string is non empty

ANS-10 : 

ANS-11 : 300 , printed the calculated price
       undefined , because it has no return statement 


ANS-12 :    ["Milk" , "eggs", "rice" , "oil"]
products length = 4
bread was replaced by eggs
and oil was added at the end using PushManager.

ANS-13 : Aman , 30000
here this refers to the employee object.

ANS-14 : first output - 1 (since whole array is counted as one )
second output - 4 (since there are four elements )

difference b/w these two function calls is that it (values) returns whole array as one and (...values) expands and then returns the array.


ANS-15 : here , the error is that the message is not defined 
which is why the original code fails .

the correct code can be ,

let message;

if(true) {
    let message = "Order placed successfully";
}
console.log(message);


ANS-16 : the logical error here is that i<= prices.length
which causes the loop to run for i = 0, 1, 2, 3
but there is no element at index 3 
it should only run for 0 ,1 , 2
which is why original code produces an error 

correct code can be ,

function calculateCartTotal(...prices) {
    let total = 0;

    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }

    return total;
}

console.log(calculateCartTotal(100, 200, 300));

And the output will be = 600


ANS-17 : The expected username may not be printed because output is generally undefined without a matching this.username

The corrected code can be -

const user = {
    userName: "Rahul",

    showName() {
        console.log(this.userName);
    }
};

user.showName();

And the output will be Rahul .

One situation where using an arrow function is appropriate when we want to preserve our surrounding this . 


ANS-18 : empty string
5 - -2
5 + 2 
= 7

console.log(null + 1) = 1 ; since in number addition null becomes 0 so 0 +1 = 1


ANS-19 :

