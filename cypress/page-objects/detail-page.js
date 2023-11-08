class DetailPage {
  detailJobName = ".chakra-text.css-1e11nn2";
  detailJobCompany = ".css-1miuczt";
  detailJobCountry = ".css-cis3xp > :nth-child(2) > :nth-child(2)";
  detailJobCity = ".css-cis3xp > :nth-child(2) > :nth-child(4)";
  detailJobCityLengh = ".chakra-stack.css-1igwmid:nth-child(2) > p";
  detailJobWorkType = ".css-z7mtfw > .chakra-stack > :nth-child(1)";
  detailJobSalary = ".css-cis3xp > :nth-child(3) > .chakra-text";
  detailJobTags = ".css-1jt8kx2";
  detailSigninButton = "a > .chakra-button";
  detailDescription = "div[aria-label='Description']";
  detailCopyUrlButton = ".css-1n3476y";
  detailSuccessCopyUrlAlert = "div > div[role='alert'] > p";

  detailSuccessCopyUrlAlertText() {
    return cy.get(this.detailSuccessCopyUrlAlert).invoke("text");
  }

  detailSuccessCopyUrlAlertIsvisible() {
    return cy.get(this.detailSuccessCopyUrlAlert).should("be.visible");
  }

  clickDetailCopyUrlButton() {
    return cy.get(this.detailCopyUrlButton).click();
  }

  detailDescriptionIsvisible() {
    return cy.get(this.detailDescription).should("be.visible");
  }

  clickSigninButton() {
    cy.get(this.detailSigninButton).click();
  }

  detailSigninButtonIsvisible() {
    return cy.get(this.detailSigninButton).should("be.visible");
  }

  detailJobTagsText() {
    return cy.get(this.detailJobTags).invoke("text");
  }

  detailJobSalaryText() {
    return cy.get(this.detailJobSalary).invoke("text");
  }

  detailJobWorkTypeText() {
    return cy.get(this.detailJobWorkType).invoke("text");
  }

  detailJobCityLenght() {
    return cy.get(this.detailJobCityLengh);
  }

  detailJobCityText() {
    return cy.get(this.detailJobCity).invoke("text");
  }

  detailJobCountryText() {
    return cy.get(this.detailJobCountry).invoke("text");
  }

  detailJobCompanyText() {
    return cy.get(this.detailJobCompany).invoke("text");
  }

  detailJobNameText() {
    return cy.get(this.detailJobName).invoke("text");
  }
}

export default DetailPage;
