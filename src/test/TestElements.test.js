import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup, screen} from '@testing-library/react';
import TestElements from '../components/TestElements'

afterEach(cleanup);

it('should equal to 0', () => {
  render(<TestElements/>);
  expect(screen.getByTestId('counter')).toHaveTextContent(0)
});

it('should be enabled', () => {
  render(<TestElements/>);
  expect(screen.getByTestId('button-up')).not.toHaveAttribute('disabled')
});

it('should be disabled', () => {
  render(<TestElements/>);
  expect(screen.getByTestId('button-down')).toBeDisabled()
});
