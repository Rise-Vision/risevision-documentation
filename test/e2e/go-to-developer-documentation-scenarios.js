/**
 * Created by rodrigopavezi on 10/21/14.
 */
(function() {

    "use strict";

    var chai = require("chai");
    var chaiAsPromised = require("chai-as-promised");

    chai.use(chaiAsPromised);
    var expect = chai.expect;

    var fs = require("fs");

    browser.driver.manage().window().setSize(1280, 768);

    describe("Go to Developer Documentation", function () {

        beforeEach(function () {
            browser.get('/documentation');
        });


        it("should show user documentation when /user is accessed", function() {
            expect(browser.getLocationAbsUrl()).to.eventually.have.string("/documentation");
        });

        it("should show user documentation title", function() {
            expect(browser.getTitle()).to.eventually.equal("Rise Vision Developer Documentation | Rise Vision API");
        });

    });
})();
