---
layout: user-post
title:  "What is Tagging?"
date:   2014-10-13 10:52:00
category: user/storage/tagging
order: 1
---

**Important message re: Tagging**

Tagging is currently in beta and is being made available as an early preview of new features. All features may not perform as described. Please report any issues you encounter in the [Community](http://community.risevision.com).

If you are a 3rd party developer looking to create a Widget or Application that uses Tagging please take a look at the [Rise Vision Storage API](http://help.risevision.com/#/developer/storage-api/storage-api)

For updates regarding the Tagging feature please follow our blog [here](http://www.risevision.com/blog/) or subscribe to the Product Updates section of our Community [here](https://community.risevision.com/rise_vision_inc/categories/rise_vision_inc_product_updates).


* * *


Tagging allows you to categorize files in Rise Storage and then distribute those files based upon their Tags to matching Displays, Presentations and Widgets. You can further use Timeline Tags to specify when the files should be shown on their target Displays and also attach metadata to the files with Freeform Tags. Best example of a Freeform Tag is to use it for captions on Images that you upload and you can show the caption with the Image in your Presentation.

###Types of Tags
There are three types of Tags that can be created; a Lookup Tag, Freeform Tag and Timeline Tag.

To better explain what each Tag is, and how it can be used, let’s cover how each tag could be used in a real life scenario. 

You are responsible for managing the Digital Signage Network for stores nationwide at Acme Clothing. The Digital Signage Network is used to promote the products; Levi, Nike and Northface using Images and Videos.

Within each Store, a Display can be found by the Cashier, Window and the Shoe Rack.  Each Store falls into one of four regions; Northeast, Southeast, Southwest and Northwest. 

As part of your responsibilities, you need to update the promotional Images and Videos in each Store based on the Display location (Cashier, Window, Shoe Rack) and by region. 

For example, you have just been asked to update all Shoe Rack Display’s in the Northeast region with Images to promote a new Nike product.

Using Lookup Tags, we can easily handle this task.

_ _ _

####Lookup Tag

A Lookup Tag is made up of a Name and one or more Lookup Values. The Lookup Values can then be assigned to a Image or Video in Rise Storage.

Based on the information in our scenario above, we are going to create three Lookup Tag’s; Product, Display Location and Region.  The Lookup Values associated with each Lookup Tag is reflected in the table below. 

| Product |  Display Location  | Region |
|---------|-------|------------|-----------|
|    Nike         | Window     | Northeast
|    Northface    | Cashier    | Northwest
|    Levi         | Shoe Rack  | Southeast
|                 |            | Southwest


After creating the Lookup Tags above, the following Lookup Values will be available to Tag an Image or Video.

|  Tag Name: Lookup Value |  Tag Name: Lookup Value  | Tag Name: Lookup Value |
|---------|-------|------------|-----------|
|    product: nike         | display location: window     | region: northeast
|    product: northface    | display location: cashier    | region: northwest
|    product: levi         | display location: shoe rack  | region: southeast
|                          |                              | region: southwest

Going back to our task, we need to update all Shoe Rack Displays in the Northeast region with Images to promote a new Nike product.

First step, upload the Images to Rise Storage and for each Image we’ll add the following Lookup Value’s 

|  Tag Name: Lookup Value |  Tag Name: Lookup Value  | Tag Name: Lookup Value |
|---------|-------|------------|-----------|
|             | display location: window     | region: northeast


The tagged Image will now appear on any Display, Presentation or Widget that has the display location: shoe rack and region: northeast Tags. 


Now let’s say that you need to run a promotion where you are discounting a Northface product, nationwide, by 15% for all Display Locations. To do this, you would like to add the discount amount, as an overlay on the Image of the Northface product being discounted. 

To achieve this, we’ll use a Freeform Tag.

_ _ _

####Freeform Tag

A Freeform tag is made up of a Name and Freeform Text. As you tag an Image or Video with a Freeform Tag, you will specify what the Freeform Text is on-the-fly, as you tag your Image. That Freeform Text is then available as metadata where it can be appear as an overlay onto the Image you’ve tagged.

As a comparison, when we setup our Lookup Tags we predefined the Lookup Values. For our Product Lookup Tag, the Lookup Values were Nike, Northface and Levi. 

Freeform Tags on the other hand, have no Lookup Value. The Freeform Text could be considered the equivalent to a Lookup Value with one key difference, Freeform Value are created on-the-fly as you Tag an Image or Video.  

First, we need to create a new Freeform Tag. We’ll name it, Discount. The Table below represents a complete inventory of all Tags we’ll have afterwards.

Notice the Freeform Tag “discount:” has no Freeform Value. The Freeform Value will be defined when you add the Freeform Tag to the Image.

| Tag Name |  Tag Name: Lookup Value |  Tag Name: Lookup Value  | Tag Name: Lookup Value |
|----------|-------------------------|--------------------------|------------------------|
| discount:|    product: nike        | display location: window | region: northeast      |
|          |    product: northface   | display location: cashier| region: northwest      |
|          |    product: levi        | display location: shoe rack  | region: southeast  |
|          |                         |                              | region: southwest  |


With the Freeform Tag created, we’ll proceed with tagging the Image(s) of the Northface product that is being discounted. Once complete the Image will have the following Tags.

When the Freeform Tag, discount, was added to the Image, the text of “15% off” is entered. This is now our Freeform Value that will be overlaid on top of the Image.

| Tag Name |  Tag Name: Lookup Value |  Tag Name: Lookup Value  | Tag Name: Lookup Value |
|----------|-------------------------|--------------------------|------------------------|
| discount: 15% off |    product: nike        | display location: window | region: northeast      |
|          |    product: northface   | display location: cashier| region: northwest      |
|          |    product: levi        | display location: shoe rack  | region: southeast  |
|          |                         |                              | region: southwest  |

The tagged Image will now appear on any Display, Presentation or Widget that has the Tags; discount:, product:, display: and region: with any combination of the Lookup Values.

Unfortunately, discounts don’t run forever and we don’t want the headache of having to remember to go back and remove our discount promotion. 

To automate the process of removing the item on a certain date, we’ll use Timeline Tags.

_ _ _

####Timeline Tags
Timeline Tags provide you with the ability to specify when a tagged item should play, when it should end and the times the item should appear. By default, a tagged item will be all day, everyday. 

Using the previous example, let’s update what we’ve already setup to include a Start Date and End Date.

As a recap, we currently have the following Tags setup on the Image for the Northface product. We are now going to add a Timeline Tag so that the Image only appears during the Date range specified.

| Tag Name |  Tag Name: Lookup Value |  Tag Name: Lookup Value  | Tag Name: Lookup Value |
|----------|-------------------------|--------------------------|-----------------------
| discount: 15% off |    product: nike         | display location: window     | region: northeast
| |    product: northface    | display location: cashier    | region: northwest
| |    product: levi         | display location: shoe rack  | region: southeast
| |                         |                              | region: southwest

When we add our Timeline Tag, we’ll specify the Start Date for Feb-3-2015 and and End Date for Feb-07-2015. As an added benefit, whenever a End Date is specified, you can optionally have the file moved into Trash once the End Date has passed. By doing this, you can eliminate any risk with that Image being reused in the future.

After adding the Timeline Tag,  our Image will now have the following Tags

|Timeline| Tag Name |  Tag Name: Lookup Value |  Tag Name: Lookup Value  | Tag Name: Lookup Value |
|---|----------|-------------------------|--------------------------|-----------------------
|Start: 3-Feb-2015 End: 7-Feb-2015| discount: 15% off |    product: nike         | display location: window     | region: northeast
|| |    product: northface    | display location: cashier    | region: northwest
|| |    product: levi         | display location: shoe rack  | region: southeast
| | |                         |                              | region: southwest

The tagged Image will now appear on any Display, Presentation or Widget that has the Tags; discount:, product:, display: and region: with any combination of the Lookup Values and according to the Timeline Tag you’ve defined. 






