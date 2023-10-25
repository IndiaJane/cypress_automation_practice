//my account page functionality
describe('my account tests', () => {
    beforeEach(() => {
        //visit and run this website before each test
        cy.visit('http://173.216.121.92:3000/signin')
        cy.login('Katharina_Bernier')
    })

    afterEach(() => {
        cy.get('[data-test="sidenav"]').should('be.visible').wait(2000)
        cy.get('[data-test="sidenav-signout"]').click()
    })
    
    it('my account functions', () => {
    cy.dataTest('sidenav-user-settings').click()
    cy.url().should('include', '/settings')
    cy.dataTest('user-settings-firstName-input').should('have.value', 'Edgar')
    cy.dataTest('user-settings-lastName-input').should('have.value', 'Johns')
    cy.dataTest('user-settings-email-input').should('have.value', 'Norene39@yahoo.com')
    cy.dataTest('user-settings-phoneNumber-input').should('have.value', '625-316-9882')
    cy.dataTest('user-settings-firstName-input').clear()
    cy.dataTest('user-settings-firstName-input').click().type('Edgarr')
    cy.dataTest('user-settings-submit').click()
    cy.dataTest('user-settings-firstName-input').should('have.value', 'Edgarr')
    cy.dataTest('user-settings-firstName-input').clear()
    cy.dataTest('user-settings-firstName-input').click().type('Edgar')
    cy.dataTest('user-settings-submit').click()
    cy.dataTest('user-settings-firstName-input').should('have.value', 'Edgar')


    
})

})