/// <reference types="Cypress" />

describe("Iterate over elements", () => {

    it("Log information of all hair care products", () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        // 각 제품을 반복하기.
        // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        //     cy.log("Index: " + index + " : " + $el.text())
        // });
        cy.selectProduct('Curls to straight Shampoo');
    });

    it("Add another specific product to basket", () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click(); // 자동화 테스트 저장소, 헤더 탐색에서 여러 링크를 찾을 수 있습니다.
        cy.selectProduct('Curls to straight Shampoo');
    }); 

    it("Add another spectific product to basket", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click(); 
        cy.selectProduct('Seaweed Conditioner');
    });
});