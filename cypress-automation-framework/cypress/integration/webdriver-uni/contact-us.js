/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code 
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.get('#contact-us > .thumbnail').click({ force: true })
        cy.get('[name="first_name"]').type('Joe'); // 자동으로 first_name input 에 type 을 이용하여 Joe 를 입력 해 줍니다.
        cy.get('[name="last_name"]').type("blogs");
        cy.get('[name="email"]').type("joe_blogs123@gmail.com");
        cy.get('textarea.feedback-input').type("How can I learn Cypress?");
        cy.get('[type="submit"]').click();
    });

    // email 이 없이 요청을 보내 에러 메시지를 출력 해 줍니다.
    // it.only 를 하면 이 테스트 케이스만 실행이 됩니다.
    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type('Tom'); // 자동으로 first_name input 에 type 을 이용하여 Joe 를 입력 해 줍니다.
        cy.get('[name="last_name"]').type("blogs");
        cy.get('textarea.feedback-input').type("How can I learn Cypress?");
        cy.get('[type="submit"]').click();
    });
});