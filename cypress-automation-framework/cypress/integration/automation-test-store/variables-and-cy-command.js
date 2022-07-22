/// <reference types="Cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {

    it("Navigating to specific product pages", () => {
        cy.visit('https://automationteststore.com/')
        // The following will fail
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
        // makeupLink.click();
        // skincareLink.click();

        // The following will pass
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeupLink.click();

        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
        // skincareLink.click();

        // Recommended Approach 
        cy.get("a[href*='product/category&path=']").contains("Skincare").click();
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    });

    it("Navigating to specific product pages", () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact');
        cy.get("a[href*='product/category&path=']").contains("Makeup").click(); // 자동화 테스트 저장소, 헤더 탐색에서 여러 링크를 찾을 수 있습니다.
        
        // Following code will fail
        // const header = cy.get("h1 .maintext"); // header 
        // cy.log(header.text());

        cy.get("h1 .maintext").then(($headerText)=> {
            // 상수 입력하기.
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq('Makeup')
        })
    })


    it("Validate properties of the Contact Us Page", () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact');
        // cy.get("a[href*='product/category&path=']").contains("Makeup").click(); // 자동화 테스트 저장소, 헤더 탐색에서 여러 링크를 찾을 수 있습니다.

        // Uses cypress commands and chaining 
        // #Contact Us Form 에 id 가 field_11 First name div 를 찾고 - First name label? 
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name');

        // JQuery Approach  
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text();
            expect(firstNameText).to.contain('First name');            
        })

        // Embedded commands (Closure)
        cy.get('#field_11').then(fnText => {
            cy.log(fnText.text())
            cy.log(fnText)
        })
    })
});