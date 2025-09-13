import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'

test('home hero renders', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
  expect(screen.getByText('ADCEDO')).toBeInTheDocument()
  expect(screen.getByText(/Our Creative Services/i)).toBeInTheDocument()
})
