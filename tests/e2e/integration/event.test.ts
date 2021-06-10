import { LabelText } from 'src/resources/LabelText'
import { clickToggleButtonByIndex } from '../utils/testEventHelper'
import {
  assertTotalEntriesCount,
  defaultInit,
  assertToogleButtonTextUpdated,
} from '../utils/testHelperUtils'

describe('Manage Event test', () => {
  defaultInit()

  before(() => {})

  beforeEach(() => {})

  it('should add to entries by clicking toggle button', () => {
    clickToggleButtonByIndex(0)
    assertTotalEntriesCount(1)
    clickToggleButtonByIndex(3)
    assertTotalEntriesCount(2)
  })

  it('should remove from entries by clicking toggle button', () => {
    clickToggleButtonByIndex(0)
    assertTotalEntriesCount(1)
    clickToggleButtonByIndex(3)
  })

  it('should update button text by clicking toggle button', () => {
    clickToggleButtonByIndex(0)
    assertToogleButtonTextUpdated(0, LabelText.REMOVE_FROM_ENTRIES)
    clickToggleButtonByIndex(0)
    assertToogleButtonTextUpdated(0, LabelText.ADD_TO_ENTRIES)
  })
})
