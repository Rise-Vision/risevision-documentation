---
layout: developer-post
title:  "Subscription Status API"
date:   2014-10-13 10:52:00
category: developer/store-api/subscription-status
order: 2
---

You can call Store Product Status API from anywhere, there is no authentication.

You do however need to know the ID of the Company in the Rise Vision platform  as well the Product Codes of the product(s).

To call Store Product Status API, send the following GET request over SSL: 

##Subscription Status API Endpoint

To call Store Authorization API, send the following GET request **over SSL**:

`https://store-dot-rvaserver2.appspot.com/v1/company/{cid}/product/status?pc={product_codes}`

**API Parameters**
 
`cid` REQUIRED is id of the Company that uses the application. When cid is used, all Displays that belong to the Company will be authorized to use the Application or Widget.

`pc` REQUIRED is the Product Code we issued for your Widget

**API Response**

`
[{"pc": product_code1, "status": status1, "expiry": yyyy-MM-ddThh:mm:ss.sssZ, "trialPeriod": trial_period_days}, {"pc": product_code2, "status": status2, "expiry": yyyy-MM-ddThh:mm:ss.sssZ, "trialPeriod": trial_period_days} … ]
`

**API Response Parameters**

`pc` is the Product Code from the comma-separated list passed in request

`status` is the status of the Product for the Company as per table above

`expiry` is the expiry date of the subscription (if subscribed) or trial (if trying the product) and null in all other cases.

`trialPeriod` is the trial period in days

_ _ _

**Available Statuses**

| Value       | Description |
|:------------|:------------|
| `Free` | This is a free product, it has no trial period. Any company can use it at no cost. |
| `Not Subscribed` | Company has no subscription for this product and the product does not offer a trial. Use the field trialPeriod to determine if the product has an available trial period. |
| `On Trial` | Company is trying this product and the trial is still ongoing. |
| `Trial Expired` | Company was trying this product and the trial has expired. |
| `Subscribed` | Company has a Subscription for this product and the subscription is active. |
| `Cancelled` | Company had a subscription for this product and the subscription was cancelled. |
| `Suspended` | Company has a subscription for this product and the subscription has been suspended because the payment is overdue. |
| `Product Not Found` | Product code invalid. |
| `Company Not Found` | Company doesn’t exist. |
| `Error` | Call returns an error. |
_ _ _


## Code sample for Calling the API

The easiest way to call the API is to use the JQuery Ajax function. This Javascript code sample will call the Authorization API, interpret the result, and set up a timer for refreshing the APIs status:

```
var url = "https://store-dot-rvaserver2.appspot.com/v1/widget/auth?id=" + displayId + "&pc=" + productCode;
var HOUR_IN_MILLIS = 60 * 60 * 1000;

$.ajax({
  dataType: "json",
  url: url,
  success: function(data, textStatus) {
    if (data && data.authorized) {
      // authorized
      
      // check again for authorization one hour before it expires
      var milliSeconds = new Date(data.expiry).getTime() - new Date().getTime() - HOUR_IN_MILLIS;
      setTimeout(this.callApi, milliSeconds);
    }
    else if (data && !data.authorized) {
      // not authorized

      // check authoriztation every hour if failed
      setTimeout(this.callApi, HOUR_IN_MILLIS);
    }
    else {
      // API failed, try again in an hour
      setTimeout(this.callApi, HOUR_IN_MILLIS);
    }
  },
  error: function() {
    // authorization failed
    
    // check authoriztation every hour if failed
    setTimeout(this.callApi, HOUR_IN_MILLIS);
  }
};
```

_ _ _


## Testing & debugging your implementation

Once the Store Authorization has been implemented (either via the component or custom code), it is adviseable that it is tested both on a Display and in a Presentation Preview, to ensure all scenarios work correctly.

Here are some of the things that may go wrong, with some possible solutions:

**Issue:** The Server responds that the Display Id/Company Id cannot be found.

**Solution:** Ensure the retrieval method for the Id is working correctly, triggering an `alert()` in the Javascript code with the specific Id will do the trick.


**Issue:** The Server responds that the Widget is not authorized despite the fact that it has been Purchased

**Solution:** Ensure that the Presentation and Display that are being used are from the same Company where the Widget has been Purchased.
