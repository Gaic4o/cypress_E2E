/// <reference types="Cypress" />


describe("Test File Upload via webdriveruni", () => {
    it("Upload a file....", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#file-upload").invoke('removeAttr', 'target').click({force: true}) 

        cy.fixture("142.png", "base64").then(fileContent => {
            cy.get("#myFile").attachFile(
                {
                    fileContent,
                    fileName: '142.png',
                    mimeType: 'image/png'
                },
                {
                    uploadType: 'input',
                }
            )
        })
        cy.get('#submit-button').click();
    });

    // 파일을 선택하지 않고 업로드를 할 경우.
    it("Upload a file....", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#file-upload").invoke('removeAttr', 'target').click({force: true}) 
        cy.get('#submit-button').click();
    });

});
