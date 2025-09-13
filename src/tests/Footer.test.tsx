import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from '@/components/Footer'
import test from 'node:test'

test('shows contact info', () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )
  expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument()
})
function expect(arg0: any) {
  throw new Error('Function not implemented.')
}

