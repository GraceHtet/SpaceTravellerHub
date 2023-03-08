import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import TestRenderer, { act } from 'react-test-renderer';
import Missions from '../components/Missions';
import store from '../redux/store';

describe('Missions', () => {
  test('Render Missions Component', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Join Mission Buttion', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const joinButton = await screen.findAllByText('Join Mission');
    expect(joinButton).toHaveLength(10);
  });

  test('Clicking Leave Mission Button', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    act(() => {
      const joinButton = screen.getAllByText('Join Mission');
      expect(joinButton).toHaveLength(10);
      joinButton[0].click();
    });

    act(() => {
      const leaveButton = screen.getAllByText('Leave Mission');
      leaveButton[0].click();
    });

    const joinButton = await screen.findAllByText('Join Mission');
    expect(joinButton).toHaveLength(10);
  });

  test('Clicking Join Mission Button', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    act(() => {
      const joinButton = screen.getAllByText('Join Mission');
      joinButton[0].click();
    });

    const leaveButton = await screen.findAllByText('Leave Mission');
    expect(leaveButton).toHaveLength(1);
  });
});
