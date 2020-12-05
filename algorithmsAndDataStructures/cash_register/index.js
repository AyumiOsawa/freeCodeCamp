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

const statusMessage = ['OPEN', 'CLOESED', 'INSUFFICIENT_FUNDS'];
const prices = [
  { name: "PENNY", price: 0.01 },
  { name: "NICKEL", price: 0.05 },
  { name: "DIME", price: 0.1 },
  { name: "QUARTER", price: 0.25 },
  { name: "ONE", price: 1 },
  { name: "FIVE", price: 5 },
  { name: "TEN", price: 10 },
  { name: "TWENTY", price: 20 },
  { name: "ONE HUNDRED", price: 100 }
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
   // count how much each coins/bucks are needed for  change
   const calculateChange = (change) => {
    console.log('at the beginning, change:',change);
    const changeTable = [];

    for (let priceIndex = cid.length - 1; 
          priceIndex > 0 && change > 0; 
          priceIndex--) {
            // console.log('priceIndex', priceIndex)
      // const count = Math.floor(change / prices[priceIndex].price);
      // console.log('curreent change:',change);
      // if (count > 0 && count <= cid[priceIndex][1]) {
      //   changeTable.push([prices[priceIndex].name, 
      //                   prices[priceIndex].price * count]);
      //   change -= prices[priceIndex].price * count;
      // }
      if (change >= cid[priceIndex][1]) {
        console.log('---------')
        console.log('check cid coin', cid[priceIndex][0])
        const countMax = Math.floor(change / prices[priceIndex].price);
        console.log('countMax:', countMax)
        const countCid = Math.floor(cid[priceIndex][1] /  prices[priceIndex].price)
        console.log('countCid',countCid)
        const countChange = Math.min(countMax, countCid);
        console.log('countChange',countChange)
        changeTable.push([prices[priceIndex].name, 
                        prices[priceIndex].price * countChange]);
        change -= prices[priceIndex].price * countChange;
        console.log('change', change)
      };


    };
    if (change > 0 ) {
      return false;
    };
    console.log('change needed to be paid:', changeTable)
    return changeTable;
  }; 

  // // calculate the actual number of coins/bucks that can be returned out of the cash register 
  // const getCidAfter = (changeTotal, changeTable) => {
  //   let currentChange = changeTotal;
  //   const cidAfterTable = changeTemplate;

  //   const carry = (currentChange, startIndex = changeTemplate.length - 1) => {
  //     for (let index = startIndex; index > 0 
  //          && currentChange > 0; index--) {
  //       if (cidTable[index][1] > changeTable[index][1]) {
  //         cidAfterTable[index][1] = cidTable[index][1] 
  //                                   - changeTable[index][1];
  //       } else if (cidTable[index][1] < changeTable[index][1]) {
  //         carry(currentChange, index);
  //       };
  //       // if cidTable[index][1] === changeTable[index][1], the default value will be used.
  //     };
  //   };

  //   carry(currentChange);
  //   return cidAfterTable;
  // };

// --------------------------------------

  const cidMessage = {status: null, change: null};
  const changeTotal = cash - price;
  console.log('changeTotal:',changeTotal)
  // Calculate total amount in cash register

  // let currentCidTotal = cid.reduce((accumulator, currentValue, index) => {
  //   accumulator = Array.isArray(accumulator) 
  //                       ? accumulator[1] 
  //                       : accumulator;

  //   return accumulator + currentValue[1];
  // }).toFixed(2);'
  let currentCidTotal = 0; 
  cid.forEach(item => {
    currentCidTotal += item[1];
  })
  currentCidTotal = currentCidTotal.toFixed(2);
  console.log('cid total:',currentCidTotal);

  // Return the object based on the amount of cid
  if (currentCidTotal < changeTotal) {
    cidMessage.status = statusMessage[2];
    cidMessage.change = [];
    console.log('cidMessage', cidMessage)
  } else if (currentCidTotal === changeTotal) {
    cidMessage.status = statusMessage[1];
    cidMessage.change = cid;
    console.log('cidMessage', cidMessage)
  } else if (calculateChange(changeTotal)) {
    const changeTable = calculateChange(changeTotal);
    // const cidAfterTable = getCidAfter(changeTotal, changeTable);
    cidMessage.status = statusMessage[0];
    cidMessage.change = changeTable;
  } else {
    cidMessage.status = statusMessage[2];
    cidMessage.change = [];
  }

  // console.log(cidMessage);
  return cidMessage;
}

module.exports = checkCashRegister;
