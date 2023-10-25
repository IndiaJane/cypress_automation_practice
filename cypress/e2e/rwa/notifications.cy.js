//Notifications page functionality
describe('notification tests', () => {
    beforeEach(() => {
        //visit and run this website before each test
        cy.visit('http://173.216.121.92:3000/signin')
        cy.login('Katharina_Bernier')
    })

    afterEach(() => {
        cy.get('[data-test="sidenav"]').should('be.visible').wait(2000)
        cy.get('[data-test="sidenav-signout"]').click()
    })

//Notifications
it('Notifications functions correctly', () => {
    cy.dataTest('sidenav-notifications').click()
    //data-test="notification-list-item-9m-W-uI5fQUF"
    //data-test="notification-mark-read-9m-W-uI5fQUF"
    cy.get('[data-test^="notification-list-item"]').first().scrollIntoView()
    .should('be.visible')
    .find('[data-test^="notification-mark-read"]').click({force:true})

    })
})