import Dashboard from "../page-objects/dashboard-page.js";
import FilterPage from "../page-objects/filter-page.js";

const dashboard = new Dashboard();
const filterPage = new FilterPage();

let data;

describe("Filter List Jobs", () => {
  before("Filter List Jobs", () => {
    cy.fixture("variables").then((x) => {
      data = x;
    });
  });

  beforeEach("Filter List Jobs", () => {
    cy.visit("/");
  });

  it("Verify the onsite filter if job found the results should show else the banner not found should show", () => {
    cy.wait(1000);
    dashboard.clickfilterButton();
    filterPage.clickOnsiteButton();
    filterPage.clickConfirmButton();
    cy.wait(1000);
    cy.checkResultFilterText(
      dashboard.resultFilterTexts(),
      () => {
        dashboard.jobFoundTextIsVisible();
      },
      () => {
        dashboard.jobNotFindTextsIsVisible();
      }
    );
  });

  it("Verify the hybrid filter if job found the results should show else the banner not found should show", () => {
    cy.wait(1000);
    dashboard.clickfilterButton();
    filterPage.clickHybridButton();
    filterPage.clickConfirmButton();
    cy.wait(1000);
    cy.checkResultFilterText(
      dashboard.resultFilterTexts(),
      () => {
        dashboard.jobFoundTextIsVisible();
      },
      () => {
        dashboard.jobNotFindTextsIsVisible();
      }
    );
  });

  it("Verify the remote filter if job found the results should show else the banner not found should show", () => {
    cy.wait(1000);
    dashboard.clickfilterButton();
    filterPage.clickRemoteButton();
    filterPage.clickConfirmButton();
    cy.wait(1000);
    cy.checkResultFilterText(
      dashboard.resultFilterTexts(),
      () => {
        dashboard.jobFoundTextIsVisible();
      },
      () => {
        dashboard.jobNotFindTextsIsVisible();
      }
    );
  });

  it("Verify the full time filter if job found the results should show else the banner not found should show", () => {
    cy.wait(1000);
    dashboard.clickfilterButton();
    filterPage.clickFulltimeButton();
    filterPage.clickConfirmButton();
    cy.wait(1000);
    cy.checkResultFilterText(
      dashboard.resultFilterTexts(),
      () => {
        dashboard.jobFoundTextIsVisible();
      },
      () => {
        dashboard.jobNotFindTextsIsVisible();
      }
    );
  });

  it("Verify the freelance filter if job found the results should show else the banner not found should show", () => {
    cy.wait(1000);
    dashboard.clickfilterButton();
    filterPage.clickFreelanceButton();
    filterPage.clickConfirmButton();
    cy.wait(1000);
    cy.checkResultFilterText(
      dashboard.resultFilterTexts(),
      () => {
        dashboard.jobFoundTextIsVisible();
      },
      () => {
        dashboard.jobNotFindTextsIsVisible();
      }
    );
  });

  it("Verify the part time filter if job found the results should show else the banner not found should show", () => {
    cy.wait(1000);
    dashboard.clickfilterButton();
    filterPage.clickParttimeButton();
    filterPage.clickConfirmButton();
    cy.wait(1000);
    cy.checkResultFilterText(
      dashboard.resultFilterTexts(),
      () => {
        dashboard.jobFoundTextIsVisible();
      },
      () => {
        dashboard.jobNotFindTextsIsVisible();
      }
    );
  });

  it("Verify the contract filter if job found the results should show else the banner not found should show", () => {
    cy.wait(1000);
    dashboard.clickfilterButton();
    filterPage.clickContractButton();
    filterPage.clickConfirmButton();
    cy.wait(1000);
    cy.checkResultFilterText(
      dashboard.resultFilterTexts(),
      () => {
        dashboard.jobFoundTextIsVisible();
      },
      () => {
        dashboard.jobNotFindTextsIsVisible();
      }
    );
  });
});
