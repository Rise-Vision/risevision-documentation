---
layout: post
title:  "Setting Up Test Environment"
date:   2014-10-01 10:52:00
category: developer/common-header
parent-order: 0
order: 4
---

## End-to-End testing

At present there is no out-of-the-box E2E test solution available for Common Header-enabled apps (while a solution that uses Google App Engine local dev server is under investigation). However, CH comes with a comprehensive implementation of [GAPI mock](https://github.com/Rise-Vision/common-header/blob/master/test/gapi-mock.js) which is used internally for testing some of its core functionalities. You can set up your own E2E test environment relatively easily by copying and modifying ```gapi-mock``` in your own project.

Checklist:

- Copy ```gapi-mock.js```, and the ```gapi-mock-data``` folder from Common Header source code to your project's ```test``` folder
- Include gapi-mock.js in your E2E test's entry-point HTML page (e.g. ```index-e2e.html```). ```gapi-mock``` will automatically replace the actual Google Client library with its own mocked version.
- Write protractor test cases that navigates to your entry-point page and performs tests (Some examples can be found [here](https://github.com/Rise-Vision/common-header/tree/master/test/e2e).).
- Set up gulp tasks that spins up a static file server and runs E2E tests. It is recommended to use [Gulp Task Factory](https://github.com/Rise-Vision/widget-tester) for this purpose. (See example task definitions, ```"test:e2e"``` here: https://github.com/Rise-Vision/common-header/blob/master/gulpfile.js). Note that in order to use the factory tasks, you need to place all your protractor test files under ```/test/e2e``` in your project and suffix your test files with ```-scenarios.js```.
