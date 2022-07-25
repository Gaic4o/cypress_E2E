/// <reference types="Cypress" />

describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {
        //cypress code 
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({force: true})

        cy.get('#button1').click()

        cy.on('window:alert', (str) => { 
            expect(str).to.equal('I am an alert box!')
        })
    });

    it("Validate js confirm alert box works correctly when clicking ok", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        cy.get('#button4').click()

        cy.on('window:confirm', (str) => {
            return true; 
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    });

   
    it("Validate js confirm alert box works correctly when clicking cancel", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        cy.get('#button4').click()
        
        cy.on('window:confirm', (str) => {
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });


    it.only("Validate js confirm alert box using a stub", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        const stub = cy.stub();
        cy.on('window:confirm', stub) // 이벤트를 가지고 있습니다., Javascript 경고가 발생하는 즉시 이벤트 중단.
        
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!') // 호출이 제공된 인수 및 가능한 다른 인수를 수신한 경우 true 리턴하는 것을 볼 수 있습니다.
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!') // then callback 함수로 성공 시 You pressed OK 메시지 출력.
        })
    });

    
});