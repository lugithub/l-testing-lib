import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
//import '@testing-library/jest-dom/extend-expect';

jest.useFakeTimers();
afterEach(cleanup);

it('renders without crashing', () => {
  const { getByTestId, getByText } = render(<App />);
  const input = getByTestId('input1');

  fireEvent.change(input, { target: { value: '111' } });
  jest.runAllTimers();

  getByText('Debounce value: 111');
});

it('renders without crashing using userEvent', () => {
  const { getByTestId, getByText } = render(<App />);
  const input = getByTestId('input1');

  userEvent.type(input, '111');
  jest.runAllTimers();

  getByText('Debounce value: 111');
});
