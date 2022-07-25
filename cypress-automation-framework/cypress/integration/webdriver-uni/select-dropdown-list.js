/// <reference types="Cypress" />

describe("Interact with dropdown lists via webdriveruni", () => {
    it("Select specific values via select dropdown lists", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({force: true}) 

        cy.get('#dropdowm-menu-1').select('C#') // #id 가 dropdown-menu-1 인 dropdown 에서 C# 선택.
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value', 'testng')
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')

        // dropdown-menu-2 에서 TestNG 를 클릭 했던 값을 -> maven 으로 변경 했습니다.
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdown-menu-2').select('TestNG').contains('TestNG')
    });
});
