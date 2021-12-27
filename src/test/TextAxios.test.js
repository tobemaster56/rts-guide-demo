import React from 'react'
import "@testing-library/jest-dom/extend-expect";
import {render, waitForElement, fireEvent, screen} from '@testing-library/react'
import axiosMock from 'axios'
import TestAxios from '../components/TestAxios'

jest.mock('axios')

it('should display a loading text', () => {

  render(<TestAxios/>)

  const loadingText = screen.getByTestId('loading')
  expect(loadingText).toHaveTextContent('Loading...')
})

it('should load and display the data', async () => {
  const url = '/greeting'

  render(<TestAxios url={url}/>)
  const fetchButton = screen.getByTestId('fetch-data')

  axiosMock.get.mockResolvedValueOnce({
    data: {greeting: 'hello there'},
  })

  fireEvent.click(fetchButton)

  const greetingData = await waitForElement(() => screen.getByTestId('show-data'))

  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  expect(axiosMock.get).toHaveBeenCalledWith(url)
  expect(greetingData).toHaveTextContent('hello there')
})
