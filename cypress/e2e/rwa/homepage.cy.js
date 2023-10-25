describe('home page tests', () => {
    beforeEach(() => {
        //visit and run this website before each test
        cy.visit('http://173.216.121.92:3000/signin')
        cy.login('Katharina_Bernier')
    })

    afterEach(() => {
        cy.get('[data-test="sidenav"]').should('be.visible').wait(2000)
        cy.get('[data-test="sidenav-signout"]').click()
    })

    it('homepage', () => {
        cy.dataTest('app-name-logo').should('be.visible')
        cy.dataTest('transaction-list').should('be.visible')
        cy.dataTest('sidenav').should('be.visible')
    })

    //transaction list
    it('transaction list functionality', () => {
        cy.dataTest('transaction-item-183VHWyuQMS').click({force:true})
        cy.dataTest('transaction-detail-header').should('be.visible')
        cy.dataTest('transaction-comment-input-183VHWyuQMS').click({force:true}).type('nice.').type('{enter}')
        //cy.get('.jss332 > .MuiPaper-root > .MuiTypography-h6').should('be.visible')
        cy.dataTest('comments-list').should('be.visible')
        cy.dataTest('sidenav-home').should('be.visible').click()
        cy.dataTest('transaction-list').should('be.visible')
        //Can't unlike, on purpose?
        //Doesn't show who posted comment
        //filter ammount button
        cy.dataTest('main').scrollTo('top').wait(1000)
        cy.dataTest('transaction-list-filter-amount-range-button').should('be.visible').click({force:true})
        cy.dataTest('transaction-list-filter-amount-range').should('be.visible')
        cy.elementScrollRight('[data-index="0"]');
        cy.dataTest('transaction-list-filter-amount-clear-button').click()
        //Site refresh
        cy.visit('http://173.216.121.92:3000/');
        cy.dataTest('main').scrollTo('top').wait(1000)
    
    })

    //Tab list buttons
    it('tab list functions correctly', () => {
        cy.dataTest('nav-contacts-tab').click()
        cy.url().should('include', '/contacts')
        cy.dataTest('nav-personal-tab').click()
        cy.url().should('include', '/personal')
        cy.dataTest('nav-public-tab').click()
        cy.url().should('include', '/')

    })
    
    //Side Nav buttons
    it('nav bar functions correctly', () => {
        cy.dataTest('sidenav').should('be.visible')
        cy.dataTest('sidenav-user-settings').click()
        cy.url().should('include', '/user/settings')
        cy.dataTest('sidenav-bankaccounts').click()
        cy.url().should('include', '/bankaccounts')
        cy.dataTest('sidenav-notifications').click()
        cy.url().should('include', '/notifications')
        cy.dataTest('sidenav-home').click()
        cy.url().should('include', '/')
    })

    //Header top nav buttons
    it('top nav buttons function correctly', () => {
        //hamburger button
        cy.dataTest('sidenav-toggle').should('be.visible').click()
        cy.dataTest('sidenav').should('exist')
        cy.dataTest('sidenav-toggle').click()
        cy.dataTest('sidenav').should('be.visible')
        //New money button
        cy.dataTest('nav-top-new-transaction').should('be.visible').click()
        cy.url().should('include', '/transaction/new')
        cy.dataTest('nav-top-notifications-link').click()
        cy.url().should('include', '/notifications')


    })
})


