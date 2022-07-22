/// <reference types="Cypress" />

describe("Alias and invoke", () => {

    it("Validate a specific hair care product", () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        // 첫번째 0인 상태에서 시작합니다.  
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });

    it("Validate product thumbnail", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail');
        cy.get('@productThumbnail').should('have.length', 16);
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    });


    it.only("Calculate total of normal and sale products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => { // 금액 
        //     cy.log($el.text())
        // });
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        // 모든 상품 - thumbnail 16 를 가져 옵니디ㅏ.
        // 그리고 oneprice - 할인 되지 않은 가격들을 text 로 출력합니다. -> itemPrice 에 담는 다는 의미인 것 같습니다.
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
        

        let itemsTotal = 0; 
        cy.get('@itemPrice').then($linkText => { // 모든 itemPrice 들을 돌립니다. 
            let itemsPriceTotal = 0;
            let itemPrice = $linkText.split('$');
            let i;
            for(i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i]) // length 출력합니다.
                itemsPriceTotal += Number(itemPrice[i]); // 모든 것들을 숫자열로 변환합니다.
            }
            itemsTotal += itemsPriceTotal;
            cy.log("Non sale price items total: " + itemsPriceTotal)
        });

        cy.get('@saleItemPrice').then($linkText => {
            let saleItemsPrice = 0;
            let saleItemPrice = $linkText.split('$');
            let i; 

            for(i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                saleItemsPrice += Number(saleItemPrice[i]) 
            }
            itemsTotal += saleItemsPrice;
            cy.log('Non sale price items total : ' + saleItemsPrice)
        })
        .then(() => {
            cy.log("The total price of all products: " + itemsTotal)
            expect(itemsTotal).to.equal(55.45);
        });
    });
});