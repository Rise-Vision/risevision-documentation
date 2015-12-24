"use strict";

angular.module("risevision.banner.tracking", [
   "risevision.common.components.analytics"
])

  .service("bannerTracking", ["segmentAnalytics",
    function (segmentAnalytics) {

      this.promoBannerClicked = function (productName, source, userIsSignedIn, inRVAFrame) {
         segmentAnalytics.track("Promotional Banner Clicked", {
          "Product Name": productName,
          "Source": source,
          "user Signed In": userIsSignedIn,
          "inApp": inRVAFrame
        });
      };

      this.track = function (eventName, properties) {
        segmentAnalytics.track(eventName, properties);
      };

  }]);
