const ridingLevel = 'Beginner';

if (ridingLevel === 'Beginner') {
  console.log('Assign to the beginner group.');
} else if (ridingLevel === 'Intermediate') {
  console.log('Assign to the intermediate group.');
} else {
  console.log('Assign to the advanced group.');
}

const promoExpiry = '2026-01-01';
const today = '2026-09-23';

if (today > promoExpiry) {
  console.log('This promo code has expired.');
} else {
  console.log('This promo code is still valid.');
}