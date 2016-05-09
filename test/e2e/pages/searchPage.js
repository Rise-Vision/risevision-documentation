"use strict";
var SearchPage = function() {

  var searchInput = element(by.id('search-query'));

  var searchResultsPanel = element(by.id("search-results"));

  var searchResults = element.all(by.css("#search-results article"));

  this.getSearchInput = function(){
    return searchInput;
  };

  this.getSearchResultsPanel = function() {
    return searchResultsPanel;
  };

  this.getSearchResults = function() {
    return searchResults;
  };
}

module.exports = SearchPage;