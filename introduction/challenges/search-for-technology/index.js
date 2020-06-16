const users = [
  { name: 'Carlos', technologies: ['HTML', 'CSS'] },
  { name: 'Jasmine', technologies: ['JavaScript', 'CSS'] },
  { name: 'Tuane', technologies: ['HTML', 'Node.js'] },
];

function checkUserUseCSS(user) {
  const userTechnologies = user.technologies;

  return userTechnologies.find((technology) => technology == 'CSS');
}

for (let index = 0; index < users.length; index++) {
  const user = users[index];
  const userWorkWithCSS = checkUserUseCSS(user);

  if (userWorkWithCSS) {
    console.log(`O usuário ${user.name} trabalha com CSS`);
  }
}
