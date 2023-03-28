import {Roller} from './Roller';

describe("Smoke test", ()=> {
  test("The test scaffold runs successfully.", ()=> {
    expect(true).toBe(true);
  });
})

describe("Roller tests", ()=> {
  test("roll function when roll made is 0 ", () => {
    let roller: Roller = new Roller(6);

    // 2. invoke action
    let actual: number = roller.roll(0);

    // 3. assert expected outcome
    expect(actual).toBe(0);
    
  });
});

describe("Roller tests", ()=> {
  test("roll function when roll made is 1 ", () => {
    let roller: Roller = new Roller(6);

    // 2. invoke action
    let actual: number = roller.roll(0);

    // 3. assert expected outcome
    expect(roller.distribution().get(1)).toBe(0);
    
  });
});


describe("Roller tests", ()=> {
  test("roll function when roll made is 2 ", () => {
    let roller: Roller = new Roller(6);

    // 2. invoke action
    let actual: number = roller.roll(0);

    // 3. assert expected outcome
    expect(roller.distribution().get(2)).toBe(0);
    
  });
});

describe("Roller tests", ()=> {
  test("roll function when roll made is 5 ", () => {
    let roller: Roller = new Roller(6);

    // 2. invoke action
    let actual: number = roller.roll(0);

    // 3. assert expected outcome
    expect(roller.distribution().get(5)).toBe(0);
    
  });
});

describe("Roller tests", ()=> {
  test("roll function when roll made is 6 ", () => {
    let roller: Roller = new Roller(6);

    // 2. invoke action
    let actual: number = roller.roll(0);

    // 3. assert expected outcome
    expect(roller.distribution().get(6)).toBe(0);
    
  });
});


describe("Roller tests", ()=> {
  test("distribution function when no rolls made yet", () => {
    let roller: Roller = new Roller(6);

    // 2. invoke action
    let actual: Map<number, number> = roller.distribution();

    // 3. assert expected outcome
    expect(actual.get(1)).toBe(0);

  });
});

describe("Roller tests", ()=> {
  test("distribution function when no rolls made yet, Expected distribution of all zeroes.", () => {
    let roller: Roller = new Roller(6);

    // 2. invoke action
    let actual: Map<number, number> = roller.distribution();

    // 3. assert expected outcome
    expect(actual.get(2)).toBe(0);

  });
});

describe("Roller tests", ()=> {
  test("distribution function when no rolls made yet, Expected distribution of all zeroes.", () => {
    let roller: Roller = new Roller(6);

    // 2. invoke action
    let actual: Map<number, number> = roller.distribution();

    // 3. assert expected outcome
    expect(actual.get(6)).toBe(0);

  });
});




describe("Roller tests", ()=> {
    test("distribution function when some rolls made", () => {
    let roller: Roller = new Roller(6);
    roller.roll(2);

    // 2. invoke action
    let actual: Map<number, number> = roller.distribution();

    // 3. assert expected outcome
    expect(actual.get(1)).toBe(0);
  });
});




