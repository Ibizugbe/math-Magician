import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../Quotes';

test('expect homepage to match working snapshot', () => {
  const quotes = renderer.create(<Quotes />).toJSON();
  expect(quotes).toMatchSnapshot();
});
