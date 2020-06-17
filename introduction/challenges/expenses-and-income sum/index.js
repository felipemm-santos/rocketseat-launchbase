const users = [
  {
    name: 'Salvio',
    incomes: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9],
  },
  {
    name: 'Marcio',
    incomes: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0],
  },
  {
    name: 'Lucia',
    incomes: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9],
  },
];

function sumNumbers(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

function balanceCalc(incomes, expenses) {
  const sumIncomes = sumNumbers(incomes);
  const sumExpenses = sumNumbers(expenses);

  return sumIncomes - sumExpenses;
}

for (const user of users) {
  const balance = balanceCalc(user.incomes, user.expenses);
  const positiveBalance = balance >= 0;
  if (positiveBalance) {
    console.log(`${user.name} posuui saldo POSITIVO de ${balance.toFixed(2)}`);
  } else {
    console.log(`${user.name} posuui saldo NEGATIVO de ${balance.toFixed(2)}`);
  }
}
