ZnD
===

The ZnD plugin leverages jQuery .drag() and .drop() to enable the easy creation of drag and drop interfacing on your website. ZnD also includes a modal dialog that can be used with the DnD interfacing or separately.  

This plugin is distributed as is, and does not include any official support. However, if you come across an issue or need any assistance deploying ZnD, just let me know! I'd be happy to help.

Also, if you'd like to contribute to the plugin, that's cool too. Just fork and start creating!


Usage
===

ZnD is incredibly light weight, and very easy to use. Assuming you have already included jQuery and jQuery UI, its as easy as below.



1). Include the ZnD Javascript, and optionally the stylesheet. 
```javascript

<script type="text/javascript" src="/ZnD/ZnD.js"></script>

//Alternatively, you can include the ZnD script form within your own Javascript file. 

$import('/libs/ZnD/ZnD.js');

```

```html

<link rel="stylesheet" href="/ZnD/ZnD.css">

```


2). After you have included the plugin files, you'll need to initialize the plugin to prepare it. This can be in an onLoad function or somewhere in your init script. The explanation of the options is later in this document.

```javascript

jQ().ZnD({
	finalContainer: "#finalcontainer",
	draggable: ".draggablediv",
	errorElement: "#sort",
	removedCallback: itemRemoved,
	droppedCallback: itemDropped,
	helpCallback: itemHelp,
	dragContainer: "#drag",
	dragTitle: 'Available Fees',
	finalTitle: 'Active Fees',
	titleSize: 1,
	zoneContain: "#sort"
});

```

3). Now, you just use it! After you've initialized the plugin, it attaches to the divs you specified and makes them draggable/droppable. Remember, this is traget list style drag and drop. 

ZnD, however, also includes a modal dialog that can be used with, or without the drag and drop. If you choose to use it without drag and drop, just init the plugin without any options.

```javascript

var bdy = "<h1>ZnD by YupItsZac!</h1><br><br>www.yupitszac.com";

jQ().ZnD.showModal({
	bodyContent: bdy,
	buttonColor: "#F7941D",
	buttonText: "Close",
	modalWidth: "320px",
	modalHeight: "310px"
});
```

This code displays the ZnD modal dialog. You'll need to change the body content (which accepts all markup) to suit your needs.

Options
===

######ZnD Drag&Drop Interfacing

**finalContainer** - The div you want to make droppable. 

**draggable** - This is the div (or class of divs) that you want to make draggable. 

**errorElement** - This is the element that ZnD will use to indicate that an item is already in the list. This is determined by a div's ID attribute. ZnD changes the background color to a bright red, then back.

**removedCallback** - This function is called after an item has been removed from the list.
 
**droppedCallback** - This function is called after an item has been successfully added to the list.

**helpCallback** - This function is called after the help icon is clicked, assuming you included one.

**dragContainer** - This is the element that you want to hold all of your draggable divs, initially. 

**dragTitle** - This is the title dislayed above the dragContainer. 

**finalTitle** - This is the title displayed above the finalContainer.

**titleSize** - On an HTML heading based scale ( <hx> ), the size of the title heading.  

######ZnD Modal Dialog

**bodyContent** - This is the content that ZnD displays on the modal window. Any HTML markup is accepted. 

**buttonColor** - This is the color of the button that triggers the modalClose function.

**buttonText** - The text of the button that triggers the closeModal function. This is usually 'Close' or 'Okay'.

**modalWidth** - The width of the modal. Any type of specification (px, %, etc) is accepted. 

**modalHeight** - The height of the modal. Any type of specification (px, %, etc) is accepted. 
