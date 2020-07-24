import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import renderer from 'react-test-renderer';

describe('List component', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List name="List" unread={4}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
});