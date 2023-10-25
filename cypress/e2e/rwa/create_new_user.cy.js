describe('create new user tests', () => {
    beforeEach(() => {
        //visit and run this website before each test
        cy.visit('http://173.216.121.92:3000/signin')
    })

    it('displays login page', () => {
        cy.get('#username').should('exist').and('be.visible')
        cy.get('#password').should('be.visible')
        //cy.get('[type="checkbox"]').should('be.visible')

    })

    //signup link
    it('signup page successful', () => {
        cy.get('[data-test="signup"]').should('be.visible').click()
        cy.get('#firstName').should('be.visible')
    })

    //signup account
    it('create account successful', () => {
        cy.get('[data-test="signup"]').should('be.visible').click()
        cy.get('#firstName').should('be.visible')
        cy.get('#firstName').type('Khal')
        cy.get('#lastName').type('Drogo')
        cy.get('#username').type('Khal_Drogo')
        cy.get('#password').type('h3llow0rld')
        cy.get('#confirmPassword').type('h3llow0rld')
        cy.get('[data-test="signup-submit"').click()
        cy.get('#username').should('be.visible')
    })

    //signup message errors
    it('displays message errors', () => {
        cy.get('[data-test="signup"]').should('be.visible').click()
        cy.get('#firstName').should('be.visible')
        cy.get('#lastName').click()
        cy.get('#firstName-helper-text').should('be.visible').should('contain', 'First Name is required')
        cy.get('#username').click()
        cy.get('#lastName-helper-text').should('be.visible').should('contain', 'Last Name is required')
        cy.get('#password').click()
        cy.get('#username-helper-text').should('be.visible').should('contain', 'Username is required')
        cy.get('#confirmPassword').click()
        cy.get('#password-helper-text').should('be.visible').should('contain', 'Enter your password')
        cy.get('#password').click()
        cy.get('#confirmPassword-helper-text').should('be.visible').should('contain', 'Confirm your password')
        cy.get('#password').type('h3llow0rld')
        cy.get('#confirmPassword').type('helloworld')
        cy.get('#confirmPassword-helper-text').should('be.visible').should('contain', 'Password does not match')
    })

    //have an account? Sign in
    it('successfuly loads login', () => {
        cy.get('[data-test="signup"]').should('be.visible').click()
        cy.get('#firstName').should('be.visible')
        cy.get('a[href="/signin"]').should('be.visible').click()
        cy.get('#username').should('be.visible')
    })
})

