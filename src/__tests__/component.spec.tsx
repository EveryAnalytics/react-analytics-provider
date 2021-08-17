import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SampleComponent from '../components/Sample';

test('component testing', () => {
  const component = renderer.create(<SampleComponent text="World" />);
  const testInstance = component.root;

  expect(testInstance.findByType(SampleComponent).props.text).toBe('World');

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
