import React from 'react'
import "@testing-library/jest-dom/extend-expect";
import {Router} from 'react-router-dom'
import {render, fireEvent, screen} from '@testing-library/react'
import {createMemoryHistory} from 'history'
import TestRouter from '../components/TestRouter'


const renderWithRouter = (component) => {
  const history = createMemoryHistory()
  return {
    ...render(
      <Router history={history}>
        {component}
      </Router>
    )
  }
}

it('should render the home page', () => {

  const {container} = renderWithRouter(<TestRouter/>)
  const navbar = screen.getByTestId('navbar')
  const link = screen.getByTestId('home-link')

  expect(container.innerHTML).toMatch('Home page')
  expect(navbar).toContainElement(link)
})

it('should navigate to the about page', () => {
  const {container} = renderWithRouter(<TestRouter/>)
  const aboutLink = screen.getByTestId('about-link')

  fireEvent.click(aboutLink)

  expect(container.innerHTML).toMatch('About page')
})

it('should navigate to the contact page with the params', () => {
  const {container} = renderWithRouter(<TestRouter/>)
  const contactLink = screen.getByTestId('contact-link')

  fireEvent.click(contactLink)

  expect(container.innerHTML).toMatch('John Doe')
})
