// do not change these lines

function reset () {
  adults = 0
  children = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.

// 1-
// INPUT: Adults and children entering the softplay
// OUTPUT: How many do we have inside
// 2-
// INPUT: Adults and children leaving the softplay
// OUTPUT: How many are still inside

// Need to write two functions, one for children and adults entering, one for children and adults leaving
// Take in consideration that for entering a child needs to be accompanied with AT LEAST one adult
// Take in consideration that for leaving a child needs to be accompanied with AT LEAST one adult =>
// The number of childs remaining NEEDS TO BE LESS or EQUAL to the adults =>
// The leaving party IS NOT GREATER than the people inside.
// 
const occupancyObj = { adults: 0, children: 0};

function peopleEntering (numAdult, numChild) {
  if (numChild <= numAdult) {
    adults += numAdult;
    children += numChild;
    return true;
  }

  return false;
}

function peopleLeaving(numAdult, numChild) {
  const newAdults = adults - numAdult;
  const newChild = children - numChild;
  if (numAdult !== 0 && numChild <= numAdult && numChild <= children && numAdult <= adults && newAdults >= newChild) {
    adults -= numAdult;
    children -= numChild;
    return true;
  }

  return false;
}

function occupancy() {

  occupancyObj.adults = adults;
  occupancyObj.children = children;

  return occupancyObj;
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: peopleEntering,
  leave: peopleLeaving,
  occupancy: occupancy,
  reset: reset
}
