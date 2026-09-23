const clients = [
  { name: 'Jon', ridingLevel: 'Beginner' },
  { name: 'Ana', ridingLevel: 'Intermediate' },
  { name: 'Miguel', ridingLevel: 'Advanced' }
];

for (const client of clients) {
  console.log(client.name);
}

// Using Map

const names = clients.map((client) => client.name);
console.log(names);