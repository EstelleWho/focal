//Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice.

//let random = Math.floor(Math.random() * 6) + 1;
//console.log(random);


const numDice = Number(process.argv[2]);

const rolls = [];
for (let i = 0; i < numDice; i++) {
  rolls.push(Math.floor(Math.random() * 6) + 1);
}

console.log(`Rolled ${numDice} dice: ${rolls.join(', ')}`);
