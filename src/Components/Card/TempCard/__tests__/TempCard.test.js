import React from 'react';
import renderer from 'react-test-renderer';
import TempCard from '../index';

test('temp card correctly', () => {
  const tree = renderer.create(<TempCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
