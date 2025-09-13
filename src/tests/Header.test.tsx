import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '@/components/Header'

test('renders nav links', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  expect(screen.getByText(/About/i)).toBeInTheDocument()
  expect(screen.getByText(/Services/i)).toBeInTheDocument()
})
