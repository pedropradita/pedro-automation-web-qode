Introduction
Cypress testing with Mocha HTML report for UI Automation

Includes
1. OOP
2. POM
3. Dynamic URL with enviroment setup for pipeline
4. HTML report with screenshot and video 

Pre-Requisite
1.  Install Node.js
2.  npm init

To run test 
1. All cases headless = npx cypress run
2. All cases with browser chrome = npx cypress run --headed --browser chrome
3. Specific scenario = npx cypress run --spec cypress/e2e/login.cy.js
4. Specific case, add this first
    Add this to the specific case = it.only
5. Specific with environment, run this first
    export CYPRESS_ENV=staging 
    or
    export CYPRESS_ENV=prod

To see result
1.  go to reports/
2.  click index.html
