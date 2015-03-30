---
layout: user-post
title:  "Network Settings"
date:   2015-03-27 14:45:00
category: user/company
order: 4
---

If you’re a service provider with your own digital signage customers, the Rise Vision platform gives you the ability to create and manage your own network of sub-companies.  Here are the explanations for the fields found on the Network page of the platform:
 
**Use Email Campaign Service:**  You can send regular email updates to users in your sub-companies using a service like MailChimp.  When you check this checkbox, you will see some additional settings to fill in:
 
**Service:**  Currently only MailChimp service is supported.
 
**API URL:**  To create your API URL, use the following format for the link: http://XYZ.api.mailchimp.com/1.3/, and replace XYZ with the portion after the dash in your API Key.  For example, if your API Key is myapikey-us2, then your API URL would be: http://us2.api.mailchimp.com/1.3/
 
**API Key:**  Your API Key provides access to your MailChimp account, and this page describes how to generate one.
 
**List ID:**  Your list must conform to a very specific standard in order to be used with the Rise Vision platform.  This page outlines entirely how to create your MailChimp list.  Once you have created it, follow the steps in this page to get your List ID.
 
To learn more about using email campaigns, click here.
 
**Allow New Registrations:**  Enabling this setting allows you to provide a login URL on your website, or on any website for that matter, that users can click to access the Rise Vision platform directly, either to log in or to sign up.  If a new user signs up from this login URL, their company is created as a sub-company under your company.  The URL that you should use for this feature is http://rva.risevision.com?parentId={ID}; and replace the brackets and ID with the actual ID of your company.  You can find your Company ID in your browser’s address bar when you’re logged in to the platform: it’s the string of alphanumeric digits directly following the “company=” part of the URL.  If this checkbox is not checked, if any user signs up using your login URL, their company will be created as a new parent company within Rise Vision.
 
**Google Analytics ID:**  Enter your company’s Google Analytics ID to track visitor statistics for your network.
 
**Start Presentation:**  You can choose a presentation that you would like to appear each time a user in your parent company logs in.  Click the Change link to select your desired start presentation.  Click the Default link to assign the specified start presentation from your parent company.  Click the Delete link if you don’t want to show any start presentation.
 
**Client Company Start Presentation:**  You can also choose a presentation that you would like to appear each time a user in your sub-companies logs in.  Click the Change link to select your desired start presentation.  Click the Default link to assign the specified start presentation from your parent company.  Click the Delete link if you don’t want to show any start presentation to your sub-companies.
 
**Demonstration Presentations:** You can choose the presentation(s) that appear on newly added displays in your company, or on the displays of any of your sub-companies that have not been assigned to a schedule, or on displays that have been marked inactive.
 
Don’t forget to save!  Once you’ve entered all of your network settings, click the Save button at the top of the page to save your changes.

N.B. With changes made to the platform in March 2015, some fields previously found in the Network area are no longer available:

**Logo URL:**   *(Deprecated. No longer available.)*

 **Logo Target URL:**    *(Deprecated. No longer available.)*
 
 **Use DoubleClick Banner:**   *(Deprecated. No longer available.)*
 
 **Banner URL:**   *(Deprecated. No longer available.)*
 
 **Banner Target URL:**   *(Deprecated. No longer available.)*
 
 **Header Background Color:**   *(Deprecated. No longer available.)*
 
 **Help URL/Email:**   *(Deprecated. No longer available.)*
 
 **Support URL/Email:**   *(Deprecated. No longer available.)*
 
 **Sales URL/Email:**   *(Deprecated. No longer available.)*
 
 **News URL:**   *(Deprecated. No longer available.)*
 
 **Logout URL:**    *(Deprecated. No longer available.)*
 
 **Tutorial URL:**   *(Deprecated. No longer available.)*
 

