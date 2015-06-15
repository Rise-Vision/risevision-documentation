/**
 * Created by rodrigopavezi on 10/21/14.
 */
(function() {

  "use strict";

  var chai = require("chai");
  var chaiAsPromised = require("chai-as-promised");
  var NotFoundPage = require('./pages/notFoundPage.js');

  chai.use(chaiAsPromised);
  var expect = chai.expect;

  var fs = require("fs");

  browser.driver.manage().window().setSize(1280, 768);

  describe("In order to see a nice not found page " +
    "As a user going to a non existent page " +
    "I would like to see the not found page", function () {

    var notFoundPage;
    beforeEach(function () {
      notFoundPage = new NotFoundPage();
    });

    it("should go to 404 URL when page is not found", function() {
      browser.get('/anyThingThatDoesNotExistPage');
      expect(browser.getLocationAbsUrl()).to.eventually.have.string("/404");
    });

    it("should go to 404 URL when page is not found and link starts with user", function() {
      browser.get('/user/anyThingThatDoesNotExistPage');
      expect(browser.getLocationAbsUrl()).to.eventually.have.string("/404");
    });

    it("should go to 404 URL when page is not found and link starts with developer", function() {
      browser.get('/developer/anyThingThatDoesNotExistPage');
      expect(browser.getLocationAbsUrl()).to.eventually.have.string("/404");
    });

    it("should show the not found title", function() {
      browser.get('/anyThingThatDoesNotExistPage');
      expect(notFoundPage.getTitle().getText()).to.eventually.equal("Sorry, this page can't be found");
    });

    it("should contain the prerender.io metadata tag", function() {
      browser.get('/anyThingThatDoesNotExistPage');
      expect(notFoundPage.getPrerenderStatusCodeMetaTag().isPresent()).to.eventually.be.true;
      expect(notFoundPage.getPrerenderStatusCodeMetaTag().getAttribute('content')).to.eventually.equal("444");
    });

  });
})();