import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer, { act } from 'react-test-renderer';
import Rockets from '../components/Rockets';
import Missions from '../components/Missions';
import Profile from '../components/Profile';
import store from '../redux/store';

describe('Missions', () => {
  test('Render Missions Component', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Missions />
        <Rockets />
        <Profile />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Rocket Button and Misson Button', async () => {
    render(
      <Provider store={store}>
        <Rockets />
        <Missions />
      </Provider>,
    );

    const reserveBtn = await screen.findAllByText('Reserve Rocket');
    const joinButton = await screen.findAllByText('Join Mission');
    expect(joinButton).toHaveLength(10);
    expect(reserveBtn).toHaveLength(4);
  });

  test('Reserved Rocket name should be in profile', async () => {
    render(
      <Provider store={store}>
        <Rockets />
        <Missions />
        <Profile />
      </Provider>,
    );

    act(() => {
      const reserveBtn = screen.getAllByText('Reserve Rocket');
      reserveBtn[0].click();
    });

    const rocketName = await screen.getAllByText('Falcon 1');
    expect(rocketName[1]).toBeInTheDocument();
  });

  test('Joined Mission name should be in profile', async () => {
    render(
      <Provider store={store}>
        <Rockets />
        <Missions />
        <Profile />
      </Provider>,
    );

    act(() => {
      const joinButton = screen.getAllByText('Join Mission');
      joinButton[0].click();
    });

    const missionName = await screen.getAllByText('Thaicom');
    expect(missionName[1]).toBeInTheDocument();
  });
});
