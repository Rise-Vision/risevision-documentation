/**
 * Created by rodrigopavezi on 10/22/14.
 */
describe("Register Developer", function() {

    beforeEach(function () {
        browser.get('#/apps');
    });

    it("should show developer registration when /developer-registration is accessed", function(){
        browser.get('#/apps/developer-registration');
        expect(browser.getLocationAbsUrl()).toMatch("/apps/developer-registration");
    });

    it("should go to developer registration page when clicking on the Register as a developer button", function() {
       element(by.id("registerAsDeveloperButton")).click();
       expect(browser.getLocationAbsUrl()).toMatch("/apps/developer-registration");
    });
});