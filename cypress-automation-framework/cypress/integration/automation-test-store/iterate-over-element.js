/// <reference types="Cypress" />

describe("Iterate over elements", () => {

    it("Log information of all hair care products", () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        // 각 제품을 반복하기.
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        });
    });

    it("Add specific product to basket", () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact');
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click(); // 자동화 테스트 저장소, 헤더 탐색에서 여러 링크를 찾을 수 있습니다.

        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if($el.text().includes('Curls to straight Shampoo')) { // text 에 타이틀이 샴푸라면? 
                cy.wrap($el).click(); // click DOM 을 실행합니다.
            }
        });

        
    })
});