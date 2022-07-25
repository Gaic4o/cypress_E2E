/// <reference types="Cypress" />

describe("webdriveruni 를 통해 자동완성 드롭다운 목록 확인", () => {
    it("자동 완성 목록을 통해 특정 제품 선택", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#autocomplete-textfield").invoke('removeAttr', 'target').click({force: true})   

        // myInput 에 A 텍스트를 입력 합니다.
        cy.get('#myInput').type('A')
        
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = 'Avacado';

            if(prod === productToSelect) {
                // $el.click();
                $el.trigger("click");
                
                cy.get('#submit-button').click();
                cy.url().should('include', productToSelect)
            }
        }).then(() => {
            cy.get('#myInput').type('g')

                cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text();
                const productToSelect = 'Grapes';

                if(prod === productToSelect) {
                    $el.trigger("click");
                    cy.get('#submit-button').click();
                    cy.url().should('include', productToSelect)
                }
            })
        })
    });
})
