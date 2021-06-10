// testHelperUtils.ts
// Utility functions used by all test specs

import { LabelText } from 'src/resources/LabelText'
import { TestID } from 'src/resources/TestID'

import { entryPoint } from './testHelperEnums'

// takes a built string instead of a TestID .. prefer clickTestID() when possible
const clickDynamicTestID = (dynamicTestID: string) => {
  cy.get(wrapWithTestIDTag(dynamicTestID)).click()
}

// optional second parameter to click at supported areas (e.g. 'right' 'left') default is 'center'
const clickTestID = (testIDEnum: TestID) => {
  cy.get(wrapWithTestIDTag(testIDEnum)).click()
}

const selectOptionTestID = (testIDEnum: TestID, text: string) => {
  cy.get(wrapWithTestIDTag(testIDEnum)).select(text)
}

const defaultInit = () => {
  before(() => {
    cy.visit(entryPoint)

    // wait for things to settle .. like waiting for Welcome Note to resolve
    // increasing due to occasional flaky starts
    cy.wait(200)
  })
}

const getDynamicTestID = (testID: string) => {
  return cy.get(wrapWithTestIDTag(testID))
}

const getTestID = (testIDEnum: TestID) => {
  return cy.get(wrapWithTestIDTag(testIDEnum))
}

const testIDShouldContain = (testIDEnum: TestID | string, textEnum: LabelText) => {
  cy.get(wrapWithTestIDTag(testIDEnum)).should('contain', textEnum)
}

const testIDShouldExist = (testIDEnum: TestID) => {
  cy.get(wrapWithTestIDTag(testIDEnum)).should('exist')
}

const testIDShouldNotExist = (testIDEnum: TestID) => {
  cy.get(wrapWithTestIDTag(testIDEnum)).should('not.exist')
}

const wrapWithTestIDTag = (testIDEnum: TestID | string) => {
  return '[data-testid="' + testIDEnum + '"]'
}

/**
 * New Test goes here.
 */

const assertTotalEntriesCount = (expectedLength: number) => {
  getTestID(TestID.ENTRY_NOTIFICATION).children().should('contain.text', expectedLength)
}

const assertToogleButtonTextUpdated = (index: number, textEnum: LabelText) => {
  testIDShouldContain(TestID.TOGGLE_ENTRY_BUTTON + index, textEnum)
}

export {
  clickDynamicTestID,
  clickTestID,
  getDynamicTestID,
  getTestID,
  defaultInit,
  testIDShouldContain,
  testIDShouldExist,
  testIDShouldNotExist,
  wrapWithTestIDTag,
  selectOptionTestID,
  assertTotalEntriesCount,
  assertToogleButtonTextUpdated,
}
