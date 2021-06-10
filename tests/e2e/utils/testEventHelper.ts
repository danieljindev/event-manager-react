import { TestID } from 'src/resources/TestID'
import { clickDynamicTestID } from './testHelperUtils'

const navigateToggleButton = (index: number = 0) => {
  clickDynamicTestID(TestID.TOGGLE_ENTRY_BUTTON + index)
}

export { navigateToggleButton }
