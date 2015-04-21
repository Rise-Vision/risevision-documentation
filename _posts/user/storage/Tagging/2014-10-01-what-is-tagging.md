---
layout: user-post
title:  "What is Tagging?"
date:   2014-10-13 10:52:00
category: user/storage/tagging
order: 1
---

**Important message re: Tagging**

Tagging is currently in beta and is being made available as an early preview of new features. All features may not perform as described. Please report any issues you encounter in the [Community](http://community.risevision.com).

If you are a 3rd party developer looking to create a widget or application that uses tagging, please take a look at the [Rise Vision Storage API]({{site.absoluteurl}}developer/storage-api/storage-api)

For updates regarding the Tagging feature please follow our blog [here](http://www.risevision.com/blog/) or subscribe to the Product Updates section of our Community [here](https://community.risevision.com/rise_vision_inc/categories/rise_vision_inc_product_updates).


* * *

###Overview
Tagging is a method by which you can label (i.e., tag) display items, like images and videos, to gain additional control over where and when those items are displayed.  By also tagging your widgets, presentations and displays (which is new functionality now being built into the Rise Vision platform), you will soon be able to display specific items on specific screens at specific times by assigning matching tags to both items and screens.  

This gives you an alternative to the traditional method of using scheduling and display distribution to control where and when an item appears on a display.

###Types of Tags
There are three types of tags that can be created: a Lookup tag, a Freeform tag and a Timeline tag.

To better explain what each tag is, and how it can be used, let’s cover how each type of tag could be used in a real life scenario. 
_ _ _

Let's say you're responsible for managing the digital signage network for stores nationwide at the Acme Clothing company. The digital signage network is used to promote three products – Levi's, Nike and Northface – using images and videos.

Within each store, there are three displays: at the cashier, at the window and at the shoe rack.  And each store is located in one of four regions: Northeast, Northwest, Southeast or Southwest. 

As part of your responsibilities, you need to update the promotional images and videos in each store based on both the display location (cashier, window, or shoe rack) and the region. 

For example, let's say you have just been asked to update all shoe rack displays in the Northeast region with images to promote a new Nike product.

We can easily handle this task using Lookup tags.

_ _ _

####Lookup Tag

A Lookup Tag is made up of a name and one or more lookup values. The lookup values can be assigned to images or videos in Rise Storage.

Based on the information in our scenario above, we are going to create three lookup tags: Product, Display Location and Region.  The lookup values associated with each lookup tag are shown in the table below. 

| Product |  Display Location  | Region |
|---------|-------|------------|-----------|
|    Nike         | Window     | Northeast
|    Northface    | Cashier    | Northwest
|    Levi         | Shoe Rack  | Southeast
|                 |            | Southwest


After creating the Lookup tags above, the following lookup values will be available to tag an image or a video.

|  Tag Name: Lookup Value |  Tag Name: Lookup Value  | Tag Name: Lookup Value |
|---------|-------|------------|-----------|
|    product: nike         | display location: window     | region: northeast
|    product: northface    | display location: cashier    | region: northwest
|    product: levi         | display location: shoe rack  | region: southeast
|                          |                              | region: southwest

Going back to our task, we need to update all Shoe Rack displays in the Northeast region with images to promote a new Nike product.

First, upload the images to Rise Storage.  Then, for each image, add the following Lookup values:

|  Tag Name: Lookup Value |  Tag Name: Lookup Value  | Tag Name: Lookup Value |
|---------|-------|------------|-----------|
|             | display location: window     | region: northeast


The tagged image will now appear on any display, presentation or widget that has "display location: shoe rack" and "region: northeast" tags. 
_ _ _


Now, let’s say that you need to run a promotion where you are discounting a Northface product, nationwide, by 15% for all display locations. To do this, you would like to add the discount amount as an overlay on the image of the Northface product being discounted. 

To achieve this, we’ll use a Freeform tag.
_ _ _

####Freeform Tag

A Freeform tag is made up of a name and some freeform text. When you tag an image or video with a Freeform tag, you can specify the freeform text on the fly, when you tag your image. That freeform text is then available as metadata, where it can be made to appear as an overlay onto the image that you’ve tagged.

As a comparison, when we setup our Lookup tags we predefined the Lookup values. For our Product Lookup Tag, the Lookup values were Nike, Northface and Levi. 

Freeform tags, on the other hand, have no Lookup value. The freeform text could be considered the equivalent to a Lookup value with one key difference: freeform values are created on the fly as you tag an image or a video.
_ _ _

First, create a new Freeform tag. Name it "discount". The table below represents a complete inventory of all tags we’ll have afterwards.

Notice that the Freeform Tag “discount:” has no Freeform value. The Freeform value will be defined when you add the Freeform tag to the image.

With the Freeform tag created, you can now tag the image(s) of the Northface product that is being discounted. Once complete, the image will have the following tags:

| Tag Name |  Tag Name: Lookup Value |  Tag Name: Lookup Value  | Tag Name: Lookup Value |
|----------|-------------------------|--------------------------|------------------------|
| discount:|    product: nike        | display location: window | region: northeast      |
|          |    product: northface   | display location: cashier| region: northwest      |
|          |    product: levi        | display location: shoe rack  | region: southeast  |
|          |                         |                              | region: southwest  |


When the Freeform Tag "discount" is added to the image, we also enter the text “15% off”. This is now our Freeform value that will be overlaid on top of the image.

| Tag Name |  Tag Name: Lookup Value |  Tag Name: Lookup Value  | Tag Name: Lookup Value |
|----------|-------------------------|--------------------------|------------------------|
| discount: 15% off |    product: nike        | display location: window | region: northeast      |
|          |    product: northface   | display location: cashier| region: northwest      |
|          |    product: levi        | display location: shoe rack  | region: southeast  |
|          |                         |                              | region: southwest  |

The tagged image will now appear on any display, presentation or widget that has the tags "discount:", "product:", "display:" and "region:", with any combination of those tags' lookup values.
_ _ _

Unfortunately, discounts don’t run forever and we don’t want the headache of having to remember to go back and remove our discount promotion. To automate the process of removing the item on a certain date, we’ll use Timeline tags.

_ _ _

####Timeline Tags
Timeline tags provide you with the ability to specify display times for a tagged item: when it should play, when it should end, and what specific times it should appear. Without timeline tags, a tagged item will be displayed all day, every day. 

Using the previous example, let’s update what we’ve already set up to include a start date and an end date.

To recap, we currently have the following tags set up on the image for the Northface product:

| Tag Name |  Tag Name: Lookup Value |  Tag Name: Lookup Value  | Tag Name: Lookup Value |
|----------|-------------------------|--------------------------|-----------------------
| discount: 15% off |    product: nike         | display location: window     | region: northeast
| |    product: northface    | display location: cashier    | region: northwest
| |    product: levi         | display location: shoe rack  | region: southeast
| |                         |                              | region: southwest

We are now going to add a Timeline tag so that the image only appears during the date range specified.

When we add our Timeline tag, we’ll specify the start date of Feb-3-2015 and the end date of Feb-07-2015. As an added benefit, whenever an end date is specified, you have the additional option of having the file moved into Trash once the end date has passed. By doing this, you can eliminate any risk of that image being reused in the future.

After adding the Timeline tag,  our image will now have the following tags:

|Timeline| Tag Name |  Tag Name: Lookup Value |  Tag Name: Lookup Value  | Tag Name: Lookup Value |
|---|----------|-------------------------|--------------------------|-----------------------
|Start: 3-Feb-2015 End: 7-Feb-2015| discount: 15% off |    product: nike         | display location: window     | region: northeast
|| |    product: northface    | display location: cashier    | region: northwest
|| |    product: levi         | display location: shoe rack  | region: southeast
| | |                         |                              | region: southwest

The tagged image will now appear on any display, presentation or widget that has the tags "discount:", "product:", "display:" and "region:", with any combination of their Lookup values, and according to the Timeline tag that you’ve defined. 