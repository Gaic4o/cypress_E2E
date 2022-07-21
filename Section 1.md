# Section 1

Cypress 4 가지 작업을 놀라울 정도로 간단히 만듭니다.

- 설치하거나, 구성할 서버, 드라이버 또는 기타 종속성이 없습니다.

테스트 작성.

- Cypress 로 작성된 테스트는 읽기 쉽고 이해하기 쉽습니다.
  
테스트 실행.

- Cypress 브라우저가 콘텐츠를 렌더링할 수 이쓴 속도로 실행됩니다.

디버깅.

- 읽을 수 있는 오류 메시즈는 신속하게 디버그 하는 데 도움이 됩니다.

cypress npm 사용자를 보면 추세가 계속 높아지는 추세.
cypress 가 다른 7가지 방법.
cypress 는 Selenium 을 사용하지 않습니다. 

간단 설치. npm install cypress --save-dev (외부 라이브러리 등을 다운로드 합니다. (Selenium WebDriver 와 다름)).
빠르고 매우 안정적 - Cyress 기본 웹 브라우저 언어인 Javascript 사용.

다른 아키텍처를 사용하고 브라우저 내에 직접 실행합니다.

- 플레이크 방지 - 페이지가 로드되는 순간과 순간에 Cypress 에 알림이 전송 됩니다, 페이지가 언로드 됩니다.
    API 테스팅 - API 를 테스트하고 모의하는 기능.

Cypress 는 - 모바일 테스트가 없습니다.


cypress 커뮤니티 - https://gitter.im/cypress-io/cypress


cypress 에는 버전이 여러 가지가 있습니다.
V6, V7, V8, V9, V10 .... 

이 과정은 주로 V8 을 사용합니다.
이 과정이 끝나면 최신 버전의 키프로스에 대해 설명하는 섹션이 표시 됩니다.

우린 버전 8을 사용하니까 버전 8을 설치 해주어야 합니다.
npm install --save-dev cypress@8.4.1 

cypress - 설치하면 여러가지 모듈이 설치됩니다.
Cypress 는 테스트를 대화식으로 실행하므로, 테스트 중인 응용 프로그램 또는 구성 요소를 보고 해당 DOM 탐색하면서 실행되는 명령을 볼 수 있습니다.

설치하면 폴더 구조는 이런 식으로 형성되어 있습니다.

cypress 

fixtures 
integration
plugins 
support


cypress.json - 기본 설정을 변경하기 위해 존재합니다.

- pageLoadTimeout, viewportHeight, viewportWidth ... 등이 있습니다.

support 폴더에는 2가지가 있습니다.

- commands.js, index.js 

index.js 에서는 추가 라이브러리, 이벤트 리스너 등을 추가할 수 있습니다. 
commands.js 에서는 일반적인 명령을 수용하는 데 사용 됩니다.



plugins 에는 index.js 가 있습니다.
index.js 에는 cypress 기능을 확장하는 기능을 추가 할 수 있습니다. 

Mocha 에서는 describe() 및 it() 2가지 함수를 호출 과 함께 사전 번들로 제공됩니다.
describe() 2개 인수 - 테스트 그룹의 이름, 콜백함수.
it() - 개별 테스트 케이스를 정의하는 데 사용 합니다.

먼저 할 일 .

1. exmaples - intergration 제거.


<reference types="Cypress" /> 이것을 입력 해주어야 vscode 검색어에 문법이 뜸.

node_modules/.bin/cypress open 테스트 실행.

click 은 DOM 요소를 클릭합니다.

``` javascript
cy.get('.btn').click() // click button
cy.focused().click() // click on el with focus 
cy.contains('Welcome').click() // click on first el containing 'Welcome'

cy.click('btn') // Errors, cannot be chained off 'cy'
cy.window().click() // Errors, 'window' does not yield DOM element 
```




2. type 은 DOM Element 를 가리킵니다.

``` javascript
.type(text)
.type(text, options) 
```

``` javascript
// Correct Usage 
cy.get('input').type('Hello, World'); // Type 'Hello, World' into the 'input'
cy.type('Welcome'); // Errors, cannot be chained off 'cy' 
cy.clock().type('www.cypress.io'); // Errors, 'clocks' does not yield DOM elements 
```
