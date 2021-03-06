module.exports = function () {
  this.When(/^I visit the application root$/, function () {
    return this.browser.visit('/');
  });

  this.Then(/^I should see the GOV\.UK template$/, function () {
    this.expect(this.browser.query('.header-logo > #logo').href).to.equal('https://www.gov.uk/');
  });
};
