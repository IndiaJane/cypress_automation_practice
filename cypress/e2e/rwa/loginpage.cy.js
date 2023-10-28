describe('login page tests', () => {
    beforeEach(() => {
        //visit and run this website before each test
        cy.visit('http://localhost:3000/signin')
    })

    it('displays login page', () => {
        cy.get('#username').should('exist').and('be.visible')
        cy.get('#password').should('be.visible')
        //cy.get('[type="checkbox"]').should('be.visible')
    
    })
    
    //using correct username and password
    it('login successful', () => {
        cy.login('Katharina_Bernier')
        cy.get('[data-test="sidenav"]').should('be.visible').wait(2000)
        cy.get('[data-test="sidenav-signout"]').click()
        
        cy.login('Tavares_Barrows')
        cy.get('[data-test="sidenav"]').should('be.visible').wait(2000)
        cy.get('[data-test="sidenav-signout"]').click()

        cy.login('Allie2')
        cy.get('[data-test="sidenav"]').should('be.visible').wait(2000)
        cy.get('[data-test="sidenav-signout"]').click()

    })

    //using correct username wrong password
    it('invalid password', () => {
        cy.get('#username').type('Katharina_Bernier')
        cy.get('#password').type('123456')
        cy.get('[data-test="signin-submit"]').click()
        cy.get('[data-test="signin-error"]').should('be.visible').should('contain', 'Username or password is invalid')
    })

    //using invalid username and password
    it('invalid username', () => {
        cy.get('#username').type('asfgfgfg')
        cy.get('#password').type('123456')
        cy.get('[data-test="signin-submit"]').click()
        cy.get('[data-test="signin-error"]').should('be.visible').should('contain', 'Username or password is invalid')
    })

    //username error message
    it('displays error message', () => {
        cy.get('#username').should('be.visible')
        cy.get('#password').click()
        cy.get('#username-helper-text').should('be.visible').should('contain', 'Username is required')
    })

    //remember me checkbox functions properly
    it('checkbox', () => {
        cy.get('[type="checkbox"]').check().wait(1000).uncheck()
        cy.get('#username').type('Katharina_Bernier')
        cy.get('#password').type('s3cret')
        cy.get('[type="checkbox"]').check()
        cy.get('[data-test="signin-submit"]').click()
        cy.get('[data-test="sidenav"]').should('be.visible').wait(2000)
        cy.get('[data-test="sidenav-signout"]').click()
    })
})

