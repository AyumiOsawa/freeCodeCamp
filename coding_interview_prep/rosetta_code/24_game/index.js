// 24 GAME
//
// The 24 Game tests a person's mental arithmetic.
//
// The aim of the game is to arrange four numbers in a way that when evaluated,
// the result is 24
//
// Implement a function that takes a string of four digits as its argument,
// with each digit from 1 to 9 (inclusive) with repetitions allowed, and
// returns an arithmetic expression that evaluates to the number 24. If no such
// solution exists, return "no solution exists".
//
// Rules:
// - Only the following operators/functions are allowed: multiplication,
//   division, addition, subtraction.
// - Division should use floating point or rational arithmetic, etc, to
//   preserve remainders.
// - Forming multiple digit numbers from the supplied digits is disallowed. (So
//   an answer of 12+12 when given 1, 2, 2, and 1 is wrong).
// - The order of the digits when given does not have to be preserved.
//
// Example input;	Example output
// solve24("4878");	(7-8/8)*4
// solve24("1234");	3*1*4*2
// solve24("6789");	(6*8)/(9-7)
// solve24("1127");	(1+7)*(2+1)
//
// https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/24-game

function solve24 (numStr) {
  let inputArr = numStr.split('');
  inputArr = inputArr.map(numStr => parseInt(numStr, 10));

  // =============================================================
  // STEP 1:  Take an array of numbers and return the permunatation
  const generateArrayPermutation = (remainingNum) => {
    let permutations = [];
    const permutate = (remainingNum, arrayToAddTo = []) => {
      if (remainingNum.length === 0) {
        permutations.push(arrayToAddTo);
        return;
      }
      let updatedArrays = [];
      for (let i = 0; i < remainingNum.length; i++) {
        let updatedArray = [...arrayToAddTo];
        updatedArray.push(remainingNum[i]);
        let updatedRemainings = [...remainingNum];
        updatedRemainings.splice(i, 1);
        let newArr = {
                        remaining : updatedRemainings,
                        array     : updatedArray
                     };
        updatedArrays.push(newArr);
      }
      updatedArrays.forEach(arrObj => {
        return permutate(arrObj.remaining, arrObj.array);
      });
    };

    permutate(remainingNum);
    return permutations;
  };
  console.log('inputArr',inputArr);
  const permInputNums = generateArrayPermutation(inputArr);
  console.log('permInputNums',permInputNums);

  // =====================================================
  // STEP 2: Take ONE array of numbers and generate formulas (numbers and
  // operators) with all combination of operands.
  const generateFormula = (inputArr) => {
    const operands = ['+', '-', '*', '/'];
    let formulaCollection = [];
    const addOperand = (numArray, formula) => {
      if (numArray.length === 0) {
        formulaCollection.push(formula);
        return;
      }
      let updatedNumArray = [...numArray];
      if (formula.length === 0) {
        formula.push(numArray[0]);
        updatedNumArray.splice(0,1);
      }
      let num1 = updatedNumArray[0];
      updatedNumArray.splice(0,1);

      let updatedFormula = [];
      operands.forEach(operand => {
        switch (operand) {
          case '+':
            updatedFormula = formula.concat(['+', num1]);
            break;
          case '*':
            updatedFormula = formula.concat(['*', num1]);
            break;
          case '-':
            updatedFormula = formula.concat(['-', num1]);
            break;
          case '/':
            updatedFormula = formula.concat(['/', num1]);
            break;
          default:
            break;
        }
          return addOperand(updatedNumArray, updatedFormula);
      });
      return formula;
    };

    addOperand(inputArr, []);
    return formulaCollection;
  }
  const exampleFormulas = generateFormula(permInputNums[0]);
  console.log('generateFormula example',exampleFormulas);


  // =====================================================
  // STEP 3: Take ONE formula and calculate it in ALL calculation orders

  // Generate all the orders of calculation of the formula
  const generateCalcOrder = (inputArr) => {
    const numOfCalcs = inputArr.length - 1;
    let calcArr = [];
    for (let i = 0; i < numOfCalcs; i ++) {
      calcArr.push(i);
    }
    return generateArrayPermutation(calcArr);
  };
  const permCalcOrder = generateCalcOrder(inputArr);
  console.log('permCalcOrder',permCalcOrder);

  // Take ONE formula and calculate it in ALL orders
  const calculateFormula = (formulaArr, calcOrders) => {
    const performArithmetics = (num1, num2, operandStr) => {
      // console.log('num1',num1);
      // console.log('num2',num2);
      // console.log('operandStr',operandStr);
      let result;
      switch (operandStr) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          break;
      }
      return result;
    };

    let workingFormulaArr;
    for (let calcOrdersIndex = 0;
         calcOrdersIndex < calcOrders.length;
         calcOrdersIndex++) {
      // Reset the working formula before checkcing a new order
      workingFormulaArr = [...formulaArr];
      calcOrders[calcOrdersIndex].forEach((operatingPair, index) => {
        // An update on the index of calculating pair is needed, as the working
        // formula gets updated (shortened) at the end of each loop cycle.
        let calcPair = Math.max(operatingPair - index, 0);
        // calculate the pair and update the worknig formula
        let num1 = workingFormulaArr[calcPair * 2];
        let num2 = workingFormulaArr[calcPair * 2 + 2];
        let operand = workingFormulaArr[calcPair * 2 + 1];
        let newNum = performArithmetics(num1, num2, operand);
        workingFormulaArr.splice(calcPair * 2, 3, newNum);
      })
      if (workingFormulaArr.length === 1 && workingFormulaArr[0] === 24) {
        return calcOrders[calcOrdersIndex];
      }
    }
    // when the formula doesn't return 24 in any order
    return false;
  };
  // console.log('any returns 24?', calculateFormula(exampleFormulas[30], permCalcOrder));


  // =====================================================
  // STEP 4: Generate ALL formulas, and calculate it in ALL calculation orders.
  const calcAllNumInAllOrder = (permInputNums, permCalcOrder) => {
    // go through all the permuted numbers and generate formulas
    let calcRefsult = false;
    for (let permNumsIndex = 0;
         permNumsIndex < permInputNums.length;
         permNumsIndex++) {
      const formulas = generateFormula(permInputNums[permNumsIndex]);

      for (let formulasIndex = 0;
           formulasIndex < formulas.length;
           formulasIndex++) {
        calcRefsult = calculateFormula(formulas[formulasIndex], permCalcOrder);
        if (calcRefsult) {
          return [formulas[formulasIndex], calcRefsult];
        }
      }
    }
    // when no formula yields 24 in any order
    return false;
  };
  const makes24 = calcAllNumInAllOrder(permInputNums, permCalcOrder);
  console.log('makes24?', makes24)

  // =====================================================
  //Step 5: Add () in the appropriate positions based on the input array.
  const constructFormulaStr = (calculationResultObj) => {
    const [formula, order] = calculationResultObj;
    console.log(' inside const form formula',formula);
    console.log('inside const form order',order);


    // TODO: check the calculation order and add () to appropriate places
    const checkTheFollowingOperandPerecedence = (formula, orderIndex, orderArray) => {
      const numOfOperands = orderArray.length;
      const operands = {};
      const isOperandWeak = {};
      for (let operandIndex = 0;
           operandIndex < numOfOperands;
           operandIndex++) {
        operands[operandIndex] = formula[operandIndex * 2 + 1];
        isOperandWeak[operandIndex] = operands[operandIndex] === '+' ||
                                      operands[operandIndex] === '-';
      }
      // get the operands that are not yet calculated
      const followingOperands = [...orderArray];
      followingOperands.splice(0, orderIndex + 1);
      console.log('orderIndex',orderIndex);
      console.log('followingOperands',followingOperands);

      const isWeak = (operand) => {
        return isOperandWeak[operand];
      };

      // Check if the pair needs parenthesis.
      // For the operands that have not been calculated:
      // CASE 1: all have the same strength (weak-weak, strong-strong) as current pair's operand has
      // CASE 2: contains at least one operand that is stronger than the current one
    }

    let needParentheses = [];
    order.forEach((calcPair, calcPairIndex, calcOrder) => {
      checkTheFollowingOperandPerecedence(formula, calcPairIndex, calcOrder);
      // switch (calcPair) {
      //   case '0':
      //      // either one of, or both of operand2 and operand 3 is/are * or /
      //     if (!isOperand2Weak || !isOperand3Weak) {
      //       formula.splice(0, 0, '(');
      //       formula.splice(4, 0, ')');
      //     }
      //     break;
      //   case '1':
      //
      //     break;
      //   case '2':
      //
      //     break;
      //   default:
      //
      // }
    });

    // let formulaStr = ''
    // if (isOperand2Weak && !isOperand3Weak) {
    //   formula.splice(0, 0, '(');
    //   formula.splice(-2, 0, ')');
    // } else if (isOperand1Weak && !isOperand2Weak) {
    //   formula.splice(0, 0, '(');
    //   formula.splice(4, 0, ')');
    // }

    // return formula.reduce((accum, currentVal) => accum+currentVal);
  };
  constructFormulaStr(makes24);
  // let formulaStcr;
  // for (let i = 0; i < permInputNums.length; i++) {
  //   let sumAndFormula = generateFormula(permInputNums[i]);
  //   const resultObj24 = sumAndFormula.find(calculationResultObj => {
  //     return calculationResultObj.sum === 24;
  //   });
  //
  //   if (resultObj24) {
  //     formulaStr = constructFormulaStr(resultObj24);
  //     break;
  //   };
  // }
  //
  // return typeof formulaStr === 'undefined' ?
  //        'no solution exists' :
  //        formulaStr;
  if (!makes24) {
    return 'no solution exists';
  }
};

console.log(solve24('6789'));

// module.exports = solve24;
//
//
// memo:
// - use 3 operators to apply to 4 positive numbers
//
// - look up backtracking
// - write a function that permutate the 4 input numbers.
// - write a function that permutate binary tree for 4 leaf nodes?
// - write a function that calculate all the possible combination of oprands on one fixed order of numbers.
// - write a function that generate an answer.
