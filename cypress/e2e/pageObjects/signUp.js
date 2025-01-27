class Signup{

    getName(){
        return cy.get('[data-qa="signup-name"]')
    }

    getEmail(){
        return cy.get('[data-qa="signup-email"]')
    }

    tapSignup(){
        return cy.get('[data-qa="signup-button"]')
    }

    genderMale(){
        return cy.get(':nth-child(3) > .top > [data-qa="title"]')
    }

    getPass(){
        return cy.get('[data-qa="password"]')
    }

    getBirthdate(){
        return cy.get('[data-qa="days"]')
    }

    getBirthmonth(){
        return cy.get('[data-qa="months"]')
    }

    getBirthyear(){
        return cy.get('[data-qa="years"]')
    }

    getFirstName(){
        return cy.get('[data-qa="first_name"]')
    }
    getLastName(){
        return cy.get('[data-qa="last_name"]')
    }
    getAddress(){
        return cy.get('[data-qa="address"]')
    }

    getCountry(){
        return cy.get('[data-qa="country"]')
    }

    getState(){
        return cy.get('[data-qa="state"]')
    }
    getCity(){
        return cy.get('[data-qa="city"]')
    }
    getZipcode(){
        return cy.get('[data-qa="zipcode"]')
    }
    getPhoneNo(){
        return cy.get('[data-qa="mobile_number"]')
    }
    getcreateAcc(){
        return cy.get('[data-qa="create-account"]')
    }

}

export default Signup;