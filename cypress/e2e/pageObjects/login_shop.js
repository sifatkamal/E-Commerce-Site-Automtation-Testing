class LoginShop{

    getEmail(){
        return cy.get('input[data-qa="login-email"]')
    }

    getPass(){
        return cy.get('input[data-qa="login-password"]')
    }

    tapLogin(){
        return cy.get('button[data-qa="login-button"]')
    }


    loggedin(){
        return cy.get(':nth-child(10) > a')
    }


    visit_product(){
        return cy.get('.shop-menu > .nav > :nth-child(2) > a')
    }

    mensection(){
        return cy.get(':nth-child(2) > .panel-heading > .panel-title > a')
    }

    expand_mensection(){
        return cy.get('i[class="fa fa-plus"]').eq(1)
    }

    jeanssection(){
        return cy.get('#Men > .panel-body > ul > :nth-child(2) > a')
    }

    expand_jeanssection(){
        return cy.get('#Men > .panel-body > ul > :nth-child(2) > a')
    }

    filteredJeans(){
        return cy.get('div[class="productinfo text-center"] p')
    }

    viewproduct(){
        return cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a')
    }


    storeProductName(){
        return cy.get('div[class="product-information"] h2')
    }

    quantity(){
        return cy.get('#quantity')
    }

    add_to_cart(){
        return cy.get(':nth-child(5) > .btn')
    }

    add_to_cart_validation(){
        return cy.get('div[class="modal-body"] p:nth-child(1)')
    }

    viewCart(){
        return cy.get('u')
    }

    productName_Validation(){
        return cy.get('td[class="cart_description"] h4')
    }

    checkout(){
        return cy.get('.col-sm-6 > .btn')
    }

    payment(){
        return cy.get('a[class="btn btn-default check_out"]')
    }



    getCardName(){
        return cy.get('input[data-qa="name-on-card"]')
    }

    getCardNumber(){
        return cy.get('input[data-qa="card-number"]')
    }

    getCardCVC(){
        return cy.get('input[data-qa="cvc"]')
    }
    getCardExpirationMonth(){
        return cy.get('input[data-qa="expiry-month"]')
    }
    getCardExpirationYear(){
        return cy.get('input[data-qa="expiry-year"]')
    }
    confirm_order(){
        return cy.get("button[data-qa='pay-button']")
    }
    paymentSuccess(){
        return cy.get('.col-sm-9 > p')
    }




}

export default LoginShop;