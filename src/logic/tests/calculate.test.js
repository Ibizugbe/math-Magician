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
  });

  it('should update the state like this {total: number, next: null, operation: +} if operation and total are null', () => {
    const result = calculate(state, '+');
    state = { ...state, ...result };

    expect(result).toEqual({ total: '95', next: null, operation: '+' });
  });

  it('should update the state like this {total: number, next: 5, operation: +} if user press number ', () => {
    const result = calculate(state, '5');
    state = { ...state, ...result };

    expect(result).toEqual({ total: '95', next: '5', operation: '+' });
  });

  it('should update the state like this {total: number, next: null, operation: +} if state is perfect', () => {
    const result = calculate(state, '+');
    state = { ...state, ...result };

    expect(result).toEqual({ total: '100', next: null, operation: '+' });
  });

  it('should update the state like this {total: number, next: 0., operation: +} if state is perfect', () => {
    const result = calculate(state, '.');
    state = { ...state, ...result };

    expect(result).toEqual({ total: '100', next: '0.', operation: '+' });
  });

  it('should state be empty after user press AC', () => {
    const result = calculate(state, 'AC');
    state = { ...state, ...result };

    expect(result).toEqual({ total: null, next: null, operation: null });
  });
});
