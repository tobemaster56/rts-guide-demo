import React from 'react'
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup, fireEvent, screen} from '@testing-library/react'
import CounterProvider, {CounterContext, Counter} from '../components/TestContext'

const renderWithContext = (
  component) => {
  return {
    ...render(
      <CounterProvider value={CounterContext}>
        {component}
      </CounterProvider>)
  }
}

afterEach(cleanup);

it('checks if initial state is equal to 0', () => {
  renderWithContext(<Counter/>)
  const counter = screen.getByTestId('counter')
  expect(counter).toHaveTextContent('0')
})

it('increments the counter', () => {
  renderWithContext(<Counter/>)
  const upButton = screen.getByTestId('button-up')
  const counter = screen.getByTestId('counter')

  fireEvent.click(upButton)

  expect(counter).toHaveTextContent('1')
})

it('decrements the counter', () => {
  renderWithContext(<Counter/>)
  const counter = screen.getByTestId('counter')
  const downButton = screen.getByTestId('button-down')

  fireEvent.click(downButton)
  expect(counter).toHaveTextContent('-1')
})
