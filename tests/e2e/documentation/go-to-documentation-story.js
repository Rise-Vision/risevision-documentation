/**
 * Created by rodrigopavezi on 10/21/14.
 */
describe("Go to Documentation", function() {

    beforeEach(function() {
        browser.get('index.html');
    });

    it("should show documentation when /documentation is accessed", function() {
        browser.get('#/documentation');
        expect(browser.getLocationAbsUrl()).toMatch("/documentation");
    });

    it("should show documentation when clicked on the documentation button on the common header", function() {
        element(by.cssContainingText('.ng-binding', 'Documentation')).click();
        expect(browser.getLocationAbsUrl()).toMatch("/documentation");
    });
});