function whatIsInAName(collection, source) {

  /* 1) get the keys in the source (as an array) */
  const keys = Object.keys(source);

  /* 2) for each key in the keys array, 
  (i) check if the same key exist in the objects in collection and 
  (ii) check if the value of the key is the same in both collection and in source.
  If both (i) and (ii) are true, keep the object.
  */

  let candidateObjs = collection.slice();

  keys.forEach(key => {
    candidateObjs = candidateObjs.filter(obj =>
    obj.hasOwnProperty(key) && (obj[key] === source[key])
    );
  })

  return candidateObjs;
}

/* printing on HTML */

const judge = (myOutput, caseNo) => {
  let myOutputIdName = "#correct" + String(caseNo);
  let expectedIdName = "#expected" + String(caseNo);
  let expected = document.querySelector(expectedIdName).textContent;
  // clean the white spaces and compare the expected answer and mine
 
  if (myOutput.replace(/\s/g, "") === expected.replace(/\s/g, "")) {
    document.querySelector(myOutputIdName).textContent = "○";
  } else {
    document.querySelector(myOutputIdName).textContent = "×";
  }
}

/* Case 1 */
const output1 = document.querySelector("#result1");
output1.textContent = JSON.stringify(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
judge(output1.textContent, 1);

/* Case 2 */
const output2 = document.querySelector("#result2");
output2.textContent =  JSON.stringify(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
judge(output2.textContent, 2);

/* Case 3 */
const output3 = document.querySelector("#result3");
output3.textContent = JSON.stringify(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
judge(output3.textContent, 3);

/* Case 4 */
const output4 = document.querySelector("#result4");
output4.textContent = JSON.stringify(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
judge(output4.textContent, 4);

/* Case 5 */
const output5 = document.querySelector("#result5");
output5.textContent = JSON.stringify(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));
judge(output5.textContent, 5);

/* Case 6 */
const output6 = document.querySelector("#result6");
output6.textContent = JSON.stringify(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));
judge(output6.textContent, 6);