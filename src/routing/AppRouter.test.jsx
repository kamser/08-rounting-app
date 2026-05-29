import {describe, it, expect} from 'vitest'
import {render} from '@testing-library/react'
import { AppRouter } from './AppRouter'

describe('Router', () => {
    it('should render without problems', () => {
        render(<AppRouter routes={[]}/>)
    })
})