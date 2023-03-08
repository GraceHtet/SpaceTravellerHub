import React from 'react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
// import { render, screen, fireEvent } from '@testing-library/react';
import store from '../redux/store';
import Rockets from '../components/Rockets';

describe('Rockets', () => {
  test('Render Rockets Component', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
