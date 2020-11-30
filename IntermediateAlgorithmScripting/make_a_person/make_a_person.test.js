const Person = require('./index');

describe('the constructors should return the correct outputs', () => {
  var bob = new Person('Bob Ross');

  it('Object.keys(bob).length should return 6.', () => {
    expect(Object.keys(bob).length).toBe(6);
  });

  it('bob instanceof Person should return true.', () => {
    expect(bob).toBeTruthy();
  })

  it('bob.firstName should return undefined.', () => {
    expect(bob.firstName).toBeUndefined();
  })

  it('bob.lastName should return undefined.', () => {
    expect(bob.lastName).toBeUndefined();
  })

  it('bob.getFirstName() should return "Bob".', () => {
    expect(bob.getFirstName()).toBe("Bob");
  })

  it('bob.getLastName() should return "Ross".', () => {
    expect(bob.getLastName()).toBe("Ross");
  })

  it('bob.getFullName() should return "Bob Ross".', () => {
    expect(bob.getFullName()).toBe("Bob Ross");
  })

  it(`bob.getFullName() should return "Haskell Ross" after
      bob.setFirstName("Haskell").`, () => {
    bob.setFirstName("Haskell");

    expect(bob.getFullName()).toBe("Haskell Ross");
  })

  it(`bob.getFullName() should return "Haskell Curry" after
      bob.setLastName("Curry").`, () => {
    bob.setLastName("Curry");

    expect(bob.getFullName()).toBe("Haskell Curry");
  })

  it(`bob.getFullName() should return "Haskell Curry" after
      bob.setFullName("Haskell Curry").`, () => {
    bob.setFullName("Haskell Curry");
  
    expect(bob.getFullName()).toBe("Haskell Curry");
  })

  it(`bob.getFirstName() should return "Haskell" after
      bob.setFullName("Haskell Curry").`, () => {
    expect(bob.getFirstName()).toBe("Haskell");
  })

  it(`bob.getLastName() should return "Curry"
      after bob.setFullName("Haskell Curry").`, () => {
    expect(bob.getLastName()).toBe("Curry");
  })
})
