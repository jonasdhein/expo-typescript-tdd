import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

//it é a mesma coisa que test, recebe um nome e uma função
it('renders correctly', () => {
    render(<App />);
});

//exemplo abaixo funciona
// import React from 'react';
// import renderer from 'react-test-renderer';

// import App from '../App';

// describe('<App />', () => {
//   it('has 1 child', () => {
//     const tree = renderer.create(<App />).toJSON();
//     expect(tree.children.length).toBe(1);
//   });
// });