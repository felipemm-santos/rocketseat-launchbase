const users = [
  { name: 'Carlos', technologies: ['HTML', 'CSS'] },
  { name: 'Jasmine', technologies: ['JavaScript', 'CSS'] },
  { name: 'Tuane', technologies: ['HTML', 'Node.js'] },
];

for (let index = 0; index < users.length; index++) {
  const user = users[index];
  console.log(`${user.name} trabalha com ${user.technologies}`);
}
