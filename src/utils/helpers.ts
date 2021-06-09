import { EventItem } from 'src/types'

export const getPageCount = (events: EventItem[], eventsPerPage: number) =>
  Math.ceil(events.length / eventsPerPage)

export const getDayJsLocale = (languagetoken: string): string => {
  try {
    /* eslint-disable import/no-dynamic-require, global-require */
    require(`dayjs/locale/${languagetoken}.js`)

    return languagetoken
  } catch (error) {
    if (languagetoken.includes('-'))
      return getDayJsLocale(languagetoken.substring(0, languagetoken.lastIndexOf('-')))

    return 'en'
  }
}
