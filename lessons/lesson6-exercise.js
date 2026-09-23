const bookings = [
    {clientName: 'Jon', sessionDate: '2026-01-01'},
    {clientName: 'John', sessionDate: '2026-09-23'},
    {clientName: 'Jan', sessionDate: '2026-09-31'}
]

for (const booking of bookings) {
    console.log (`${booking.clientName} is booked for ${booking.sessionDate}`);
}

const justDates = bookings.map ((client) => client.sessionDate);

console.log (justDates)