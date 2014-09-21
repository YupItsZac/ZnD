
(function( $ ) {


    $.fn.ZnD = function(options) {

    	var defaults = {
    		prePopulate: [],
    		removedCallback: "",
    		startCallback: "",
    		dragCallback: "",
    		helpCallback: "",
    		draggableClass: ".draggablediv",
    		finalContainer: "#finalcontainer",
    		errorContainer: "#errorContainer"
    	}

    	jQuery.options = $.extend({}, defaults, options);
    	if(jQuery.options.prePopulate.length) {
    		self.prePopulate(jQuery.options.prePopulate);
    	}


    	$(jQuery.options.dragContainer).prepend('<h'+jQuery.options.titleSize+'>'+jQuery.options.dragTitle+'</h'+jQuery.options.titleSize+'>');
    	$(jQuery.options.zoneContain).prepend('<h'+jQuery.options.titleSize+'>'+jQuery.options.finalTitle+'</h'+jQuery.options.titleSize+'>');

		$(jQuery.options.finalContainer).droppable({
			drop: function( event, ui ) {
			var draggableId = ui.draggable.attr("id");
			var droppableId = $(this).attr("id");
			var dragVal = $('#'+draggableId).text();
			if($(this).children('#'+draggableId).size() > 0) {
				if($.isFunction(jQuery.options.rejectedCallback)) {
					jQuery.options.rejectedCallback(draggableId);
				}
			    $(jQuery.options.errorElement).animate({
			  		backgroundColor: "#FF0000"
					}, 500).animate({
			 			backgroundColor: "#EAEEF4"
					}, 500);
			            return false
			        }
				$(jQuery.options.finalContainer).append('<li class="draggablediv" id="'+draggableId+'">'+dragVal+' <span class="optRight"><span class="helpIcon" id="helpIcon'+draggableId+'"><a href="#" onclick="self.helpFunc(&quot;'+draggableId+'&quot;);">?</a></span><a href="#" onclick="self.deActivate(&quot;'+draggableId+'&quot;);">X</a></span></li>');
				if($.isFunction(jQuery.options.helpCallback)) {
					jQuery('#helpIcon'+draggableId).fadeIn("slow");
				}

				if ($.isFunction(jQuery.options.droppedCallback)) {
					jQuery.options.droppedCallback(draggableId);
				}
			}
		});
			    
		$(jQuery.options.draggableClass ).draggable({
			revert: "invalid",
			cursor: "move",
			start: function() {
			    if(!jQuery.options.startCallback) {
			    		//No callback, do nothing.
			    } else {
			    	jQuery.options.startCallback();
			    }
			},
			drag: function() {
			    if(!jQuery.options.dragCallback) {
			    		//No callback, do nothing.
			    } else {
			    	jQuery.options.dragCallback();
			    }
			    },
			helper: function(ev, ui){
			    return "<span class='helperPick'>"+$(this).html()+"</span>"
			}

		});
 
    },

    deActivate = function(fid) {
    	var self = this;
    	$(jQuery.options.finalContainer+' #'+fid).remove();
    	if ($.isFunction(jQuery.options.removedCallback)) {
    		jQuery.options.removedCallback(fid);
    	}
    },

    helpFunc = function(hid) {
    	if($.isFunction(jQuery.options.helpCallback)) {
    		jQuery.options.helpCallback(hid);
    	}
    },

    prePopulate = function(opts) {
    	for (var key in opts) {
   			var obj = opts[key];
   			for (var prop in obj) {
     			 // important check that this is objects own property 
      			// not from prototype prop inherited
      			if(obj.hasOwnProperty(prop)){
        			$(jQuery.options.finalContainer).append('<li class="draggablediv" id="'+prop+'">'+obj[prop]+' <span class="optRight"><span class="helpIcon" id="helpIcon'+prop+'"><a href="#" onclick="self.helpFunc(&quot;'+prop+'&quot;);">?</a></span><a href="#" onclick="self.deActivate(&quot;'+prop+'&quot;);">X</a></span></li>');
					if($.isFunction(jQuery.options.helpCallback)) {
						jQuery('#helpIcon'+prop).fadeIn("slow");
					}
      			}
   			}
		}
    };


    $.fn.ZnD.populateFinal = function(opts) {
    	$(jQuery.options.finalContainer).html('');
    	jQuery.each(opts, function(key, value) {
			$(jQuery.options.finalContainer).append('<li class="draggablediv" id="'+key+'">'+value+' <span class="optRight"><span class="helpIcon" id="helpIcon'+key+'"><a href="#" onclick="self.helpFunc(&quot;'+key+'&quot;);">?</a></span><a href="#" onclick="self.deActivate(&quot;'+key+'&quot;);">X</a></span></li>');
			if($.isFunction(jQuery.options.helpCallback)) {
				jQuery('#helpIcon'+key).fadeIn("slow");
			}
    	});
	};

	$.fn.ZnD.listenAgain = function() {
		$(jQuery.options.finalContainer).droppable({
			drop: function( event, ui ) {
			var draggableId = ui.draggable.attr("id");
			var droppableId = $(this).attr("id");
			var dragVal = $('#'+draggableId).text();
			if($(this).children('#'+draggableId).size() > 0) {
				if($.isFunction(jQuery.options.rejectedCallback)) {
					jQuery.options.rejectedCallback(draggableId);
				}
			    $(jQuery.options.errorElement).animate({
			  		backgroundColor: "#FF0000"
					}, 500).animate({
			 			backgroundColor: "#EAEEF4"
					}, 500);
			            return false
			        }
				$(jQuery.options.finalContainer).append('<li class="draggablediv" id="'+draggableId+'">'+dragVal+' <span class="optRight"><span class="helpIcon" id="helpIcon'+draggableId+'"><a href="#" onclick="self.helpFunc(&quot;'+draggableId+'&quot;);">?</a></span><a href="#" onclick="self.deActivate(&quot;'+draggableId+'&quot;);">X</a></span></li>');
				if($.isFunction(jQuery.options.helpCallback)) {
					jQuery('#helpIcon'+draggableId).fadeIn("slow");
				}

				if ($.isFunction(jQuery.options.droppedCallback)) {
					jQuery.options.droppedCallback(draggableId);
				}
			}
		});
			    
		$(jQuery.options.draggableClass ).draggable({
			revert: "invalid",
			cursor: "move",
			start: function() {
			    if(!jQuery.options.startCallback) {
			    		//No callback, do nothing.
			    } else {
			    	jQuery.options.startCallback();
			    }
			},
			drag: function() {
			    if(!jQuery.options.dragCallback) {
			    		//No callback, do nothing.
			    } else {
			    	jQuery.options.dragCallback();
			    }
			    },
			helper: function(ev, ui){
			    return "<span class='helperPick'>"+$(this).html()+"</span>"
			}

		});

	};

	$.fn.ZnD.clearFinal = function() {
		$(jQuery.options.finalContainer).html('');
	};

	$.fn.ZnD.showModal = function(mopts) {

		var defs = {
    		bodyContent: "ZnD Plugin by Zac Brown<br><br><a href='http://www.yupitszac.com'>www.yupitszac.com</a>",
    		buttonColor: "#154890",
    		buttonText: "Okay",
    		modalWidth: "320px",
    		modalHeight: "240px"
    	}

		modalOptions = $.extend({}, defs, mopts);

		$('body').append('<div class="modalBG"></div>');
		$('.modalBG').fadeIn("slow");
		$('body').append('<div class="modal-dialog">'+modalOptions.bodyContent+'<div class="ZnDbtn" onclick="jQuery().ZnD.closeModal()">'+modalOptions.buttonText+'</div></div>');
		$('.modal-dialog').fadeIn("slow");
		$('.ZnDbtn').css("background-color",modalOptions.buttonColor);
		$('.modal-dialog').css('width', modalOptions.modalWidth);
		$('.modal-dialog').css('height', modalOptions.modalHeight);

	};

	$.fn.ZnD.closeModal = function() {
		$('.modalBG').remove();
		$('.modal-dialog').remove();
	}
 
})( jQuery );