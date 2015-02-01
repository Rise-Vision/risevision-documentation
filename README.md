# Rise Vision Documentation [![Circle CI](https://circleci.com/gh/Rise-Vision/risevision-documentation.svg?style=svg)](https://circleci.com/gh/Rise-Vision/risevision-documentation)

## Introduction

Rise Vision Documentation is an application built with [Jekyll](http://jekyllrb.com/) its plugin and our [Common-header](https://github.com/Rise-Vision/common-header) to provide a space for all rise vision documentation.

Project Name works in conjunction with [Rise Vision](http://www.risevision.com), the [digital signage management application](http://rva.risevision.com/) that runs on [Google Cloud](https://cloud.google.com).

At this time Chrome is the only browser that this project and Rise Vision supports.

## Built With
- *[Jekyll](http://jekyllrb.com/)*
- *[jekyll-lunr-js-search](https://github.com/slashdotdash/jekyll-lunr-js-search)*
- *[jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap)*
- *[jekyll_github_sample](https://github.com/bwillis/jekyll-github-sample)*
- *[bundler](http://bundler.io/)*
- *[Bower](http://bower.io/)*
- *[NPM](https://www.npmjs.org/)*
- *[Gulp.js](http://gulpjs.com/)*
- *[Common-Style](http://rise-vision.github.io/style-guide/)*
- *[common-header](https://github.com/Rise-Vision/common-header)*
- *[AngularJs](https://angularjs.org/)*
- *[JQuery](http://jquery.com/)*

## Development

### Local Development Environment Setup and Installation

* install the latest version of Ruby on your environment 
* Note: for Windows you need to have Ruby with devkit and python 2 installed, run "gem install jekyll" once these are installed
* install npm


* install Bundler 
```bash
gem install bundler
```

* clone the repo using Git to your local:
```bash
git clone https://github.com/Rise-Vision/risevision-documentation.git
```

* install all javascript libs such as gulp
```bash
npm install
```


* install jekyll and its plugins
```bash
gulp bundle-install
```

* download components with bower
```bash
gulp bower-clean-install
```

* Build application
```bash
gulp jekyll-build 
```

* You can write new docs under the _post directory. Folders inside this directory are used to separate the content. 
Pay attention on the YAML front matter block when creating a new post: 
```markdown
---
layout: post
title:  "Companies"
date:   2014-10-01 10:52:00
category: developer/core-api
parent-order: 0
order: 0
---
```

as *category*, *parent-order* and *order* variables are used to generate the sidebar menu. 

For further info please look at [Jekyll Documentation](http://jekyllrb.com/docs/home/)

### Run Local

* under the root directory run gulp default task which will build and watch directories for changes 
so building and reloading the browser after a change
```bash
gulp
```

* If browser hasn't opened, you can open it on http://localhost:8000

### Dependencies


### Testing

## Submitting Issues
If you encounter problems or find defects we really want to hear about them. If you could take the time to add them as issues to this Repository it would be most appreciated. When reporting issues please use the following format where applicable:

**Reproduction Steps**

1. did this
2. then that
3. followed by this (screenshots / video captures always help)

**Expected Results**

What you expected to happen.

**Actual Results**

What actually happened. (screenshots / video captures always help)

## Contributing
All contributions are greatly appreciated and welcome! If you would first like to sound out your contribution ideas please post your thoughts to our [community](http://community.risevision.com), otherwise submit a pull request and we will do our best to incorporate it.

Submitting a pull request begins with creating a branch off of master and should be named something relevant to the changes being made. For example, edits to this README could be called doc/readme-changes.
```bash
git branch doc/readme-changes
```
Remember to switch to the newly created branch before making any changes.
```bash
git checkout doc/readme-changes
```
Once changes have been made with your preferred markdown editor and saved, tell git to add the file(s) to your local staging area.
```bash
git add README.md
```
The current status can be checked at any point during the above steps with the following command:
```bash
git status
```
Be sure to set up your contact information if you haven't already:
```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```
To commit your changes in preparation for submitting the pull request to github, issue the commit command and be sure to include a message that describes the changes you've made:
```bash
git commit -m "updated readme to expand the contributing section"
```
Finally, you're ready to submit your changes:
```bash
git push origin doc/readme-changes
```

### Languages

In order to support languages i18n needs to be added to this repository.  Please refer to our Suggested Contributions.

### Suggested Contributions
- We could use i18n Language Support

## Resources
If you have any questions or problems please don't hesitate to join our lively and responsive community at http://community.risevision.com.

If you are looking for user documentation on Rise Vision please see http://www.risevision.com/help/users/

If you would like more information on developing applications for Rise Vision please visit http://www.risevision.com/help/developers/.

**Facilitator**

[Rodrigo Serviuc Pavezi](https://github.com/rodrigopavezi "Rodrigo Serviuc Pavezi")
