const {expect, AssertionError} = require("chai");

exports.Actionwords = {
  theUserIsOnTheSignupPage: async function () {
    const signupUrl = "https://cp.mombasa.sasalog.com/index.php/apply";
    await this.page.goto(signupUrl);
    expect(this.page.url()).equal(signupUrl);
  },
  userFillsInTheirDetailsP1P2P3P4P5AndClicksSaveAndContinue: async function (fullname, username, email, password, phoneno) {
    await this.page.type("#sfApplyApply_fullname", fullname);
    await this.page.type("#sfApplyApply_username", username);
    await this.page.type("#sfApplyApply_email", email);
    await this.page.type("#sfApplyApply_email2", email);
    await this.page.type("#sfApplyApply_password", password);
    await this.page.type("#sfApplyApply_password2", password);
    await this.page.type("#sfApplyApply_mobile", phoneno);
    await this.page.select("#sfApplyApply_registeras", "3");
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click("#submit_app"),
    ]);
  },
  userFillsInAdditionalDetailsP1P2P3P4P5AndClicksSubmit: async function (company, id_passport, company_regno, regno, email) {
    expect(this.page.url()).equal("https://cp.mombasa.sasalog.com/index.php");
    await this.page.type("#element_2", company);
    await this.page.type("#element_5", id_passport);
    await this.page.type("#element_7", company_regno);
    await this.page.type("#element_3", regno);
    await this.page.type("#element_4", email);
    await this.page.select("#element_6", "1");
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click("#submit_form"),
    ]);
  },
  loginIsSuccessfulAndUserLandsOnTheirDashboard: function () {
    expect(this.page.url()).to.equal("https://cp.mombasa.sasalog.com/index.php/dashboard");
  },
  theUserIsOnTheLoginPage: async function () {
    const loginUrl = "https://cp.mombasa.sasalog.com/index.php/login";
    await this.page.goto(loginUrl);
    expect(this.page.url()).equal(loginUrl);
  },
  userInputsCorrectP1PlusP2AndClicksSignIn: async function (username, password) {
    await this.page.type("#signin_username", username);
    await this.page.type("#signin_password", password);
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click("form button"),
    ]);
  }
};