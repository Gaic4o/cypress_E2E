/// <reference types="Cypress" />

describe("Headling IFrame & Modals", () => {
    it("webdriveruni iframe 및 모달 처리", () => {

        cy.visit("http://www.webdriveruniversity.com");

        // id => #iframe 선택 했습니다. 
        // invoke removeAttr - 지정된 이름을 가진 속성을 제거 합니다.
        cy.get("#iframe").invoke('removeAttr', 'target').click({force: true}) 

        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })

        // Find Out Mode! id click 
        cy.get('@iframe').find('#button-find-out-more').click() 
        
        // #myModal 하위 요소를 가져 옵니다.
        // #myModal 를 나중에 사용 할 수 있도록 modal 이라는 별칭을 지어 줍니다.
        cy.get('@iframe').find('#myModal').as('modal')

        // 별칭을 지어준 modal 를 가져옵니다.

        cy.get('@modal').should(($expectedText) => {
            const text = $expectedText.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods');
        });

        // cy.get('@modal').contains('Close').click();
    });
});