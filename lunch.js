/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 * 
 * ************* THOUGHT PROCESS ********************
 * INPUTS:
 * const = function (param1, param2) {}
 * 
 * OUTPUTS:
 * console.log()
 * 
 * PROCESSING:
 * - Hungry or Not Hungry?
 * - hungry is a Boolean
 * - availableTime is a number that represents the minutes
 * - Not Hungry: !Hungry "Go back to work!"
 * - Hungry: 
 *   - < 20 min: "Grab something and eat it in the lab."
 *   - >= 20 min && < 30 min: "Try a place nearby."
 *   - > 30 min: "Reconsider how much time you have."
 */

const whatToDoForLunch = function(hungry, availableTime) {
    if (hungry === false) {
      console.log('Go back to work!');
    } else if (hungry === true && availableTime < 20) {
      console.log('Grab something and eat it in the lab.');
    } else if (hungry === true && availableTime >= 20 && availableTime < 30) {
      console.log('Try a place nearby.');
    } else if (hungry === true && availableTime > 30) {
      console.log('Reconsider how much time you have.');
    }
}







/* CHANGE THIS

const whatToDoForLunch = function(hungry, availableTime) {


  if (hungry && availableTime < 20) {
    console.log("Grab a snack at home.");
  }

  if (hungry && availableTime >= 20 && availableTime < 30) {
    console.log("Take a break and cook a meal.");
  }

  if (hungry && availableTime > 30) {
    console.log("Reconsider how much time you have.");
  }

  if (!hungry) {
    console.log("Take a break later.");
  }
}; */
// fin

/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);



