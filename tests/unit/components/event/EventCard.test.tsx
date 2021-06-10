/**
 * @jest-environment jsdom
 */

import React from 'react'

import '@testing-library/jest-dom'
import 'jest-extended'

import EventCard from 'src/components/event/EventCard'

import { EventItem } from 'src/types'
import events from 'tests/__mocks__/events'
import { renderWithRouter } from 'tests/unit/testHelpers'

const wrap = (props: { eventItem: EventItem }) =>
  renderWithRouter(<EventCard eventItem={props.eventItem} />)

describe('<EventCard />', () => {
  it('renders the EventCard component', () => {
    const dummyEvents = events as EventItem[]
    const eventItem: EventItem = dummyEvents[0]

    const component = wrap({ eventItem })

    expect(component).toBeTruthy()
  })
})
