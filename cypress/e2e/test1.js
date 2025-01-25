describe('My first test Suite', function(){

    it('My First Test Case', function(){

        cy.visit('https://automationexercise.com/login');

        cy.get('[data-qa="signup-name"]').type('Dexter')
        cy.get('[data-qa="signup-email"]').type('noobgamer201971@gmail.com')
        cy.get('[data-qa="signup-button"]').click()

        cy.get(':nth-child(3) > .top > [data-qa="title"]').click()

    })

})