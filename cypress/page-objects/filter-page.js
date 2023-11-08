class FilterPage {
  onsiteButton = ".css-7kqn8v";
  hybridButton = ".css-18g67rq";
  remoteButton = ".css-17ppayn";
  fulltimeButton = ".css-18y7tct";
  freelanceButton = ".css-3e8uk5";
  parttimeButton = ".css-cz4np3";
  contractButton = ".css-j3fo9v";
  confirmButton = ".chakra-modal__footer > .chakra-button";

  clickConfirmButton() {
    cy.get(this.confirmButton).click();
  }

  clickContractButton() {
    cy.get(this.contractButton).click();
  }

  clickParttimeButton() {
    cy.get(this.parttimeButton).click();
  }

  clickFreelanceButton() {
    cy.get(this.freelanceButton).click();
  }

  clickFulltimeButton() {
    cy.get(this.fulltimeButton).click();
  }

  clickRemoteButton() {
    cy.get(this.remoteButton).click();
  }

  clickHybridButton() {
    cy.get(this.hybridButton).click();
  }

  clickOnsiteButton() {
    cy.get(this.onsiteButton).click();
  }
}

export default FilterPage;
