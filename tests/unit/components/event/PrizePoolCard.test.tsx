/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'

import '@testing-library/jest-dom'
import 'jest-extended'

import PrizePoolCard from 'src/components/event/PrizePoolCard'
import { EventItem, PrizePool } from 'src/types'
import events from '../../../__mocks__/events'

describe('<PrizePoolCard />', () => {
  it('renders the PrizePoolCard component', () => {
    const dummyEvents = events as EventItem[]
    const eventPrizePool: PrizePool = dummyEvents[0].prizePools

    const component = render(<PrizePoolCard {...eventPrizePool} />)

    expect(component).toBeTruthy()
  })
})
