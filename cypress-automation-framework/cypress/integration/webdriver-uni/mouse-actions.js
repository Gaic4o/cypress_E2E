/// <reference types="Cypress" />

describe("Test mouse actions", () => {
    it("Scroll element into view", () => {
        cy.visit("http://www.webdriveruniversity.com");
        // scrollIntoView 로 스크롤를 해서 -> id 가 #actions 를 클릭. 
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
    });

    it("I should be able to drag and drop a draggable item", () => {
        cy.visit("http://www.webdriveruniversity.com")
        
        // scrollIntoView 로 스크롤 해서 -> id 가 #actions 를 클릭.
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
         
        cy.get("#draggable").trigger('mousedown', { which: 1 } ); // id 가 draggable mousedown DOM 을 실행시킵니다. 
        cy.get("#droppable").trigger('mousemove').trigger('mouseup', { force: true } )  // droppable 에 mousemove 시켜 mouseup trigger 합니다.
    })


    it("I should be able hold down the left mouse click button on a given element", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({force: true})

        // mousedown 클릭하면 -> background-color 가 녹색으로 변합니다.
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    })
});
