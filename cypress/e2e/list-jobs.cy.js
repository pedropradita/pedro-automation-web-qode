import Dashboard from "../page-objects/dashboard-page.js";
import DetailPage from "../page-objects/detail-page.js";

const dashboard = new Dashboard();
const detailPage = new DetailPage();

let data;

describe("List Jobs", () => {
  before("List Jobs", () => {
    cy.fixture("variables").then((x) => {
      data = x;
    });
  });

  beforeEach("List Jobs", () => {
    cy.visit("/");
  });

  it("Verify the name of the first job list should equal on detail page", () => {
    let jobNameExpected;
    dashboard.firstJobNameText().then((text) => {
      jobNameExpected = text;
    });

    dashboard.clickFirstJobList();

    detailPage.detailJobNameText().then((text) => {
      let jobNameActual = text;
      assert.equal(jobNameActual, jobNameExpected);
    });
  });

  it("Verify the company of the first job list should equal on detail page", () => {
    let jobCompanyExpected;
    dashboard.firstJobCompanyText().then((text) => {
      jobCompanyExpected = text;
    });

    dashboard.clickFirstJobList();

    detailPage.detailJobCompanyText().then((text) => {
      let jobCompanyActual = text;
      assert.equal(jobCompanyActual, jobCompanyExpected);
    });
  });

  it("Verify the country of the first job list should equal on detail page", () => {
    let jobCountryExpected;
    dashboard.firstJobCountryText().then((text) => {
      const match = text.match(/- ([^\-]+) -/);
      jobCountryExpected = match[1];
      cy.log(jobCountryExpected);
    });

    dashboard.clickFirstJobList();

    detailPage.detailJobCountryText().then((text) => {
      let jobCountryActual = text;
      assert.equal(jobCountryActual, jobCountryExpected);
    });
  });

  it("Verify the city of the first job list should equal on detail page", () => {
    let jobCityExpected;
    dashboard.firstJobCityText().then((text) => {
      const parts = text.split("-");
      jobCityExpected = parts[parts.length - 1].trim();
      cy.log(jobCityExpected);
    });

    dashboard.clickFirstJobList();

    // To test the job list without city
    // dashboard.clickJobCityWithoutCity();

    detailPage.detailJobCityLenght().then((elements) => {
      if (elements.length === 1) {
        cy.log("The job list without city");
      } else {
        cy.log("The job list with city");
        detailPage.detailJobCityText().then((text) => {
          let jobCityActual = text;
          assert.equal(jobCityActual, jobCityExpected);
        });
      }
    });
  });

  it("Verify the work type of the first job list should equal on detail page", () => {
    let jobWorkTypeExpected;
    dashboard.firstJobWorkTypeText().then((text) => {
      jobWorkTypeExpected = text;
      cy.log(jobWorkTypeExpected);
    });

    dashboard.clickFirstJobList();

    detailPage.detailJobWorkTypeText().then((text) => {
      let jobWorkTypeActual = text;
      assert.equal(jobWorkTypeActual, jobWorkTypeExpected);
    });
  });

  it("Verify the salary of the first job list should equal on detail page", () => {
    let jobSalaryExpected;
    dashboard.firstJobSalaryText().then((text) => {
      jobSalaryExpected = text;
      cy.log(jobSalaryExpected);
    });

    dashboard.clickFirstJobList();

    detailPage.detailJobSalaryText().then((text) => {
      const parts = text.split(":");
      let jobSalaryActual = parts[parts.length - 1].trim();
      assert.equal(jobSalaryActual, jobSalaryExpected);
    });
  });

  it("Verify the tags of the first job list should equal on detail page", () => {
    let jobTagsExpected;
    dashboard.firstJobTagsText().then((text) => {
      jobTagsExpected = text.split(/(?=[A-Z])/).map((word) => word.trim());
      cy.log(jobTagsExpected);
    });

    dashboard.clickFirstJobList();

    detailPage.detailJobTagsText().then((text) => {
      let jobTagsActual = text.split(/(?=[A-Z])/).map((word) => word.trim());
      jobTagsExpected.forEach((keyword) => {
        expect(jobTagsActual).to.include(keyword);
      });
    });
  });

  it("Verify the signin button is visible on detail page", () => {
    dashboard.clickFirstJobList();
    detailPage.detailSigninButtonIsvisible();
  });

  it("Verify the description is visible on detail page", () => {
    dashboard.clickFirstJobList();
    detailPage.detailDescriptionIsvisible();
  });

  it("Verify the success copy url alert is visible on detail page", () => {
    dashboard.clickFirstJobList();
    detailPage.clickDetailCopyUrlButton();
    detailPage.detailSuccessCopyUrlAlertIsvisible();
    detailPage.detailSuccessCopyUrlAlertText().then((text) => {
      let successCopyUrlAlertActual = text;
      cy.log(successCopyUrlAlertActual);
      assert.equal(successCopyUrlAlertActual, data.successCopyUrlAlertExpected);
    });
  });
});
