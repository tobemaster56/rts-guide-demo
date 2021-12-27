import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup, fireEvent, screen} from '@testing-library/react';
import TestEvents from '../components/TestEvents'

afterEach(cleanup);

it('increments counter', () => {
  // Arrange
  render(<TestEvents/>);
  const upBtn = screen.getByTestId('button-up');
  const counter = screen.getByTestId('counter');

  // Act
  fireEvent.click(upBtn);

  // Assert
  expect(counter).toHaveTextContent('1')
});

it('decrements counter', () => {
  // Arrange
  render(<TestEvents/>);
  const downBtn = screen.getByTestId('button-down');
  const counter = screen.getByTestId('counter');

  // Act
  fireEvent.click(downBtn);

  // Assert
  expect(counter).toHaveTextContent('-1')
});
