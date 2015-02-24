---
layout: user-post
title:  "Financial Table - Stocks Only Widget"
date:   2014-10-01 10:52:00
category: user/content
order: 3
---

##What it does
The Rise Financial Table - Stocks Only Widget allows you to add a financial stock quote table to your presentation.  Stock information is supplied by Thompson Reuters, and the values shown are 20-minute-delayed. This widget shows only securities, such as Microsoft, Google, Intel, etc. It does not show indexes, commodities, currencies, etc.


##How to configure it
To configure this widget, open the properties window for the placeholder containing this widget, and click the widget's Configure link.  If this is the only item in the placeholder's playlist, the Configure link is in the Settings area at the bottom of the placeholder window, right below the playlist. If there are multiple items in the playlist, clicking the name of this widget opens an Item window and the Configure link is in the Settings area of that window.

Clicking the Configure link opens the **Financial Table Settings** window.  

At the top of the settings page you will find the following buttons:
- **Save:**  This saves your settings for this widget.
- **Cancel:**  This cancels any changes you’ve made to your settings since you last saved them.
- **Contribute:**  This takes you to the GitHub repository for this widget.  As an open source project, all code for this widget is available on GitHub, allowing you to contribute your own versions or modifications if you wish to do so.

Below the three buttons, you can configure the following settings:
#####Instruments
This is the stock selector.  To begin with, the instruments that make up the Dow 30 are listed, in alphabetical order, under the “Add an instrument” window.  You can remove any that you don’t want to display by clicking the “minus sign” icon beside each instrument name.

To add a new instrument, click the “Add an instrument” field and start typing either the name of a company or the actual instrument code for that company.  All choices beginning with the same letters will appear in the drop-down list.  Select the correct one by clicking on it, and it will be added to the end of the list. 

The order in which the instruments are listed is determined by the order in which they are selected.

#####Columns
You can have the following columns in your table: Instrument, Instrument Logo, Instrument Name, Last Price, Previous Close, Change, % Change, Accumulated Volume, Day High, Day Low, 52 Week High, 52 Week Low, Bid, Ask, Yield, Yield Change, and Trade Time. 

By default, two initial columns appear in your table: Instrument and Instrument Logo.  Remove a column by clicking the “minus sign” icon beside the column name.  Select additional columns for your table by clicking the drop-down field under “Select A Column To Add”.  Columns are listed in the order selected.

To format each selected column, click the chevron (“>” symbol) beside its name and specify the header text, width, alignment, and other parameters as appropriate for each column.

#####Scroll
In this area you can control if and how the data will scroll in your table. Options are:
######Type:
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

######Disclaimer
Set the formatting of the disclaimer text informing viewers that "Market Data by Thompson Reuters-Delayed 20 Minutes".

#####Background
Set a background color for the whole table.

** * ==Remember to save your configuration settings when you're done!==* ** 
####To save your configuration settings
1. Click the green Save button at the top of the Financial Table Settings window.
2. Click the grey Save button at the bottom of the Placeholder window.
3. Click the Save (floppy disk) icon in the top right area of the presentation page.
