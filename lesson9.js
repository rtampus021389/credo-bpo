const client = { name: 'Jon', ridingLevel: 'Beginner', age: 25 };

const jsonString = JSON.stringify(client);
console.log(jsonString);
console.log(typeof jsonString);

const backToObject = JSON.parse(jsonString);
console.log(backToObject.name);
console.log(typeof backToObject);

console.log(backToObject)