import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

test('expect homepage to match working snapshot', () => {
  const calculatorPage = renderer.create(<Calculator />).toJSON();
  expect(calculatorPage).toMatchSnapshot();
});