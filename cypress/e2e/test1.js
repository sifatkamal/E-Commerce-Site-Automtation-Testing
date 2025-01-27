import 'cypress-file-upload'
import SignUp from './pageObjects/signUp'
import LoginShop from './pageObjects/login_shop'

// describe('SignUp Test', function(){

//     it('Form Fill Up Automation', function(){
//       const signup = new SignUp()
//       cy.visit('https://automationexercise.com/login')
//       signup.getName().type('Walter')
//       signup.getEmail().type('gohideg876@maonyn.com')
//       signup.tapSignup().click()

//       signup.genderMale().click()

//       signup.getPass().type('123456')
//       signup.getBirthdate().select('25')
//       signup.getBirthmonth().select('9')
//       signup.getBirthyear().select('2001')


//       signup.getFirstName().type('Walter')
//       signup.getLastName().type('White')
//       signup.getAddress().type('Toronto, Canada')

//       signup.getCountry().select('Canada')

//       signup.getState().type('Ontario')
//       signup.getCity().type('Toronto')
//       signup.getZipcode().type('M5H 2N2')
//       signup.getPhoneNo().type('123456789')
//       signup.getcreateAcc().click()
//       cy.get('b').should('have.text', 'Account Created!')

//     })

// })



// describe('Login & shop explore', function(){

//   it('login, redirect to jeans section and purchase testing', function(){

//     const login_shop = new LoginShop()

//     // login
//     cy.visit('https://automationexercise.com/login')

//     login_shop.getEmail().type('gohideg876@maonyn.com')
//     login_shop.getPass().type('123456')
//     login_shop.tapLogin().click()
//     cy.wait(1000)
//     login_shop.loggedin().then(($el) => {
//       const text = $el.text()
//       expect(text).to.include('Logged in')
//     })
    
//     // //shop
//     login_shop.visit_product().click()
//     login_shop.mensection().then(($el) => {
//       const text = $el.text()
//       expect(text).to.include('Men')
//     })


//     login_shop.expand_mensection().click()

//     login_shop.jeanssection().then(($el) => {
//       const text = $el.text()
//       expect(text).to.include('Jeans')
//     })
//     login_shop.expand_jeanssection().click()
    
//     login_shop.filteredJeans().then(($el) => {
//       const text = $el.text()
//       expect(text).to.include('Jeans')
//     })

//     login_shop.viewproduct().click()

//     let productName
//     login_shop.storeProductName().then(($el) => {
//       productName = $el.text()
      
//     })

//     login_shop.quantity().clear().should('have.value', '')
//     login_shop.quantity().type('2')

//     login_shop.add_to_cart().click()
//     login_shop.add_to_cart_validation().then(($el) => {
//       const text = $el.text()
//       expect(text).to.include('added to cart')
//     })
    
//     cy.wait(1000)
//     login_shop.viewCart().click()
//     login_shop.productName_Validation().then(($el) => {
//       const cart_product = $el.text()
//       expect(cart_product).to.equal(productName)
//     })

//     login_shop.checkout().click()
//     login_shop.payment().click()
//     login_shop.getCardName().type('Dexter')
//     login_shop.getCardNumber().type('5228090224456034')
//     login_shop.getCardCVC().type('878')
//     login_shop.getCardExpirationMonth().type('03')
//     login_shop.getCardExpirationYear().type('2026')
//     login_shop.confirm_order().click()
//     login_shop.paymentSuccess().should('have.text', 'Congratulations! Your order has been confirmed!')


//   })

// })



// describe('Contact Us', function(){
  


//   it('Providing input text', function(){

//     cy.visit('https://automationexercise.com/contact_us')
//     cy.get('[data-qa="name"]').type('Dexter')
//     cy.get('[data-qa="email"]').type('gohideg876@maonyn.com')
//     cy.get('[data-qa="subject"]').type('[Dummy Subject] Inquiry About Recent Clothing Purchase')
//     cy.get('[data-qa="message"]').type('[Dummy Message] I recently purchased a blue denim jacket from your store. My order ID is #12345. I received the item on 14th January, but I have a concern regarding the size being incorrect. Could you please assist me in resolving this? Let me know if you need any additional details. Looking forward to your response.')
//     cy.get('[name="upload_file"]').attachFile('example.json')

//     cy.get('[type="file"]').then(($input) => {
//       const files = $input[0].files
//       expect(files[0].name).to.equal('example.json')
//     })

//     cy.get('input[type="submit"]').click()
//     cy.on('window:confirm', (confirmText) => {
//       return true
//     })

//     cy.get('div[class="status alert alert-success"]').then(($el) => {
//       const text = $el.text()
//       expect(text).to.include('Success!')
//     })

//   })

// })




  