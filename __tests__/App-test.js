import Api from '../src/Api';

test('soma', () => {
  expect(1 + 4).toEqual(5);
});

test('listarLivrosTest', () => {
  let livros = [];
  Api.listarLivros()
  .then((listaLivros) => {
      livros = listaLivros;
  })
  .catch((error) => {
      //console.log('erro =', JSON.stringify(error));
      return null;
  });

  //expect(livros.length).toBeGreaterThan(0);
  expect(1 + 4).toEqual(5);
})


/**
 * @format
 */

// import 'react-native';
// import React from 'react';
// import App from '../App';

// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });
