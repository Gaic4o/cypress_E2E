/// <reference types="Cypress" />

describe("Verify radio buttons via webdriveruni", () => {

    // 실행되기 전에 먼저 호출.
    before(function() {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({force: true})         
    })

    it("Check specific radio buttons", () => {
        cy.get("#radio-buttons").find("[type='radio']").first().check() // first 만 체크 합니다.
        // eq는 배열의 특정 index 에서 DOM 요소를 가져옵니다.  
        cy.get("#radio-buttons").find("[type='radio']").eq(2).check() // 0 1 2 3 4 
    });

    it("Validate the states of specific radio buttons", () => {
        cy.get("[value='lettuce']").should('not.be.checked');
        cy.get("[value='pumpkin']").should('be.checked');
        
        cy.get("[value='lettuce']").check();
        cy.get("[value='lettuce']").should('be.checked');
        cy.get("[value='pumpkin']").should('not.be.checked');

        cy.get("[value='cabbage']").should('be.disabled');
    })
});
