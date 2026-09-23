const booking = {
    clientName: 'Jon', 
    programName: 'Yoga', 
    paymentVerified: true
}

const bookingJSON = JSON.stringify (booking)

console.log (bookingJSON)
console.log (typeof bookingJSON)

const backToBooking = JSON.parse (bookingJSON)

console.log (backToBooking)
console.log (backToBooking.clientName)