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


});
