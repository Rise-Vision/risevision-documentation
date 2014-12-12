---
layout: user-post
title:  "Google Calendar Widget"
date:   2014-10-13 10:52:00
category: user/content
order: 3
---

##What it does
The Google Calendar Widget puts events from any public Google Calendar onto your display.

For example, an event from your Google Calendar like this:

  ![Step 1]({{ site.baseurl }}/assets/images/google-calendar-widget-images/calendar-event.png)

will appear in your presentation like this:

![Step 1]({{ site.baseurl }}/assets/images/google-calendar-widget-images/presentation-event.png)

##How to configure it
To configure this widget, open the properties window for the placeholder containing this widget, and click the widget's Configure link.  If this is the only item in the placeholder's playlist, the Configure link is in the Settings area at the bottom of the placeholder window, right below the playlist. If there are multiple items in the playlist, clicking the name of this widget opens an Item window and the Configure link is in the Settings area of that window.

Clicking the Configure link opens a Google Calendar Settings window, in which you can configure the following settings:
#####Calendar ID
To start, you need to identify which Google Calendar you want to use, by specifying its Calendar ID (situated in the Calendar Address field in the Calendar Details area of the Google Calendar Settings window).  To find it:

1. Open your Google Calendar in another tab of your browser.
2. Under My Calendars on the left side, click the down arrow beside the name of your chosen calendar and select 'Calendar settings'.
![Step 1]({{ site.baseurl }}/assets/images/google-calendar-widget-images/calendar-settings.png)
3. To find the Calendar ID, look in the Calendar Address field in the Calendar Details tab. Select and copy the part in brackets after 'Calendar ID:'
![Step 1]({{ site.baseurl }}/assets/images/google-calendar-widget-images/get-cal-id.png)
4. Return to the browser tab showing the widget's Google Calendar Settings and paste that Calendar ID into the top field.

Keep in mind that the Google Calendar that you select for use with this widget must be one whose sharing settings are set to "Make this calendar public". To ensure that your calendar is public:

1. Open your Google calendar in another tab of your browser.
2. Under My Calendars on the left side, click the down arrow beside the name of your chosen calendar and select 'Calendar settings'.
3. Click the 'Share this Calendar' link at the top of the page.
4. Make sure the checkbox beside 'Make this calendar public' is checked.
![Step 1]({{ site.baseurl }}/assets/images/google-calendar-widget-images/set-cal-public.png)

#####Scroll
In this area you can control if and how the calendar data will scroll on your display. Options are:
######Type:
- No: The list of events will not scroll.
- Continuously: The list of events will scroll continuously, like movie credits.
- By page: One page of events will appear at a time, and then be replaced by the next page of events.

######Speed:
Select the scroll speed.  There are 5 choices, from 'Slowest' to 'Fastest'.

######Pause:
Set the number of seconds that the scroll will pause at the beginning, between pages (if Type is set to By Page), when the end of the list of events is reached (if Type is set to Continuously), and upon touch (for touch screens).

#####Date
######Range:
Select the range of dates for the events to be displayed.  Choices are:
- Day: shows current day's events only
- Week: shows events for the coming week
- Month: shows events for the next 30 days
- 6 Months: shows events for the current month and the next 5 months
- 12 Months: shows events for the current month and the next 11 months

######Format:
Choose the format in which you would like the date of each event to appear on the display.

#####Time
######Format:
Select whether you want the times of the events to be displays in 12-hour or 24-hour format.

#####Font, Size, Style, Text & Background Color choices for 'Date', 'Time', 'Title Font', 'Location Font' & 'Description Font'
In these fields you can set the appearance of the font for the text that displays this widget's data. 
- Font: select a font from the drop-down list or from the Fonts window that opens when you select More Fonts.  Alternatively, you can select 'Use Custom Font' and specify the URL of a web font in the field that appears below.
- Font Size: select a font size (in pixels) from choices in the drop-down list.
- Font Style: select Bold and/or Italic and/or Underlined, if desired.
- Font Color: specify the font color either by entering an rgba value or a HEX value, or by clicking on a desired color and opacity from the color-picker window that appears when you click on this field.
- Background Color: specify the background color (behind the text) either by entering an rgba value or a HEX value, or by clicking on a desired color and opacity from the color-picker window that appears when you click on this field.

For each type of text that you can configure in this window, sample text showing the results of your choices appears in the grey box below each section.

** * ==Remember to save your configuration settings when you're done!==* ** 
####To save your configuration settings
1. Click the green Save button at the top of the Google calendar Settings window.
2. Click the grey Save button at the bottom of the Placeholder window.
3. Click the Save (floppy disk) icon in the top right area of the presentation page.