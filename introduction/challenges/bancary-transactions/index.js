const user = {
  name: 'Mariana',
  transactions: [],
  balance: 0,
};

function createTransaction(transaction) {
  user.transactions.push(transaction);

  const transactionType = transaction.type;
  const transactionValue = transaction.value;

  if (transactionType == 'credit') {
    user.balance += transactionValue;
  } else {
    user.balance -= transactionValue;
  }
}

function getHigherTransactionByType(type) {
  let highertransaction = 0;
  for (const transaction of user.transactions) {
    const transactionType = transaction.type;
    const transactionValue = transaction.value;
    if (transactionType == type && transactionValue > highertransaction) {
      highertransaction = transactionValue;
    }
  }
  return highertransaction;
}

function getAverageTransactionValue() {
  let sumTransactions = 0;
  for (const transaction of user.transactions) {
    sumTransactions += transaction.value;
  }
  return sumTransactions / user.transactions.length;
}

function getTransactionsCount() {
  let creditTransactions = 0;
  let debitTransactions = 0;
  for (const transaction of user.transactions) {
    const transactionType = transaction.type;
    if (transactionType == 'credit') {
      creditTransactions++;
    } else {
      debitTransactions++;
    }
  }
  return { credit: creditTransactions, debit: debitTransactions };
}

createTransaction({ type: 'credit', value: 50 });
createTransaction({ type: 'credit', value: 220 });
createTransaction({ type: 'debit', value: 210 });
createTransaction({ type: 'debit', value: 2110 });
createTransaction({ type: 'debit', value: 3510 });
createTransaction({ type: 'credit', value: 520 });
createTransaction({ type: 'debit', value: 2 });
createTransaction({ type: 'credit', value: 620 });
createTransaction({ type: 'credit', value: 26620 });
createTransaction({ type: 'debit', value: 10000 });

const HigherTransactionCredit = getHigherTransactionByType('credit');
const HigherTransactionDebit = getHigherTransactionByType('debit');

const transactionsCount = getTransactionsCount()

const averageTransactions = getAverageTransactionValue();

console.log(user);

console.table(user.transactions)

console.log('Count:', transactionsCount);

console.log('Higher credit: ', HigherTransactionCredit);
console.log('Higher debit: ', HigherTransactionDebit);

console.log('Average:', averageTransactions.toFixed(2));



