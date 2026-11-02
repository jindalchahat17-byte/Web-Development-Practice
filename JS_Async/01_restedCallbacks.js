
function placeOrder(){
    setTimeout(()=>{
        console.log("1.Order is placed ")
        return Callback()
    },1000)

}
function makePayment(){
    setTimeout(()=>{
        console.log("2. Payment is done ")
        return Callback()
    },1000)
}

function orderConfirm(){
    setTimeout(()=>{
        console.log("3. Order is confirmed ")
        return Callback()
    },1000)
}

function assignDeliveryPatner(){
    setTimeout(()=>{
        console.log("4. Delivery patner is assigned ")
        return Callback()
    },1000)
}      

placeOrder(function()){
    makePayment(function()){
        orderConfirm(function()){
            assignDeliveryPatner(
                console.log("5. Order is delivered")
            )
        }
    }
}