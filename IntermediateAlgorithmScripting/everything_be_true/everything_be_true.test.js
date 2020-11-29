const truthCheck = require('./index');

describe('the following inputs should return the correct output', () => {
  it(`truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy",
      "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po",
      "sex": "female"}], "sex") should return true.`,
    () => {
      expect(truthCheck([
                      {
                        "user": "Tinky-Winky",
                         "sex": "male"
                       }, {
                         "user": "Dipsy",
                         "sex": "male"
                       }, {
                         "user": "Laa-Laa",
                          "sex": "female"
                        }, {
                          "user": "Po",
                          "sex": "female"
                        }],
                        "sex" ))
      .toBeTruthy();
  });

  it(`truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"},
      {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}],
       "sex") should return false.`,
    () => {
    expect(truthCheck([
                      {
                        "user": "Tinky-Winky",
                        "sex": "male"
                      },
                      {
                        "user": "Dipsy"
                      },
                      {
                        "user": "Laa-Laa",
                        "sex": "female"
                      },
                      {
                        "user": "Po",
                        "sex": "female"
                      }],
                      "sex" ))
    .toBeFalsy();
  });

  it(`truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user":
      "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female",
      "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should
      return false.`,
    () => {
    expect(truthCheck([
                    {
                      "user": "Tinky-Winky",
                      "sex": "male",
                      "age": 0
                    },
                    {
                      "user": "Dipsy",
                      "sex": "male",
                      "age": 3
                    },
                    {
                      "user": "Laa-Laa",
                      "sex": "female",
                      "age": 5
                    },
                    {
                      "user": "Po",
                      "sex": "female",
                      "age": 4
                    }],
                    "age"))
    .toBeFalsy();
  });

  it(`truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat",
      "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat")
      should return false`,
    () => {
    expect(truthCheck([
                    {
                      "name": "Pete",
                      "onBoat": true
                    },
                    {
                      "name": "Repeat",
                      "onBoat": true
                    },
                    {
                      "name": "FastForward",
                      "onBoat": null
                    }],
                    "onBoat"))
    .toBeFalsy();
  });

  it(`truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat",
      "onBoat": true, "alias": "Repete"}, {"name": "FastForward",
      "onBoat": true}], "onBoat") should return true`,
    () => {
    expect(truthCheck([
                    {
                      "name": "Pete",
                      "onBoat": true
                    },
                    {
                      "name": "Repeat",
                      "onBoat": true,
                      "alias": "Repete"
                    },
                    {
                      "name": "FastForward",
                      "onBoat": true
                    }],
                    "onBoat"))
    .toBeTruthy();
  });

  it(`truthCheck([{"single": "yes"}], "single") should return true`,
    () => {
    expect(truthCheck([{"single": "yes"}], "single"))
    .toBeTruthy();
  });

  it(`truthCheck([{"single": ""}, {"single": "double"}], "single") should
      return false`,
    () => {
    expect(truthCheck([{"single": ""}, {"single": "double"}], "single"))
    .toBeFalsy();
  });

  it(`truthCheck([{"single": "double"}, {"single": undefined}], "single")
      should return false`,
    () => {
    expect(truthCheck([{"single": "double"}, {"single": undefined}], "single"))
    .toBeFalsy();
  });

  it(`truthCheck([{"single": "double"}, {"single": NaN}], "single") should
      return false`,
    () => {
    expect(truthCheck([{"single": "double"}, {"single": NaN}], "single"))
    .toBeFalsy();
  });
})
