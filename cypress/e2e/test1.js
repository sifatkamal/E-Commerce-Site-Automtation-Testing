import 'cypress-file-upload';

describe('SignUp', function(){

    it('SignUp Automation', function(){

        cy.visit('https://automationexercise.com/login');

        cy.get('[data-qa="signup-name"]').type('Dexter')
        cy.get('[data-qa="signup-email"]').type('gohideg876@maonyn.com')
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

    })

})


describe('All Jeans Product', function(){

    it('redirect to jeans section', function(){

        // login
        cy.visit('https://automationexercise.com/login');
        cy.get('input[data-qa="login-email"]').type('gohideg876@maonyn.com')
        cy.get('input[data-qa="login-password"]').type('123456')
        cy.get('button[data-qa="login-button"]').click()
        cy.wait(1000)

        //shop
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('i[class="fa fa-plus"]').eq(1).click()
        cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click()
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('#quantity').clear().should('have.value', '')
        cy.get('#quantity').type('2')
        cy.get(':nth-child(5) > .btn').click()
        cy.wait(2000)
        cy.get('u').click()
        cy.get('.col-sm-6 > .btn').click()

        cy.get('a[class="btn btn-default check_out"]').click()

        cy.get('input[data-qa="name-on-card"]').type('Dexter')
        cy.get('input[data-qa="card-number"]').type('5228090224456034')

        cy.get('input[data-qa="cvc"]').type('878')
        cy.get('input[data-qa="expiry-month"]').type('03')
        cy.get('input[data-qa="expiry-year"]').type('2026')

        cy.get("button[data-qa='pay-button']").click()

        cy.get('.col-sm-9 > p').should('have.text', 'Congratulations! Your order has been confirmed!')


    })

})



describe('Product', function(){

    it('redirect to jeans section', function(){

        cy.visit('https://automationexercise.com/contact_us');
        cy.get('[data-qa="name"]').type('Dexter')
        cy.get('[data-qa="email"]').type('gohideg876@maonyn.com')
        cy.get('[data-qa="subject"]').type('[Dummy Subject] Inquiry About Recent Clothing Purchase')
        cy.get('[data-qa="message"]').type('[Dummy Message] I recently purchased a blue denim jacket from your store. My order ID is #12345. I received the item on 14th January, but I have a concern regarding the size being incorrect. Could you please assist me in resolving this? Let me know if you need any additional details. Looking forward to your response.')
        cy.get('[name="upload_file"]').attachFile('example.json')

        cy.get('[type="file"]').then(($input) => {

            const files = $input[0].files;
            expect(files[0].name).to.equal('example.json');

        });


    })

})




