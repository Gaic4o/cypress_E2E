/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href$='contact']").click().then(function(linkText) {
            cy.log("Clicked on link using text: " + linkText.text())
        })
        // cy.get('.info_links_footer > :nth-child(5) > a').click();
        // cy.xpath("//a[contains(@href, 'contact')]").click();
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type('joe_blogs123@gmail.com');
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
        // cy.get('.col-md-6 > .btn').click();
        cy.get("button[title='Submit']").click();

        // should - 텍스트를 가지고 있다. 
        cy.get(".mb40 > :nth-child(3)").should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        console.log("Test has completed!"); // 먼저 실행 됩니다. 
        cy.log("Test has completed!");
    });
});