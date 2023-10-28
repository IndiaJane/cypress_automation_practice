//bank account page functionality
describe('bank account tests', () => {
    beforeEach(() => {
        //visit and run this website before each test
        cy.visit('http://localhost:3000/signin')
        cy.login('Katharina_Bernier')
        cy.dataTest('sidenav-bankaccounts').click()
        cy.url().should('include', '/bankaccount')
    })

    //afterEach(() => {
        //cy.get('[data-test="sidenav"]').should('be.visible').wait(2000)
        //cy.get('[data-test="sidenav-signout"]').click()
    //})

    it('bank account functionality', () => {
        cy.dataTest('sidenav-bankaccounts').click()
        cy.url().should('include', '/bankaccount')
        cy.dataTest('main').scrollTo('top').wait(1000)
        cy.dataTest('bankaccount-new').should('be.visible').click({force:true})
    })
    
    //error messages
    it('error messages displays', () => {
        cy.get('#bankaccount-bankName-input').click()
        cy.get('#bankaccount-routingNumber-input').click()
        cy.get('#bankaccount-bankName-input-helper-text').should('contain', 'Enter a bank name')
        cy.get('#bankaccount-accountNumber-input').click()
        cy.get('#bankaccount-routingNumber-input-helper-text').should('contain', 'Enter a valid bank routing number')
        cy.get('#bankaccount-bankName-input').click()
        cy.get('#bankaccount-accountNumber-input-helper-text').should('contain', 'Enter a valid bank account number')
    })

    //error message with text
    it('error messages displays with text', () => {
        cy.get('#bankaccount-bankName-input').type('a')
        cy.get('#bankaccount-bankName-input-helper-text').should('contain', 'Must contain at least 5 characters')
        cy.get('#bankaccount-bankName-input').clear()
        cy.get('#bankaccount-routingNumber-input').type('a')
        cy.get('#bankaccount-routingNumber-input-helper-text').should('contain', 'Must contain a valid routing number')
        cy.get('#bankaccount-routingNumber-input').clear()
        cy.get('#bankaccount-accountNumber-input').type('a')
        cy.get('#bankaccount-accountNumber-input-helper-text').should('contain', 'Must contain at least 9 digits')
        cy.get('#bankaccount-accountNumber-input').clear()
        cy.get('#bankaccount-accountNumber-input').type('aaaaaaaaaaaaaaaaaa')
        cy.get('#bankaccount-accountNumber-input-helper-text').should('contain', 'Must contain no more than 12 digits')
        cy.get('#bankaccount-accountNumber-input').clear()
    })

    //create bank account
    it('bank account created', () => {
        cy.get('#bankaccount-bankName-input').type('goldencoin')
        cy.get('#bankaccount-routingNumber-input').type('123456789')
        cy.get('#bankaccount-accountNumber-input').type('000000000')
        cy.dataTest('bankaccount-submit').click()
    })
    //cy.dataTest('bankaccount-list-item-LunYcze5L')
    // cy.get('[data-test^="bankaccount-list-item-"]').last().scrollIntoView().should('be.visible')
    // cy.get('[data-test^="bankaccount-list-item-"]').each(($el) => {
    //     // Check if the delete button exists within the current parent element
    //     const deleteButton = $el.find(' > .MuiGrid-container > :nth-child(2) > [data-test="bankaccount-delete"]');

    //     // If the delete button exists, click it
    //     if (deleteButton.length > 0) {
    //         cy.wrap($el)
    //             .find(' > .MuiGrid-container > :nth-child(2) > [data-test="bankaccount-delete"]')
    //             .scrollIntoView()
    //             .wait(1000)
    //             .click({ force: true })
    //             .wait(2000);
    //     }
    // });
    // cy.get('[data-test^="bankaccount-list-item-"]').last().scrollIntoView().find('[data-test="bankaccount-delete"]').click()
    //cy.dataTest('main').scrollTo('top').wait(1000)
})