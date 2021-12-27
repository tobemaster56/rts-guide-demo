import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup, fireEvent, waitForElement, screen} from '@testing-library/react';
import TestAsync from '../components/TestAsync'

afterEach(cleanup);

it('increments counter after 0.5s', async () => {
  render(<TestAsync/>);

  fireEvent.click(screen.getByTestId('button-up'))

  const counter = await waitForElement(() => screen.getByText('1'))
  expect(counter).toHaveTextContent('1')
});
