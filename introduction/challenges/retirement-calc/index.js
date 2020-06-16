// const name = 'Felipe';
// const gender = 'M';
// const age = 58;
// const contributionTime = 37;

// const agePlusContributionTime = age + contributionTime;

// if (gender == 'F') {
//   var minContributionTime = 30;
//   var minAgePlusContributionTime = 85;
// } else {
//   var minContributionTime = 35;
//   var minAgePlusContributionTime = 95;
// }

// if (
//   contributionTime >= minContributionTime &&
//   agePlusContributionTime >= minAgePlusContributionTime
// ) {
//   console.log(`${name}, você pode se aposentar`);
// } else {
//   console.log(`${name}, você ainda não pode se aposentar`);
// }

// Another way

const name = 'Felipe';
const gender = 'M';
const age = 58;
const contributionTime = 37;

const retirementCalc = age + contributionTime;

const minContributionTimeMan = 35;
const minContributionTimeWoman = 30;

const minRetirementCalcMan = 95;
const minRetirementCalcWoman = 85;

const manCanRitire =
  gender == 'M' &&
  contributionTime >= minContributionTimeMan &&
  retirementCalc >= minRetirementCalcMan;

const womanCanRitire =
  gender == 'F' &&
  contributionTime >= minContributionTimeMan &&
  retirementCalc >= minRetirementCalcWoman;

if (manCanRitire || womanCanRitire) {
  console.log(`${name}, você pode se aposentar`);
} else {
  console.log(`${name}, você ainda não pode se aposentar`);
}
