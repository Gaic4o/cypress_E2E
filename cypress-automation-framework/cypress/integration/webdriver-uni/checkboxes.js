/// <reference types="Cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    it("Check and validate checkbox", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({force: true}) 

        // cy.get('#checkboxes > :nth-child(1) > input').check();
        // check() - radio button을 check 합니다.
        // cy.get('[type="checkbox"]').check(); // 모든 checkbox 확인. 
        // cy.get('[type="radio"]').check(); // 모든 radio button 확인. 
        // cy.get('#saveUserName').check(); // 특정 ID 가 saveUserName 인 것을 확인.

        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked') // be.checked 로 check 합니다.

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        // cy.get('@option-1').check(); 
        cy.get('@option-1').check().should('be.checked')


        // 이미 check 가 되어 있는 값은 어떻게 해야 할까요?
    });

    it("Uncheck and validate checkbox", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({force: true}) 

        // 이미 체크 되어 있던 option-3 을 uncheck 합니다.
        cy.get("input[type='checkbox]").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked');
    });
});
