import { EventItem } from 'src/types'

import { EventsSortKey } from './enums'

export interface EventsSortStrategy {
  sort: (a: EventItem, b: EventItem) => number
}

const eventID: EventsSortStrategy = {
  sort: (a: EventItem, b: EventItem): number => {
    const dateA = new Date(a.eventID)
    const dateB = new Date(b.eventID)

    return dateA < dateB ? 1 : -1
  },
}

const goLiveAt: EventsSortStrategy = {
  sort: (a: EventItem, b: EventItem): number => {
    const dateA = new Date(a.goLiveAt)
    const dateB = new Date(b.goLiveAt)

    return dateA < dateB ? 1 : -1
  },
}

const name: EventsSortStrategy = {
  sort: (a: EventItem, b: EventItem): number => {
    const titleA = a.name.toUpperCase()
    const titleB = b.name.toUpperCase()

    if (titleA === titleB) return 0

    return titleA > titleB ? 1 : -1
  },
}

export const sortStrategyMap: { [key in EventsSortKey]: EventsSortStrategy } = {
  [EventsSortKey.EVENTID]: eventID,
  [EventsSortKey.NAME]: name,
  [EventsSortKey.GOLIVEAT]: goLiveAt,
}

export const getNotesSorter = (notesSortKey: EventsSortKey) => sortStrategyMap[notesSortKey].sort
