import { EventItem } from 'src/types'

/* eslint-disable import/prefer-default-export */
export const getPageCount = (events: EventItem[], eventsPerPage: number) =>
  Math.ceil(events.length / eventsPerPage)
