---
layout: user-post
title:  "What is Tagging?"
date:   2014-10-13 10:52:00
category: user/storage/tagging
order: 1
---

**Important message re: Tagging** 

Tagging is currently in beta and is being made available as an early preview of new features scheduled to be released in the coming weeks. All features may not perform as described. Please report any issues you encounter in the Community

In order to take advantage of Tagging you must use a Widget or Player application that is designed to use the features via the Rise Vision API. If you are a 3rd party developer looking to create a Widget or Application that uses Tagging take a look at the [Rise Storage API](http://help.risevision.com/#/developer/storage-api/storage-api)

For updates regarding the Tagging feature please follow our blog [here](http://www.risevision.com/blog/) or subscribe to the Product Updates section of our Community [here](https://community.risevision.com/rise_vision_inc/categories/rise_vision_inc_product_updates)


* * *

Tagging is a feature on the Rise Vision Platform allowing you to create one or more Tags that can then be assigned to an image or video in Rise Storage. A Widget can then use that Tag to determine if it should be shown on a Display.

##Types of Tags
There are two types of Tags that can be created; a Lookup Tag and Freeform Tag

###Lookup Tag
A Lookup Tag is made up of a Name and one or more Lookup Values. Once a Lookup Tag has been created, it can be assigned to images or videos in your Rise Storage account. 

Lookup Tags are assigned to a image or video using Lookup Values. This provides you with an easy way to categorize images and videos in your Rise Storage and control what appears on your Display. 

For example, you are responsible for product promotions on the digital signage network at Acme Corporation. There are two product lineup's that you must promote across 3 stores; *Acme Clothing* and *Acme Cosmetics* 

Using Lookup Tags, we can easily handle this task. 

We'll create two Lookup Tags; *Acme Clothing* and *Acme Cosmetics*. Each Tag will contain three Lookup Values. One for each Store, as represented in the Table below.

| Acme Clothing  | Acme Cosmetics |
|--------|--------|
|   Store 1     |   Store 1  
|   Store 2     |   Store 2  
|   Store 3     |   Store 3  

With the two Lookup Tags and related Lookup Values created, you will now have the following 6 Tags available that can be applied to any image or video. One or more Tags can be assigned to your image or video. 

- Acme Clothing: Store 1
- Acme Clothing: Store 2
- Acme Clothing: Store 3
- Acme Cosmetics: Store 1
- Acme Cosmetics: Store 2
- Acme Cosmetics: Store 3

A Widget or Display with matching Tags will then show the images on your Display.

###Freeform Tag
A Freeform tag is made up of a Name and freeform text. The freeform text is entered when a Freeform Tag is assigned to an image or video in Rise Storage and is unique for each item. 

Once a Freeform Tag has been assigned to a image or video, the freeform text is made avaialble as metadata where it can optionally be overlaid the tagged item. 

