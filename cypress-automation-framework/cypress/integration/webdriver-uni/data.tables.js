/// <reference types="Cypress" />
describe("Handling data via webdr...", () => {
      beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
      });

      it("Calculate and assert the total age of all users", () => {
        let userDetails = []; // td를 반복문으로 돌리면서 출력합니다.
        let numb = 0;

        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text();   
        }).then(() => {
            let i;

            for (i = 0; i < userDetails.length; i++) {
                // if 문이 true 와 같으면 우리가 한 것은 그 특정 숫자를 추출한 것.
                if(Number(userDetails[i])) {
                    numb += Number(userDetails[i])
                }
                // cy.log(userDetails[i])
            }
            cy.log("Found total age: " + numb)
            expect(numb).to.eq(322)
         })
      });


      // 주어진 나이에 맞게 평가를 하겠다.
      it.only("Calculate and assert the age of a given user based on last name", () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            // Woods Lastname 이라면? Age는 80 이 나와야 합니다.
            if(text.includes("Woods")) {
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {
                    const userAge = age.text(); 
                    expect(userAge).to.equal("80")
                }) // index 
            }
        })
    });
});
    
    