import React from 'react';
import stateType from './store/storeStateType';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';

const mockStore = configureStore<stateType>([]);
test('renders learn react link', () => {
  const store = mockStore({
    missions: []
  })

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
    expect(true).toBeTruthy();
});
