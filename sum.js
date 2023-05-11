/*
const args = process.argv;
console.log(args.slice(2));
*/

//Adding the numbers

const args = process.argv.slice(2);
let sum = 0;

args.forEach(n => sum += Number(n));

console.log(sum);