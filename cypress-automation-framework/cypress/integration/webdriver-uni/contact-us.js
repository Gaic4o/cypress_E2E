/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code 
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force: true})
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8'); // <meta charset="utf-8"> 별 쓰잘 대가리 없는 것
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus'); 
        // cy.get('#contact-us > .thumbnail').click({ force: true })
        cy.get('[name="first_name"]').type('Joe'); // 자동으로 first_name input 에 type 을 이용하여 Joe 를 입력 해 줍니다.
        cy.get('[name="last_name"]').type("blogs");
        cy.get('[name="email"]').type("joe_blogs123@gmail.com");
        cy.get('textarea.feedback-input').type("How can I learn Cypress?");
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
    });

    // email 이 없이 요청을 보내 에러 메시지를 출력 해 줍니다.
    // it.only 를 하면 이 테스트 케이스만 실행이 됩니다.
    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force: true})
        // cy.get("#contact-us").click({force: true})
        cy.get('[name="first_name"]').type('Tom'); // 자동으로 first_name input 에 type 을 이용하여 Joe 를 입력 해 줍니다.
        cy.get('[name="last_name"]').type("blogs");
        cy.get('textarea.feedback-input').type("How can I learn Cypress?");
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required'); // Error 메시지는 html 태그가 아닌 그냥 body 안에 에러 메시지가 출력되어 나오는 듯.
    });
});