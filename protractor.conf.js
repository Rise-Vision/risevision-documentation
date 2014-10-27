/**
 * Created by rodrigopavezi on 10/21/14.
 */
exports.config = {

    baseUrl: 'http://localhost:8002',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};