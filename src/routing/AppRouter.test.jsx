import {describe, it, expect, beforeEach, vi} from 'vitest'
import {render, screen, cleanup, fireEvent } from '@testing-library/react'
import { AppRouter } from './AppRouter.jsx'
import { Route } from '../components/Route.jsx'
import { CustomLink } from '../components/CustomLink.jsx'
import { getCurrentPath } from './utils.js'

vi.mock('./utils.js', () => ({
    getCurrentPath: vi.fn()
}))

describe('Router', () => {

    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })

    it('should render without problems', () => {
        render(<AppRouter routes={[]}/>)
        expect(true).toBeTruthy()
    })

    it('should render 404 if no routes mathc', () => {
        render(<AppRouter routes={[]} defaultComponent={() => <h1>404</h1>}/>)
        expect(screen.getByText('404')).toBeTruthy()
    })

    it('should render the component of the first route that matches', () => {
        
        getCurrentPath.mockReturnValue('/about')

        const routes = [
            {
                path: '/',
                Component: () => <h1>Home</h1>
            },
            {
                path: '/about',
                Component: () => <h1>About</h1>
            }
        ]

        render(<AppRouter routes={routes}/>)
        expect(screen.getByText('About')).toBeTruthy()
    })

    it('should navigate using Links', async () => {
    getCurrentPath.mockReturnValueOnce('/')

    render(
      <AppRouter>
        <Route
          path='/' Component={() => {
            return (
              <>
                <h1>Home</h1>
                <CustomLink to='/about'>Go to About</CustomLink>
              </>
            )
          }}
        />
        <Route path='/about' Component={() => (<h1>About</h1>)} />
      </AppRouter>
    )

    // Click on the link
    const anchor = screen.getByText(/Go to About/)
    fireEvent.click(anchor)

    const aboutTitle = await screen.findByText('Home')

    // Check that the new route is rendered
    expect(aboutTitle).toBeTruthy()
  })
})