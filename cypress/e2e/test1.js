import 'cypress-file-upload'
import SignUp from './pageObjects/signUp'

describe('SignUp Test', function(){

    it('Form Fill Up Automation', function(){
      const signup = new SignUp()
      cy.visit('https://automationexercise.com/login')
      signup.getName().type('Walter')
      signup.getEmail().type('gohideg876@maonyn.com')
      signup.tapSignup().click()

      signup.genderMale().click()

      signup.getPass().type('123456')
      signup.getBirthdate().select('25')
      signup.getBirthmonth().select('9')
      signup.getBirthyear().select('2001')


      signup.getFirstName().type('Walter')
      signup.getLastName().type('White')
      signup.getAddress().type('Toronto, Canada')

      signup.getCountry().select('Canada')

      signup.getState().type('Ontario')
      signup.getCity().type('Toronto')
      signup.getZipcode().type('M5H 2N2')
      signup.getPhoneNo().type('123456789')
      signup.getcreateAcc().click()
      cy.get('b').should('have.text', 'Account Created!')

    })

})



// describe('Login & shop explore', function(){

//     it('login, redirect to jeans section and purchase testing', function(){
      
      
//       // login
//       cy.visit('https://automationexercise.com/login')
//       cy.get('input[data-qa="login-email"]').type('gohideg876@maonyn.com')
//       cy.get('input[data-qa="login-password"]').type('123456')
//       cy.get('button[data-qa="login-button"]').click()
//       cy.wait(1000)
//       cy.get(':nth-child(10) > a').then(($el) => {
//         const text = $el.text()
//         expect(text).to.include('Logged in')
//       })
      
//       // //shop
//       cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
//       cy.get(':nth-child(2) > .panel-heading > .panel-title > a').then(($el) => {
//         const text = $el.text()
//         expect(text).to.include('Men')
//       })
//       cy.get('i[class="fa fa-plus"]').eq(1).click()
//       cy.get('#Men > .panel-body > ul > :nth-child(2) > a').then(($el) => {
//         const text = $el.text()
//         expect(text).to.include('Jeans')
//       })
//       cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click()
//       cy.get('div[class="productinfo text-center"] p').then(($el) => {
//         const text = $el.text()
//         expect(text).to.include('Jeans')
//       })
//       cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()

//       let productName
//       cy.get('div[class="product-information"] h2').then(($el) => {
//         productName = $el.text()
        
//       })
//       cy.get('#quantity').clear().should('have.value', '')
//       cy.get('#quantity').type('2')
//       cy.get(':nth-child(5) > .btn').click()
//       cy.get('div[class="modal-body"] p:nth-child(1)').then(($el) => {
//         const text = $el.text()
//         expect(text).to.include('added to cart')
//       })
      
//       cy.wait(1000)
//       cy.get('u').click()
//       cy.get('td[class="cart_description"] h4').then(($el) => {
//         const cart_product = $el.text()
//         expect(cart_product).to.equal(productName)
//       })
//       cy.get('.col-sm-6 > .btn').click()
//       cy.get('a[class="btn btn-default check_out"]').click()
//       cy.get('input[data-qa="name-on-card"]').type('Dexter')
//       cy.get('input[data-qa="card-number"]').type('5228090224456034')
//       cy.get('input[data-qa="cvc"]').type('878')
//       cy.get('input[data-qa="expiry-month"]').type('03')
//       cy.get('input[data-qa="expiry-year"]').type('2026')
//       cy.get("button[data-qa='pay-button']").click()
//       cy.get('.col-sm-9 > p').should('have.text', 'Congratulations! Your order has been confirmed!')


//     })

// })



// describe('Contact Us', function(){

//     it('Providing input text', function(){

//       cy.visit('https://automationexercise.com/contact_us')
//       cy.get('[data-qa="name"]').type('Dexter')
//       cy.get('[data-qa="email"]').type('gohideg876@maonyn.com')
//       cy.get('[data-qa="subject"]').type('[Dummy Subject] Inquiry About Recent Clothing Purchase')
//       cy.get('[data-qa="message"]').type('[Dummy Message] I recently purchased a blue denim jacket from your store. My order ID is #12345. I received the item on 14th January, but I have a concern regarding the size being incorrect. Could you please assist me in resolving this? Let me know if you need any additional details. Looking forward to your response.')
//       cy.get('[name="upload_file"]').attachFile('example.json')

//       cy.get('[type="file"]').then(($input) => {
//         const files = $input[0].files
//         expect(files[0].name).to.equal('example.json')
//       })

//       cy.get('input[type="submit"]').click()
//       cy.on('window:confirm', (confirmText) => {
//         return true
//       })

//       cy.get('div[class="status alert alert-success"]').then(($el) => {
//         const text = $el.text()
//         expect(text).to.include('Success!')
//       })

//     })

// })




  