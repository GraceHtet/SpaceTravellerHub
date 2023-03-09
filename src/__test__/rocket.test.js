import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer, { act } from 'react-test-renderer';
import Rockets from '../components/Rockets';
import store from '../redux/store';

describe('Rockets', () => {
  test('Render Rockets Component', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Reserve Rocket Buttion', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const reserveBtn = await screen.findAllByText('Reserve Rocket');
    expect(reserveBtn).toHaveLength(4);
  });

  test('Should Appear Reserved text when click on Reserved Button ', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    act(() => {
      const reserveBtn = screen.getAllByText('Reserve Rocket');
      reserveBtn[0].click();
    });

    const reserveText = await screen.getByText('Reserved');
    expect(reserveText).toBeInTheDocument();
  });

  test('Cancel Reservation Buttion', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const cancelBtn = await screen.findAllByText('Cancel Reservation');
    expect(cancelBtn).toHaveLength(1);
  });

  test('Should Disappear one Reserved text when click on Cancel Reservation', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    act(() => {
      const reserveBtn = screen.getAllByText('Reserve Rocket');
      reserveBtn[1].click();
    });

    act(() => {
      const cancelBtn = screen.getAllByText('Cancel Reservation');
      cancelBtn[0].click();
    });

    const reserveText = await screen.findAllByText('Reserved');
    expect(reserveText).toHaveLength(1);
  });
});
