const clientName = 'Jon';
const sessionCount = 3;
const pricePerSession = 500;

const message = `${clientName} has booked ${sessionCount} sessions, totaling ₱${sessionCount * pricePerSession}.`;

console.log(message);

const waiverText = `
By signing below, I confirm that:
- I have read and understood the risks of horseback riding.
- The medical information provided is accurate.
`;

console.log(waiverText);