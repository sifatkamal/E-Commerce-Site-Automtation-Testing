class Contact{

    getName(){
        return cy.get('[data-qa="name"]')
    }

    getEmail(){
        return cy.get('[data-qa="email"]')
    }

    getSubject(){
        return cy.get('[data-qa="subject"]')
    }

    getMessage(){
        return cy.get('[data-qa="message"]')
    }

    attachFile(){
        return cy.get('[name="upload_file"]')
    }

    fileAttachmentValidation(){
        return cy.get('[type="file"]')
    }

    tapSubmit(){
        return cy.get('input[type="submit"]')
    }

    successValidation(){
        return cy.get('div[class="status alert alert-success"]')
    }



}

export default Contact