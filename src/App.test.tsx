import React from 'react';
import { render, screen, within, fireEvent, act } from '@testing-library/react';
import App from './App';
import { createNewUser } from './services/userService';

jest.mock('./services/userService', () => ({
  ...jest.requireActual('./services/userService'),
  createNewUser: jest.fn()
}));

describe('App renders the names of the users', () => {
  it('renders 5 users', async () => {
    await act(async () => render(<App/>) as any)
    const users = await screen.findAllByTestId('test-user')
    users.forEach(user => expect(user).toBeInTheDocument())
    expect(users.length).toBeLessThanOrEqual(5)
  })

  it('renders users with text', async () => {
    await act(async () => render(<App/>) as any)
    const users = await screen.findAllByTestId('test-user')
    users.forEach(user => {
      within(user).getAllByRole('listitem')
        .forEach(item => expect(item.textContent).not.toBeUndefined())
    })
  })
})

describe('button to add new user', () => {
  it('should render a button', async () => {
    await act(async () => render(<App/>) as any)
    const button = await screen.findByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should call create user when click on button', async () => {
    await act(async () => render(<App/>) as any)
    const users = await screen.findAllByTestId('test-user');
    const button = await screen.findByRole('button');
    fireEvent.click(button)
    expect(createNewUser).toBeCalledTimes(1)
    expect(createNewUser).toBeCalledWith(users.length + 1)
  })
})

