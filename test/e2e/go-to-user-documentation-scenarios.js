/**
 * Created by rodrigopavezi on 10/21/14.
 */
(function() {

    "use strict";

    var chai = require("chai");
    var chaiAsPromised = require("chai-as-promised");
    var SearchPage = require('./pages/searchPage.js');

    chai.use(chaiAsPromised);
    var expect = chai.expect;

    var fs = require("fs");

    browser.driver.manage().window().setSize(1280, 768);

    var searchPage = new SearchPage();
    describe("Go to User Documentation", function () {

        beforeEach(function () {
            browser.get('/user');
        });


        it("should show user documentation when /user is accessed", function() {
            expect(browser.getLocationAbsUrl()).to.eventually.have.string("/user");
        });

        it("should show user documentation title", function() {
            expect(browser.getTitle()).to.eventually.equal("Rise Vision User Documentation | Rise Vision Help Documentation");
        });

        it("should show search input",function(){
            expect(searchPage.getSearchInput().isDisplayed()).to.eventually.be.true;
            expect(searchPage.getSearchResultsPanel().isDisplayed()).to.eventually.be.false;
        });

        it("should show search results", function(done){
            searchPage.getSearchInput().sendKeys("users").then(function(){
                browser.sleep(500);
                expect(searchPage.getSearchResultsPanel().isDisplayed()).to.eventually.be.true;
                expect(searchPage.getSearchResults().count()).to.eventually.be.above(1);
                done();
            });
        });

    });
})();