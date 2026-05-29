import {describe, it, expect, beforeEach} from 'vitest'
import {render, screen, cleanup} from '@testing-library/react'
import { AppRouter } from './AppRouter'

describe('Router', () => {

    beforeEach(() => {
        cleanup()
    })

    it('should render without problems', () => {
        render(<AppRouter routes={[]}/>)
        expect(true).toBeTruthy()
    })

    it('should render 404 if no routes mathc', () => {
        render(<AppRouter routes={[]} defaultComponent={() => <h1>404</h1>}/>)
        expect(screen.getByText('404')).toBeTruthy()
    })
})