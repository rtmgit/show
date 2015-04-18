function contentToggle(content){
	var parentObj = $(content).attr('id');
	var arr = $('div#'+parentObj+' p');
	
	for(i=1;i<arr.length;i++){
		if($(arr[i]).is(':hidden')){
			$(arr[i]).show();
		}else{
			$(arr[i]).hide();
		}
	}
}
$(function(){

	var showChar = 300;
	if($(window).width() <= 768){
     	showChar = 230;
	}
	var element=0;
	var ellipsestext='...';
	var prevElement = null;
	var toggleElement = null;
	var moreelipses = null;
	var subcontent = null;
	var prevElementSubcontent = null;
	var prevElementMoreelipses = null;

	$(".button span").addClass('downArrow');
 	$('#btn1, #btn2, #btn3, #btn4, #btn5').click(function(){
 		subcontent = $(this).parent().find(".remaining-content");
 		console.log(subcontent.html());
 		moreelipses = $(this).parent().find(".moreelipses");
 		console.log(moreelipses.html());
		if ($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html("<span>show more</span>");
			$("#"+$(this).attr('id')+" span").addClass('downArrow');
			$("#"+$(this).attr('id')+" span").removeClass('upArrow');
			if(subcontent.hasClass("show") && moreelipses.hasClass("hide")){
				console.log("in main if");
				$(subcontent).removeClass("show");
				$(subcontent).addClass("hide");

				$(moreelipses).removeClass("hide");
				$(moreelipses).addClass("show");
			}
	    } else {
	    	$(this).addClass("less");
			$(this).html("<span>show less</span>");
			$("#"+$(this).attr('id')+" span").addClass('upArrow');
			$("#"+$(this).attr('id')+" span").removeClass('downArrow');
            
           
			if(subcontent.hasClass("hide") && moreelipses.hasClass("show")){
				console.log("in main else");
				console.log(subcontent.attr("class"));
				$(subcontent).removeClass("hide");
				$(subcontent).addClass("show");
				console.log(subcontent.attr("class"));

				$(moreelipses).removeClass("show");
				$(moreelipses).addClass("hide");
			}
			console.log("added class for: "+$(this));
			if( prevElement != null && prevElement != $(this).attr('id') && $("#"+prevElement+"").hasClass("less")) {
			    $("#"+prevElement+"").removeClass("less");
			    $("#"+prevElement+"").html("<span>show more</span>");
			    prevElementSubcontent = $("#"+prevElement+"").parent().find(".remaining-content");
 				prevElementMoreelipses = $("#"+prevElement+"").parent().find(".moreelipses");
			    if(prevElementSubcontent.hasClass("show") && prevElementMoreelipses.hasClass("hide")){
					prevElementSubcontent.removeClass("show");
					prevElementSubcontent.addClass("hide");

					prevElementMoreelipses.removeClass("hide");
					prevElementMoreelipses.addClass("show");

					$("#"+prevElement+" span").addClass('downArrow');
					$("#"+prevElement+" span").removeClass('upArrow');
				}
			    toggleElement = $("#"+prevElement+"").parent();
			    contentToggle(toggleElement);
			}		
	    }
	    toggleElement = $(this).parent();
		contentToggle(toggleElement);
	    prevElement= $(this).attr('id');
	    return false;
	});
	$('.comments-space').each(function(){
		var parent_id = $(this).attr('id');
		var arr = $('div#'+parent_id+' p');
		
		for(i=0;i<arr.length;i++)
		{
			element = $(arr[i]);
			if(i == 0){
				var content = element.html();
		    	if (content.length > showChar) {
					var show_content = content.substr(0, showChar);
					var hide_content = content.substr(showChar, content.length - showChar);
					var html = show_content + '<span class="moreelipses show">' + ellipsestext + '</span><span class="remaining-content hide">' + hide_content + '&nbsp;&nbsp;</span>';
					element.html(html);
					$("div#"+parent_id+" span.remaining-content").addClass("hide");
				}
	    	}else{
					element.hide();
			}
	    }	
	});
});