function checkPromoCode () {
  return new Promise ((resolve, reject) => {
    const promoExpired = true;

    if (promoExpired) {
      setTimeout(() => {
        reject ("Promo code expired");
      }, 1500);
    }
    else {
      setTimeout(() => {
        resolve ("Promo code available");
      }, 1500);
    }
  });
}

async function applyPromoCode () {
  try {
    console.log('Checking promo code...');
    const promo = await checkPromoCode();
    console.log('Success:', promo);
  } catch (error) {
    console.log('Error: ', error);
  }
}

applyPromoCode ()