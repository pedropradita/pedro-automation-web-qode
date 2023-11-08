import Dashboard from "../page-objects/dashboard-page.js";
import DetailPage from "../page-objects/detail-page.js";
import LoginPage from "../page-objects/login-page.js";

const dashboard = new Dashboard();
const detailPage = new DetailPage();
const loginPage = new LoginPage();

let data;

describe("Login", () => {
  before("Login", () => {
    cy.fixture("variables").then((x) => {
      data = x;
    });
  });

  beforeEach("Login", () => {
    cy.visit("/");
  });

  it("Verify redirect URL from signin button on detail page", () => {
    dashboard.clickFirstJobList();
    detailPage.clickSigninButton();
    cy.url().should("include", data.redirectUrlLoginButtonExpected);
  });

  it("Verify redirect URL from signin button on dashboard", () => {
    cy.wait(1000);
    dashboard.clickSigninButton();
    cy.url().should("contain", data.redirectUrlLoginButtonDashboardExpected);
  });

  it("Verify redirect URL from signin view more button on dashboard", () => {
    cy.wait(1000);
    dashboard.clickSigninViewMoreButton();
    cy.url().should("contain", data.redirectUrlLoginButtonDashboardExpected);
  });

  it("Verify success send verification link from signin button on detail page", () => {
    dashboard.clickFirstJobList();
    detailPage.clickSigninButton();
    loginPage.inputEmail(data.email);
    loginPage.clickSendVerificationButton();
    loginPage.successVerificationEmailText().then((text) => {
      let emailActual = text;
      assert.equal(emailActual, data.email);
    });
  });

  it("Verify success send verification link from signin button on dashboard", () => {
    cy.wait(1000);
    dashboard.clickSigninButton();
    loginPage.inputEmail(data.email);
    loginPage.clickSendVerificationButton();
    loginPage.successVerificationEmailText().then((text) => {
      let emailActual = text;
      assert.equal(emailActual, data.email);
    });
  });

  it("Verify success send verification link from signin view more button on dashboard", () => {
    cy.wait(1000);
    dashboard.clickSigninViewMoreButton();
    loginPage.inputEmail(data.email);
    loginPage.clickSendVerificationButton();
    loginPage.successVerificationEmailText().then((text) => {
      let emailActual = text;
      assert.equal(emailActual, data.email);
    });
  });

  it.skip("Verify login with google SSO from signin button on dashboard", () => {
    cy.wait(1000);
    dashboard.clickSigninButton();
    loginPage.clickGmailButton();
  });
});
