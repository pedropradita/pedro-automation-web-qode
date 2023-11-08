class Dashboard {
  searchField = ".css-fyyigg";
  searchFieldPopup = ".css-173o56n";
  filterButton = ".css-190g5fb";
  resultFilter = ".chakra-stack.css-qzvunm";
  jobFoundFilter = ".css-7v9435";
  jobNotFoundFilter = ".css-4bhf8b";
  signinButton = ".css-pjzsaa > .chakra-button";
  signinViewMoreButton = ".css-1hffkzf > .chakra-button";
  firstJobName = ":nth-child(2) > .css-1v2a002";
  firstJobcompany =
    ":nth-child(2) > .css-b9l1nz > .css-xqf2g8 > .css-19er31c > .chakra-stack > .css-98p5vh";
  firstJobCountry =
    ":nth-child(2) > .css-b9l1nz > .css-xqf2g8 > .css-19er31c > .chakra-stack > .css-1mqq2he > .chakra-text";
  firstJobCity =
    ":nth-child(2) > .css-b9l1nz > .css-xqf2g8 > .css-19er31c > .chakra-stack > .css-1mqq2he > .chakra-text";
  jobCityWithoutCity = ".css-qzvunm > :nth-child(4)";
  firstJobWorkType =
    ":nth-child(2) > .css-b9l1nz > .css-nez2bf > .css-1p3q773 > .css-1m6lxlp > .chakra-text";
  firstJobSalary =
    ":nth-child(2) > .css-b9l1nz > .css-nez2bf > .css-1rs0p3g > .css-15rjw51 > .css-56hofp";
  firstJobTags = ":nth-child(2) > .css-aflxt4 > .css-1bb3wt3";

  firstJobTagsText() {
    return cy.get(this.firstJobTags).invoke("text");
  }

  firstJobSalaryText() {
    return cy.get(this.firstJobSalary).invoke("text");
  }

  firstJobWorkTypeText() {
    return cy.get(this.firstJobWorkType).invoke("text");
  }

  clickJobCityWithoutCity() {
    return cy.get(this.jobCityWithoutCity).click();
  }

  firstJobCityText() {
    return cy.get(this.firstJobCity).invoke("text");
  }

  firstJobCountryText() {
    return cy.get(this.firstJobCountry).invoke("text");
  }

  firstJobCompanyText() {
    return cy.get(this.firstJobcompany).invoke("text");
  }

  firstJobNameText() {
    return cy.get(this.firstJobName).invoke("text");
  }

  clickFirstJobList() {
    cy.get(this.firstJobName).click();
  }

  clickSigninViewMoreButton() {
    cy.get(this.signinViewMoreButton).click();
  }

  clickSigninButton() {
    cy.get(this.signinButton).click();
  }

  jobNotFindTextsIsVisible() {
    return cy.get(this.jobNotFoundFilter).should("be.visible");
  }

  jobFoundTextIsVisible() {
    return cy.get(this.jobFoundFilter).should("be.visible");
  }

  resultFilterTexts() {
    return cy.get(this.resultFilter).find("p").first();
  }

  clickfilterButton() {
    cy.get(this.filterButton).click();
  }

  clickSearchField() {
    cy.get(this.searchField).click();
  }

  inputSearchFieldPopup(text) {
    cy.get(this.searchFieldPopup).type(text);
  }
}

export default Dashboard;
