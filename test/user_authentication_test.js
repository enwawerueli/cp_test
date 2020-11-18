const puppeteer = require("puppeteer");

describe('User authentication', function () {

  this.timeout(0);

  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
  });

  beforeEach(async function () {
    this.browser = await puppeteer.launch(/*{headless: false, slowMo: 100, defaultViewport: null}*/);
    this.page = await this.browser.newPage();
    this.page.setDefaultTimeout(0);
  });
  
  afterEach(async function () {
    await this.browser.close();
  });

  describe('User wants to signup', function () {
    async function userWantsToSignup (fullname, username, email, password, phoneno, company, id_passport, company_regno, regno) {
      // Given The user is on the signup page
      await this.actionwords.theUserIsOnTheSignupPage.call(this);
      // When User fills in their details: "<fullname>", "<username>", "<email>", "<password>", "<phoneno>" and clicks `Save and Continue`
      await this.actionwords.userFillsInTheirDetailsP1P2P3P4P5AndClicksSaveAndContinue.call(this, fullname, username, email, password, phoneno);
      // And User fills in additional details: "<company>", "<id_passport>", "<company_regno>", "<regno>", "<email>" and clicks `Submit`
      await this.actionwords.userFillsInAdditionalDetailsP1P2P3P4P5AndClicksSubmit.call(this, company, id_passport, company_regno, regno, email);
      // Then Login is successful and user lands on their dashboard
      this.actionwords.loginIsSuccessfulAndUserLandsOnTheirDashboard.call(this);
    }

    it('', async function () {
      await userWantsToSignup.apply(this, ['Joe Woods', 'jwoods', 'jwoods@sasalog.com', '123456', '0790122041', 'Build Construction', '0287479', 298757, 'P958']);
    });
  });


  describe('User wants to login', function () {
    async function userWantsToLogin (username, password) {
      // Given The user is on the login page
      await this.actionwords.theUserIsOnTheLoginPage.call(this);
      // When User inputs correct "<username>" plus "<password>" and clicks `SignIn`
      await this.actionwords.userInputsCorrectP1PlusP2AndClicksSignIn.call(this, username, password);
      // Then Login is successful and user lands on their dashboard
      this.actionwords.loginIsSuccessfulAndUserLandsOnTheirDashboard.call(this);
    }

    it('', async function () {
      await userWantsToLogin.apply(this, ['elixa', '123456']);
    });
  });
});
