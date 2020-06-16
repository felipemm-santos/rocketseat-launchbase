const programmer = {
  name: 'Carlos',
  age: 32,
  technologies: [
    { name: 'C++', speciality: 'Desktop' },
    { name: 'Python', speciality: 'Data Science' },
    { name: 'JavaScript', speciality: 'Web/Mobile' },
  ],
};

console.log(
  `O usuário ${programmer.name} tem ${programmer.age} anos e usa a técnologia ${programmer.technologies[0].name} com especialidade em ${programmer.technologies[0].speciality}.`
);
