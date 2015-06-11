"use strict";
var NotFoundPage = function() {

  var title = element(by.css('.post-title'));

  var prerenderStatusCodeMetaTag = element(by.xpath("//meta[@name='prerender-status-code']"));

  this.getTitle = function(){
    return title;
  };

  this.getPrerenderStatusCodeMetaTag = function() {
    return prerenderStatusCodeMetaTag;
  };
}

module.exports = NotFoundPage;