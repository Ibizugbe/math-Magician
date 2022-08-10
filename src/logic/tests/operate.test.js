import operate from '../operate';

describe('testing for the operate js', () => {
  it('should return 10 for summation', () => {
    const result = operate(3, 7, '+');

    expect(result).toBe('10');
  });

  it('should return -4 for subtraction', () => {
    const result = operate(-8, -4, '-');

    expect(result).toBe('-4');
  });

  it('should return 25 for multiplication', () => {
    const result = operate(5, 5, 'x');

    expect(result).toBe('25');
  });

  it('should return 10 for division', () => {
    const result = operate(100, 10, '÷');

    expect(result).toBe('10');
  });

  it('should return error if we divide a number by 0', () => {
    const result = operate(10, 0, '÷');

    expect(result).toBe("Can't divide by 0.");
  });

  it('should return error if we module a number by 0', () => {
    const result = operate(10, 0, '%');

    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });
});
