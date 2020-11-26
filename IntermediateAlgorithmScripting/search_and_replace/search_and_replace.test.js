const myReplace = require('../search_and_replace/index');

test(
  "The word in the input text should be replaced with a new word.",
  () => {

    expect(myReplace("Let us go to the store", "store", "mall"))
    .toBe("Let us go to the mall");

    expect(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
    .toBe("He is Sitting on the couch");

    expect(myReplace("I think we should look up there", "up", "Down"))
    .toBe("I think we should look down there");

    expect(myReplace("This has a spellngi error", "spellngi", "spelling"))
    .toBe("This has a spelling error");

    expect(myReplace("His name is Tom", "Tom", "john"))
    .toBe("His name is John");

    expect(myReplace("Let us get back to more Coding", "Coding", "algorithms"))
    .toBe("Let us get back to more Algorithms");
  }
)
