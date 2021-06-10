import { TestID } from 'src/resources/TestID'
import { clickDynamicTestID } from './testHelperUtils'

const clickToggleButtonByIndex = (index: number = 0) => {
  clickDynamicTestID(TestID.TOGGLE_ENTRY_BUTTON + index)
}

export { clickToggleButtonByIndex }
