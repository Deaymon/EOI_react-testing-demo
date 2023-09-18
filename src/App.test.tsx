import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App renders the names of the users', () => {
  it('renders 5 users', async () => {
    render(<App/>)
    const users = await screen.findAllByTestId('test-user')
    users.forEach(user => expect(user).toBeInTheDocument())
    expect(users.length).toBeLessThanOrEqual(5)
  })

  it('renders users with text', async () => {
    render(<App/>)
    const users = await screen.findAllByTestId('test-user')
    users.forEach(user => expect(user.textContent).toHaveLength)
  })
})

