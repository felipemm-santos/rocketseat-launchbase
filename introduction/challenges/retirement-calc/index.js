const name = 'Felipe';
const gender = 'M';
const age = 58;
const contributionTime = 37;

const agePlusContributionTime = age + contributionTime;

if (gender == 'F') {
  var minContributionTime = 30;
  var minAgePlusContributionTime = 85;
} else {
  var minContributionTime = 35;
  var minAgePlusContributionTime = 95;
}

if (
  contributionTime >= minContributionTime &&
  agePlusContributionTime >= minAgePlusContributionTime
) {
  console.log(`${name}, você pode se aposentar`);
} else {
  console.log(`${name}, você ainda não pode se aposentar`);
}
