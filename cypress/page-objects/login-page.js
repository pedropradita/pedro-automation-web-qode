class LoginPage {
  gmailField = "#identifierId";
  gmailButton = ".css-9049xm";
  emailField = ".chakra-input";
  sendVerificationButton = ".css-18efwaz";
  successVerificationEmail = ".css-o10w11";

  successVerificationEmailText() {
    return cy.get(this.successVerificationEmail).invoke("text");
  }

  clickSendVerificationButton() {
    cy.get(this.sendVerificationButton).click();
  }

  inputEmail(email) {
    cy.get(this.emailField).type(email);
  }

  clickGmailButton() {
    cy.get(this.gmailButton).click();
  }

  inputEmailGmail(email) {
    cy.get(this.gmailField).type(email);
  }
}

export default LoginPage;
