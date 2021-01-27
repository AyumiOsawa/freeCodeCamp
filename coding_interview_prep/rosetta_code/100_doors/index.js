// 100 DOORS
//
// There are 100 doors in a row that are all initially closed. You make 100
// passes by the doors. The first time through, visit every door and 'toggle'
// the door (if the door is closed, open it; if it is open, close it). The
// second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and
// toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...),
// etc., until you only visit the 100th door.
//
// Implement a function to determine the state of the doors after the last
// pass. Return the final result in an array, with only the door number included
// in the array if it is open.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/100-doors

function getFinalOpenedDoors(numDoors) {
    const doors = {}
    let currentDoor = 1;
    while(currentDoor <= numDoors) {
        let numOfDivisibles = 1;
        let divisible = 2;
        while (currentDoor >= divisible) {
            let divisionResult = Math.floor(currentDoor / divisible);
            if(currentDoor % divisible === 0) {
                numOfDivisibles++;
            }
            if(Object.keys(doors).includes(divisionResult)) {
                numOfDivisibles += doors[divisionResult];
                break;
            }
            divisible++;
        }
        doors[currentDoor] = numOfDivisibles;
        currentDoor++;
    }

    let openDoors = [];
    currentDoor = 1;
    while (currentDoor <= numDoors) {
        if(doors[currentDoor] % 2 !== 0) {
            openDoors.push(currentDoor);
        }
        currentDoor++;
    }
    return openDoors;
};

module.exports = getFinalOpenedDoors;


// memo:
// - initial state: all CLOSED
// - visit odd number: OPEN
// - visit even number: CLOSED
// - stop: being devisible by t (t < 100)
// - whether door #n is open or not: whether n has odd number of divisible or not
//
// -> Get number n and count how many divisibles n has
// -> if the num of divisible is odd, thee door is OPEN
//
// ! all the primary num is CLOSED (divisible by 1 and itself)
