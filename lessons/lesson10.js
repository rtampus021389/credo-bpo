function getClientName () {
  return new Promise ((resolve, reject) => {
    const somethingWentWrong = true;

    if (somethingWentWrong) {
      setTimeout(() => {
        reject ("John");
      }, 2000);
    }
    else {
      setTimeout(() => {
        resolve ("John");
      }, 2000);
    }
  });
}

async function showClientName () {
  try {
    console.log('Fetching client...');
    const name = await getClientName();
    console.log('Success:', name);
  } catch (error) {
    console.log('Failed:', error);
  }
}

showClientName ()