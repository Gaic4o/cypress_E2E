/// <reference types="Cypress" />

describe("Test Datepicker via webdriveruni", () => {
    it("Select date from the datepicker", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force: true})
        cy.get('#datepicker').click();


        // let date = new Date(); // 날짜 초기화. 
        // date.setDate(date.getDate()) // 날짜 설정 - 명령 날짜를 사용하여 현재. 
        // cy.log(date.getDate()); // get current day i.e. 22 

        // let date2 = new Date(); 
        // date2.setDate(date.getDate() + 5) 
        // cy.log(date2.getDate()); // get current day i.e. 22 + 5 = 27 

        let date = new Date();
        date.setDate(date.getDate() + 200); // 300 일을 추가하면 미래의 1년과 1개월을 선택해야 합니다.

        let futureYear = date.getFullYear();
        let futureMonth = date.toLocaleString("default", {month: "long"});
        let futureDay = date.getDate();

        cy.log("Future year to select: "+ futureYear); // 2022 
        cy.log("Future month to select: " + futureMonth); // 8
        cy.log("Future day to select: " + futureDay); // 27

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(futureYear)) { // 미래 연도를 포함하지 않았을 경우. 
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureYear)) { // 미래 연도를 포함하지 않았을 경우. 
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }

        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click(); 
        }
        
        selectMonthAndYear();
        selectFutureDay();
    });
});