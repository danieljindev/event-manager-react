/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'

import '@testing-library/jest-dom'
import 'jest-extended'

import { TestID } from 'src/resources/TestID'
import Loading, { LoadingProps } from 'src/components/Loading'

describe('<Loading />', () => {
  it('renders the Loading component', () => {
    const enabledProps: LoadingProps = {
      loading: true,
      dataTestID: TestID.LOADING,
    }

    const component = render(<Loading {...enabledProps} />)

    expect(component).toBeTruthy()
  })
})
