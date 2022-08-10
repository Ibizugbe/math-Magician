import calculate from '../calculate';

let state = {
  total: null,
  next: null,
  operation: null,
};

describe('testing for the calculator js', () => {
  it('should next have a number if the button is number and  operator and total is null', () => {
    const result = calculate(state, '9');
    state = { ...state, ...result };

    expect(result.next).toBe('9');
  });

  it('should next have a number if the button is number and  operator and total is null', () => {
    const result = calculate(state, '5');
    state = { ...state, ...result };
    expect(result.next).toBe('95');
    console.log(state);
  });
});
