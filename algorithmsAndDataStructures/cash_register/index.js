// CASH REGISTER
// Design a cash register drawer function checkCashRegister() that accepts
// purchase price as the first argument (price), payment as the second argument
// (cash), and cash-in-drawer (cid) as the third argument.
//
// cid is a 2D array listing available currency.
//
// The checkCashRegister() function should always return an object with a status
// key and a change key.
//
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less
// than the change due, or if you cannot return the exact change.
//
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for
// the key change if it is equal to the change due.
//
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in
// coin and bills, sorted in highest to lowest order, as the value of the change
// key.
//
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

const statusMessage = ['OPEN', 'CLOSED', 'INSUFFICIENT_FUNDS'];
const prices = [
  { name: "PENNY", price: 0.01 , order: 0},
  { name: "NICKEL", price: 0.05, order: 1 },
  { name: "DIME", price: 0.1, order: 2 },
  { name: "QUARTER", price: 0.25, order: 3 },
  { name: "ONE", price: 1, order: 4 },
  { name: "FIVE", price: 5, order: 5 },
  { name: "TEN", price: 10, order: 6 },
  { name: "TWENTY", price: 20, order: 7 },
  { name: "ONE HUNDRED", price: 100, order: 8 }
];
const changeTemplate = [
  ["PENNY", 0],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
];

const checkCashRegister = (price, cash, cid) => {
  // Multiple everything by 100 at first to avoid the errors coming from the floating numbers.
  const priceAdjusted = 100 * price;
  const cashAdjusted = 100 * cash;
  let changeAdjusted = cashAdjusted - priceAdjusted;
  let cidAdjusted = [];
  cid.forEach(item => { 
    cidAdjusted.push([    
                        item[0], 
                        Math.round(item[1] * 100) 
                      ]);
  });
  let priceTableAdjusted = [];
  prices.forEach(object => {
    priceTableAdjusted.push({
                          ...object,
                          price: object.price * 100
                      });           
  });

   const calculateChange = () => {
    const changeTable = [];

    for (let priceIndex = cid.length - 1; 
          priceIndex >= 0; 
          priceIndex--) {
      if (changeAdjusted >= priceTableAdjusted[priceIndex].price) {
        const count = Math.floor(changeAdjusted / priceTableAdjusted[priceIndex].price);
        const changeInCurrentUnit = Math.min(count * priceTableAdjusted[priceIndex].price, cidAdjusted[priceIndex][1]) 

        changeTable.push([
          changeTemplate[priceIndex][0],
          changeInCurrentUnit / 100
        ]);
        changeAdjusted -= changeInCurrentUnit;
      } else {
        changeTable.push([
          changeTemplate[priceIndex][0],
          0
        ]);
      }
    };

    if (changeAdjusted > 0 ) {
      return false;
    };

  // sort the results from the biggest to the smallest
  let changeTableSorted = [];
  const numOfUnits = changeTable.length;

  for(let targetIndex = 0; targetIndex < numOfUnits; targetIndex++) {
    let biggest = -Infinity;
    let biggestIndex = 0;

    for (let index = changeTable.length - 1; index >= 0 ; index--) {
      if (changeTable[index][1] > biggest) {
        biggest = changeTable[index][1];
        biggestIndex = index;
      }
    };
    if ( biggest > 0) {
      changeTableSorted.push(changeTable[biggestIndex]); 
    };
    changeTable.splice(biggestIndex, 1);
  };

    return changeTableSorted;
  }; 

  // -----------------------------
  // Do not use the Adjusted variables (multiplied by 100) after this.
  // 
  const cidMessage = {status: null, change: null};
  const changeTotal = parseFloat((cash - price).toFixed(2));
  let currentCidTotal = 0; 
  cid.forEach(item => {
    currentCidTotal += item[1];
  })
  currentCidTotal = parseFloat(currentCidTotal.toFixed(2));

  if (currentCidTotal < changeTotal) { // INSUFFICIENT FUNDS
  console.log('INSUFFICIENT FUNDS')
    cidMessage.status = statusMessage[2];
    cidMessage.change = [];
  } else if (currentCidTotal === changeTotal) { // CLOSED
  console.log('CLOSED')

    cidMessage.status = statusMessage[1];
    cidMessage.change = cid;
  } else { // OPEN
    console.log('OPEN')
    const changeTable = calculateChange();
    cidMessage.status = changeTable ? statusMessage[0] : statusMessage[2];
    cidMessage.change = changeTable ? changeTable : [];
  }; 

  console.log(cidMessage);
  return cidMessage;
};

module.exports = checkCashRegister;
