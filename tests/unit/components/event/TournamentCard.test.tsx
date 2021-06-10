/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'

import '@testing-library/jest-dom'
import 'jest-extended'

import TournamentCard from 'src/components/event/TournamentCard'
import { EventItem, TournamentItem } from 'src/types'
import events from '../../../__mocks__/events'

describe('<TournamentCard />', () => {
  it('renders the TournamentCard component', () => {
    const dummyEvents = events as EventItem[]
    const tournament: TournamentItem = dummyEvents[0].tournament

    const component = render(<TournamentCard {...tournament} />)

    expect(component).toBeTruthy()
  })
})
