

// create an object which has these points :

//- customerName , movieName , ticketPrice , and quantity
// - A nested customer object with email and city 
// - A seats array containing at least three seat numbers
// - A method calculateTotalAmount()


// Execute these :

// 1. Print the movie name using dot notation.
// 2. Read the customer's city using nested property access.
// 3. Change the ticket price and add a booking status property.
// 4. Print all the object keys using Object.keys().
// 5. Destructure movie name and quantity.
// 6. Calculate and print the total booking amount.



const booking = {
    customerName: "Chahat Jindal",
    movieName: "Avengers: Endgame",
    ticketPrice: 200,
    quantity: 3,

    // Nested customer object
    customer: {
        email: "chahat@gmail.com",
        city: "Kanpur"
    },

    // Seats array
    seats: ["A1", "A2", "A3"],

    // Method to calculate total amount
    calculateTotalAmount: function () {
        return this.ticketPrice * this.quantity;
    }
};

// 1. Print movie name using dot notation
console.log("Movie Name:", booking.movieName);

// 2. Read customer's city using nested property access
console.log("Customer City:", booking.customer.city);

// 3. Change ticket price and add booking status
booking.ticketPrice = 250;
booking.bookingStatus = "Confirmed";

console.log("Updated Ticket Price:", booking.ticketPrice);
console.log("Booking Status:", booking.bookingStatus);

// 4. Print all object keys
console.log("Object Keys:", Object.keys(booking));

// 5. Destructure movie name and quantity
const { movieName, quantity } = booking;

console.log("Destructured Movie Name:", movieName);
console.log("Destructured Quantity:", quantity);

// 6. Calculate and print total booking amount
console.log("Total Booking Amount:", booking.calculateTotalAmount());
