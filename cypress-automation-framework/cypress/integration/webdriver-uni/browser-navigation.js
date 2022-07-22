/// <reference types="Cypress" />

describe("Validate webdriveruni homepage links", () => {
    it("Confirm links redirect to the correct pages", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force: true})
        cy.url().should('include', 'contactus') // Contact Us 페이지에 도달해는 지 확인하기 위해 어설션을 수행. 

        cy.go('back') // 뒤로 돌아가기
        cy.reload() // 다시 페이지 로드
        cy.url().should('include', 'http://www.webdriveruniversity.com')
        // cy.reload(true) // reload without using cache 

        cy.go('forward') // 앞으로 이동, 버튼을 클릭하고 연락처로 돌아갔습니다.
        cy.url().should('include', 'contactus') // Contact US 페이지에 방문. 

        cy.go('back') // 뒤로 다시 홈페이지로 이동
        cy.get("#login-portal").invoke('removeAttr', 'target').click({ force: true }) // 로그인 포탈를 클릭한 후 
        cy.url().should('include', 'Login-Portal') // 포털에 올바르게 도착. 
        cy.go('back') // 

        // to-do-list
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force: true })
        cy.url().should('include', 'To-Do-List')
        cy.go('back')
    });
});