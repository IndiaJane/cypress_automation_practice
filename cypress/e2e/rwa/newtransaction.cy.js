//New Transaction page functionality
describe('new transaction tests', () => {
    beforeEach(() => {
        //visit and run this website before each test
        cy.visit('http://173.216.121.92:3000/signin')
        cy.login('Katharina_Bernier')
        cy.dataTest('nav-top-new-transaction').click()
        cy.url().should('include', '/transaction/new')
    })

    //afterEach(() => {
        //cy.get('[data-test="sidenav"]').should('be.visible').wait(2000)
        //cy.get('[data-test="sidenav-signout"]').click()
    //})

    //Search bar
    it('search bar functions', () => {
        cy.dataTest('user-list-search-input').click()
        .type('Ar').wait(1000).clear()
    })

    ////New Transaction errors
    //data-test="user-list-item-qywYp6hS0U"
    it('shows error messages', () => {
        cy.get('[data-test^="user-list-item"]').first().should('be.visible').click()
        cy.get('#amount').click()
        cy.get('#transaction-create-description-input').click()
        cy.get('#transaction-create-amount-input-helper-text').should('contain', 'Please enter a valid amount')
        .should('be.visible')
        cy.get('#amount').click()
        cy.get('#transaction-create-description-input-helper-text').should('contain', 'Please enter a note')
        .should('be.visible')
    })
    // New Transaction Request/create another transaction
    it('requests properly', () => {
        cy.transaction()
        cy.dataTest('transaction-create-submit-request').click()
        cy.dataTest('new-transaction-create-another-transaction').click()
        cy.url().should('include', '/transaction/new')

    })
    //New Transaction Request/return to transactions/homepage
    it('requests properly and redirects', () => {
        cy.transaction()
        cy.dataTest('transaction-create-submit-request').click()
        cy.dataTest('new-transaction-return-to-transactions').click()
        cy.url().should('include', '/')

    })
    //New Transaction paid
    it('pay transaction and redirect', () => {
        cy.transaction()
        cy.dataTest('transaction-create-submit-payment').click()
        cy.dataTest('new-transaction-return-to-transactions').click()
        cy.url().should('include', '/')

    })


})