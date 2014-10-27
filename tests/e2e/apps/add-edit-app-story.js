/**
 * Created by rodrigopavezi on 10/21/14.
 */
describe("Add or Edit Apps", function() {

    beforeEach(function() {
        browser.get('#/apps');
    });

    xit("should go to add page when clicking on Add a New App button", function() {
        element(by.buttonText('Add a New App')).click();
        expect(browser.getLocationAbsUrl()).toMatch("/apps/add");
    });

    it("should have a form with App name, Description, Client Id and Url fields on the add app page", function() {
        browser.get('#/apps/add');
        expect(element(by.id("appNameLabel")).getText()).toEqual("App Name");
        expect(element(by.id("appDescriptionLabel")).getText()).toEqual("Description");
        expect(element(by.id("appClientIdLabel")).getText()).toEqual("Client Id");
        expect(element(by.id("appUrlLabel")).getText()).toEqual("Url");
    });


});