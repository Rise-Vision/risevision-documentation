---
layout: user-post
title:  "Network Settings"
date:   2014-10-13 10:52:00
category: user/company/management
parent-order: 2
order: 5
---

If you’re a service provider with your own digital signage customers, the Rise Vision platform gives you the ability to create, manage and brand your own customer portal, which we call your network.  With the ability to brand your network, your clients (sub-companies) will see your logo and banner and links, not ours, when they log in to the platform.
 
**Logo URL:**  Enter the web address for the image that you want to show in the top left corner when your sub-companies are logged in to the system.  Typically, this will be your parent company logo.  Maximum dimensions are 234 x 60 pixels, and the supported file types are JPG, GIF and PNG.
 
**Logo Target URL:**   Enter the URL of the web page that will open, in a separate tab, when a user clicks on the logo image.  Typically, this will be the home page or a landing page of your corporate website.
 
**Use DoubleClick Banner:**  You can show banners from your Google DoubleClick account at the top of your network’s pages, instead of showing a static banner image.  Check the checkbox and enter your Adsense Campaign ID and Adsense Slot Name.  If you use Google DoubleClick banners, the options for Banner and Banner Target URL (see below) are not available.
 
**Banner URL:**  Enter the web address for the banner image that you want to show at the top of each page, in the Header section to the right of the logo image.  You can use this banner space for promotional messages, a corporate tagline, or any other type of attractive graphic.  Maximum dimensions are 468 x 60 pixels and the supported file types are JPG, GIF and PNG.
 
**Banner Target URL:**  Enter the URL of the web page that will open, in a separate tab, when a user clicks on the banner.  Typically, this will be a landing page on your corporate website.
 
**Header Background Color:**  Specify the desired color of the horizontal band that appears across the top of all pages.  Even if you have a logo and a banner, this background color shows behind them if they are smaller than the size of the banner area.
 
**Help URL/Email:**  Enter the web address or email address that your sub-companies’ users will be taken to when they click the Help link located in the upper right corner of the header.  The default value for this field is the URL for the Rise Vision user documentation.  If this field is blank, the Help link isn’t displayed.
 
**Support URL/Email:**  Enter the web address or email address that your sub-companies’ users will be taken to when they click the Support link located in the upper right corner of the header.  The default value for this field is the URL for the Rise Vision forum.  If this field is blank, the Support link isn’t displayed.
 
**Sales URL/Email:**  Enter the web address or email address that your sub-companies’ users will be taken to when they click the Sales link located in the upper right corner of the header.  If this field is blank, the Sales link isn’t displayed.
 
**News URL:**  Enter the web address of the page that your sub-companies’ users will be taken to when they click the News link located in the upper right corner of the header.  If this field is blank, the News link isn’t displayed.
 
**Logout URL:**   If you want to redirect users in any of your client companies to a specific web page when they log out of Rise Vision, you can enter the URL of that page here.  If this field is blank, users are taken to the Rise Vision logout page.
 
**Tutorial URL:**  Enter the web address of the video that you want to show up in the Tutorial Window that pops up when your sub-companies’ users click the Tutorial link located in the upper right corner of the header, or when they log in for the first time, or if they have “Show Tutorial” checked in their user account.  If this field is blank, the Tutorial link in the Header section is not displayed.  Any video can be used, but the URL must be formatted correctly.
 
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
