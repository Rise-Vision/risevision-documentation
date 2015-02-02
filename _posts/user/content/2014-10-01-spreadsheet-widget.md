---
layout: user-post
title:  "Google Spreadsheet Widget"
date:   2014-10-13 10:52:00
category: user/content
order: 9
---

##What it does
There are countless ways the Google Spreadsheet Widget can be used for digital signage. Any data you can put into a Google Spreadsheet can be shown on a digital display using the Google Spreadsheet Widget. For example, a restaurant manager can use a Google Spreadsheet to manage a digital Menu Board. As the manager updates prices in the Google Spreadsheet, those changes are updated automatically on the digital Menu Board so customers are always provided the most up to date information.

##Create a Google Spreadsheet
The first step is to build your Google Spreadsheet. When your Google Spreadsheet is complete make sure it is published so the Widget can access the data.  Instructions and information on publishing a Google Spreadsheet can be found [here](https://support.google.com/docs/answer/37579?hl=en). As well as marking as published, ensure that the visibility is set to “Public” or “Anyone with the Link”.

##How to configure it
To configure this widget, open the properties window for the placeholder containing this widget, and click the widget's Configure link. If this is the only item in the placeholder's playlist, the Configure link is in the Settings area at the bottom of the placeholder window, right below the playlist. If there are multiple items in the playlist, clicking the name of this widget opens an Item window and the Configure link is in the Settings area of that window.

Clicking the Configure link opens a Google Spreadsheet Settings window, in which you can configure the following settings:

#####Select Spreadsheet
To start, you need to choose a spreadsheet that you want to use. The data that gets returned from this spreadsheet is what will be shown in the Presentation. Click on the Google Drive Picker icon and this will launch the modal window to select your spreadsheet directly from your Google Drive (authorization may be requested first). The spreadsheet must be [published to the web](https://support.google.com/drive/answer/37579?hl=en) in order for the Google Spreadsheet Widget to be able to access it.

Upon selecting a spreadsheet you are presented with several control settings for configuring the use of your spreadsheet.

- **Cells**: You must select to show data from the Entire Sheet or a specific Range.
  - **Entire Sheet**: When Entire Sheet is selected, all the data in the Sheet will appear in the Presentation. This is a good option if you have data that updates dynamically and the range size varies with each update.
  - **Range**:  When Range is selected, the only data that will appear in the Presentation is whatever exist in the range defined here.
- **Worksheet**: If you have more than one Worksheet, and you chose to publish all sheets, each Sheet will appear in the dropdown menu with same name defined in the Google Spreadsheet.
- **Header Rows**: How many rows from the data source should be considered header rows. The Widget will allow you to format header rows differently than the data rows. If you don’t have a header row, it’s OK.  A custom header can be configured.
- **Data Refresh Interval**: Determines the frequency (in minutes) the Widget will check for updates of your spreadsheet.

#####Columns
Individual columns can be formatted separately by choosing them in the *Select Columns To Format* select field. The column names will either be a letter that corresponds with that column of your spreadsheet, or it will be the header names you specified in your spreadsheet.

To format each selected column, select one from the drop down list and then click the chevron (“>” symbol) beside its name. The specific settings you are presented with depend on the column type - text, number, or date:

- **Header Text**: A custom header can be defined here.
- **Width**: Specify, in pixels, how wide the column should be
- **Alignment**: Specify if you want the data left, center or right aligned.
- **Date Format**: If the data is a date, you can choose to display your date in short, medium, or long format.
- **Decimals**: If the data is a number, you can specify how many decimal positions to show.
- **Sign**: If the data is a number, specify if you want to display negative or positive sign before the number
- **Color Condition**: If the data is a number, specify if you want the data to change colors based on previous values. For *Change Up* and *Change Down* conditions, every time the data is refreshed, current values are compared to previous values. If they have changed, the value is styled appropriately. A similar process takes place for *Value Positive* and *Value Negative*, except that no comparison is necessary. The value is styled according to whether its current value is positive or negative.

#####Scroll
In this area you can control if and how the data will scroll in your table. Options are:

- **No:** The data will not scroll.
- **Continuously:** The data will scroll continuously, like movie credits. When this is selected, you can also control the scrolling speed and the duration of the pause at the beginning, when the scrolling reaches the end of the table, and upon touch (for touch screens).
- **By page:** One page of data will appear at a time, and then be replaced by the next page of data.  When this is selected, you can also control the speed of page changes, and the duration of the pause at the beginning, between page views, and upon touch (for touch screens).

#####Table Format
Control the appearance of your table by changing the following values:

- **Row Padding:**  How much space, in pixels, you want between the rows.
- **Row Color:** Set a background color for the rows of data.
- **Alternate Row Color:** Set a background color for alternating rows of data.
- **Header Format:** Set the formatting of the header text.
- **Data Format:** Set the formatting of the data text.

#####Background
Set a background color for the whole widget.

#####Layout
By default the Widget is built to handle a table layout. The [DataTables](https://datatables.net/) plugin is used by the Widget for a table layout and is for things like setting the column width and visibility, and also for ensuring that the width of the header cells are the same as the width of the data cells, as these exist in separate tables (this is necessary in order for the headers to remain fixed while the data scrolls).

You can choose to specify your own custom layout by deselecting the *Use Default Layout* checkbox and enter in the URL of the location to your custom layout HTML file. More information regarding custom layouts is below. The input field provided for you to enter your URL validates the URL you enter to ensure it is a valid URL. If for some reason you need this disabled because your URL is showing as invalid, you can disable this by deselecting the *Validate URL* checkbox.

####To save your configuration settings
1. Click the green Save button at the top of the Google calendar Settings window.
2. Click the grey Save button at the bottom of the Placeholder window.
3. Click the Save (floppy disk) icon in the top right area of the presentation page.

###Custom Layouts
With a custom layout, in addition to showing standard text, it is possible to specify URL data to display an image or a QR Code. Alternatively, a layout could be created that shows columns in a different order than that of the spreadsheet, or that shows some, but not all, of the columns. The layout could even be list-based and not use an HTML table at all.

To create a custom layout, create an HTML file and add the necessary CSS and HTML. To ensure that the appropriate HTML elements function as expected, use the following naming convention:

| ID | Description |
| ----- |:-----------:|
| scrollContainer | Element to which the auto-scroll plugin is applied. | 

| Class | Description |
| ----- |:-----------:|
| page | Element to be scrolled when *Scroll By* is set to Page. |
| repeat | Element that encapsulates an entire row. This element and all of its children will be repeated for every row of the spreadsheet. |
| image | Element to display an image. Must be accompanied by a CSS class to indicate the column of the spreadsheet containing the URL to the image. (Optional) |
| qrCode | Element to display a QR code. Must be accompanied by a CSS class to indicate the column of the spreadsheet containing the URL for which a QR code will be generated. (Optional)
| heading_font-style | Element to which Heading Font is applied. |
| data_font-style | Element to which Data Font is applied. |

#####Mapping Spreadsheet Columns to HTML Elements
In addition to these CSS classes, there are others that should be used to denote which spreadsheet column maps to which HTML element. These classes are named after the column IDs of the spreadsheet. For example, if a spreadsheet has three columns in columns A, B and C, a snippet of custom HTML might look like the following:

```
<td class="A"></td>
<td class="B image"></td>
<td class="C qrCode"></td>
```

In the above example, column A would contain text, column B a URL to an image, and column C a URL for which a QR code will be created. The CSS class names are not case-sensitive.

#####Custom Layout Example
As an example, let’s customize the Widget to render a restaurant menu that looks like this:

![Menu]({{ site.baseurl }}/assets/images/google-spreadsheet-widget-images/menu.png)

The Widget will use the menu information pulled from a Google spreadsheet with the following structure:

![Spreadsheet]({{ site.baseurl }}/assets/images/google-spreadsheet-widget-images/spreadsheet1.png)

First, we need to create a custom HTML layout as per below. The contents of the HTML apart from inside the `<body>` tag are not shown for the sake of brevity, but you can view the entire file [here](https://github.com/Rise-Vision/widget-google-spreadsheet/blob/feature/custom-layouts/examples/list.md):

```
  <div id="scrollContainer">
    <div id="menu" class="page">
      <div class="repeat item menus">
        <!-- Shows data in Column A using the custom styling specified in the above CSS. -->
        <h3 class="A"></h3>
        <ul>
          <li>
            <div>
              <!-- Shows data in Column B using the Heading Font style. -->
              <h4 class="B heading_font-style"></h4>
              <!-- Shows data in Column C using the Data Font style. -->
              <span class="C data_font-style"></span>
              <ul>
                <li>
                  <!-- Shows data in Column D using the Data Font style. -->
                  <span class="D data_font-style"></span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
```
This layout does not have any HTML tables, but instead uses `div` tags and lists. There are a couple of important things to note about the layout:

- One of the `div` tags has been assigned a class of repeat. This indicates that it, as well as its children, will be repeated for every row of the spreadsheet. This saves us from having to repeat the same markup for every row, which would be a maintenance nightmare.
- The HTML elements that have classes of *A*, *B*, *C* and *D* refer to the corresponding column of the spreadsheet. In this case, the mapping is:
  - A = Type
  - B = Item
  - C = Description
  - D = Price
- We’ve applied a class of *heading_font-style* to the same element with class *B*. This means that Item will use the *Heading Font* Widget setting.
- We’ve applied a class of *data_font-style* to the same elements with classes *C* and *D*. This means that both Description and Price will use the *Data Font* Widget setting.
- The `div` element with an ID of *scrollContainer* functions as a wrapper for all of the content to be scrolled. In this case, it’s wrapped around the *menu* element since the entire menu should be scrollable.
- The *page* class is applied to the element that contains the content to be scrolled when *Scroll By* is set to *Page*.

As for the CSS, here are the noteworthy sections:

```
.A {
  font-family: Trebuchet MS, Helvetica, sans-serif;
  color: #22324B;
  font-size: 14px;
}
```
```
#scrollContainer {
  height: 100%;
  overflow: hidden;
}
```

The first CSS rule applies a custom style to all HTML elements with a class of *A*. This means that *Today’s Specials*, *Appetizers* and *Dinner* will use this styling. Since there are really only two font settings that can be controlled in the Widget’s settings (*Heading Font* and *Data Font*), we just create our own class containing the font settings that we want.

When scrolling by page, the height of the *page* element must be greater than the height of *scrollContainer*. Otherwise, it is assumed that all of the content is already visible and scrolling is not necessary. To achieve this, CSS rules are added to tell *scrollContainer* not to automatically resize vertically to fit its content, but rather to remain the same height as the Placeholder and just hide any content that may overflow its boundaries.
