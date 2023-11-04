const grantClipboardPermissions = () => {
  cy.wrap(
    Cypress.automation('remote:debugger:protocol', {
      command: 'Browser.grantPermissions',
      params: {
        permissions: ['clipboardReadWrite', 'clipboardSanitizedWrite'],
        origin: window.location.origin,
      },
    }),
  )
}

const assertValueInClipboard = (value) => {
  cy.window().then((win) => {
    win.navigator.clipboard.readText().then((text) => {
      expect(text).to.eq(value)
    })
  })
}

describe('clipboard', () => {
  it('should copy "Aaron Williams" to clipboard', () => {
    cy.visit(
      'http://localhost:8080/posts/testing-copy-to-clipboard-with-cypress/',
    )

    grantClipboardPermissions()

    cy.get('#copy-to-clipboard').click()

    assertValueInClipboard('Aaron Williams')
  })
})
