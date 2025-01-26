describe('SignUp', function(){

    it('SignUp Testcase', function(){

        cy.visit('https://automationexercise.com/login');

        cy.get('[data-qa="signup-name"]').type('Dexter')
        cy.get('[data-qa="signup-email"]').type('noobgamer201971@gmail.com')
        cy.get('[data-qa="signup-button"]').click()

        cy.get(':nth-child(3) > .top > [data-qa="title"]').click()
        cy.get('[data-qa="password"]').type('123456')
        cy.get('[data-qa="days"]').select('25')
        cy.get('[data-qa="months"]').select('9')
        cy.get('[data-qa="years"]').select('2001')
        cy.get('[data-qa="first_name"]').type('Dexter')
        cy.get('[data-qa="last_name"]').type('Morgan')
        cy.get('[data-qa="address"]').type('Dhaka, Bangladesh')
        cy.get('[data-qa="state"]').type('Dhaka')
        cy.get('[data-qa="city"]').type('Dhaka')
        cy.get('[data-qa="zipcode"]').type('1217')
        cy.get('[data-qa="mobile_number"]').type('123456789')
        cy.get('button[data-qa="create-account"]').click()
        cy.get('[data-qa="continue-button"]').click()



    })

})







describe('All Jeans Product', function(){

    it('redirect to jeans section', function(){


        cy.visit('https://automationexercise.com/category_products/6');
        cy.get('i[class="fa fa-plus"]').eq(1).click()
        cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click()
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('#quantity').clear().should('have.value', '')
        cy.get('#quantity').type('2')
        cy.get(':nth-child(5) > .btn').click()
        cy.wait(2000)
        cy.get('u').click()
        cy.get('.col-sm-6 > .btn').click()


    })

})



describe('Product', function(){

    it('redirect to jeans section', function(){

        cy.visit('https://automationexercise.com/contact_us');
        cy.get('[data-qa="name"]').type('Dexter')
        cy.get('[data-qa="email"]').type('noobgamer201971@gmail.com')
        cy.get('[data-qa="subject"]').type('xyz')
        cy.get('[data-qa="message"]').type('xyz')



    })

})




