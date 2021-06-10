/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'

import '@testing-library/jest-dom'
import 'jest-extended'

import AppFooter from 'src/components/layout/AppFooter'

describe('<AppFooter />', () => {
  it('renders the AppFooter component', () => {
    const component = render(<AppFooter />)

    expect(component).toBeTruthy()
  })
})
