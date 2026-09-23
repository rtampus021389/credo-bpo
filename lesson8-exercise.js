const booking = {
    clientName: 'Jon',
    programName: 'Yoga',
    sessionDate: '09-21-2026',
    paymentVerified: true
}

const { clientName, programName, sessionDate, paymentVerified } = booking;

console.log(`${clientName} booked ${programName} on ${sessionDate}. Payment verified: ${paymentVerified}`);