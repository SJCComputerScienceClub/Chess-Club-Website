var MSIE8 = ($.browser.msie) && ($.browser.version == 8);
$(document).ready(function(){	
var MSIE8 = ($.browser.msie) && ($.browser.version == 8);
	$.fn.ajaxJSSwitch({
		topMargin:378,//mandatory property for decktop
		bottomMargin:164,//mandatory property for decktop
		bodyMinHeight:950,
		topMarginMobileDevices:0,//mandatory property for mobile devices
		bottomMarginMobileDevices:0,//mandatory property for mobile devices
		menuInit:function (classMenu, classSubMenu){
			classMenu.find(">li").each(function(){
				var conText = $(this).find('.mText').text();
				$(">a", this).append("<div class='_area'></div><div class='_overPl'></div><div class='_overLine'></div><div class='mTextOver'>"+conText+"</div>"); 
			})
		},
		buttonOver:function (item){
			$(".mText",item).stop(true).animate({top:"160px"}, 600, 'easeOutCubic');
            $(".mTextOver", item).stop(true).delay(150).animate({top:"40px"}, 500, 'easeOutCubic');
			$("._overPl", item).stop(true).animate({bottom:"0px"}, 500, 'easeOutCubic');
			$("._overLine", item).stop(true).animate({opacity:1}, 500, 'easeOutCubic');
		},
		buttonOut:function (item){
			$(".mText", item).stop(true).animate({top:"0px"}, 600, 'easeOutCubic');
			$(".mTextOver", item).stop(true).delay(20).animate({top:"-100px"}, 400, 'easeOutCubic');
			$("._overPl", item).stop(true).animate({bottom:"100px"}, 400, 'easeOutCubic');
			$("._overLine", item).stop(true).animate({opacity:0}, 500, 'easeOutCubic');
		},
		subMenuButtonOver:function (item){
			
		},
		subMenuButtonOut:function (item){
		
		},
		subMenuShow:function(subMenu){
			if(MSIE8){
				//subMenu.css({"display":"block", "margin-top":-(subMenu.outerHeight()+0)});
				subMenu.css({"display":"block", "margin-top":0});
			}else{
				//subMenu.stop(true).css({"display":"block", "margin-top":-(subMenu.outerHeight()+0)}).animate({"opacity":"1"}, 600, "easeInOutCubic");
				subMenu.stop(true).css({"display":"block", "margin-top":0}).animate({"opacity":"1"}, 600, "easeInOutCubic");
			}
		},
		subMenuHide:function(subMenu){
			if(MSIE8){
				subMenu.css({"display":"none"});
			}else{
				subMenu.stop(true).delay(300).animate({"opacity":"0"}, 600, "easeInOutCubic", function(){
					$(this).css({"display":"none"})
				});
			}
		},
		pageInit:function (pages){
		},
		currPageAnimate:function (page){

			$("header").stop(true).delay(300).animate({top:0}, 400, 'easeOutCubic');
			$(".splashHolder").stop(true).delay(20).animate({top:'-725px'}, 400, 'easeOutCubic');
			page.css({"left":$(window).width()}).stop(true).delay(300).animate({"left":0}, 900, "easeOutBack");
		},
		prevPageAnimate:function (page){

			page.stop(true).animate({"display":"block", "left":-$(window).outerWidth()*2}, 700, "easeInCubic");

		},
		backToSplash:function (){

			$("header").stop(true).delay(20).animate({top:"-400px"}, 400, 'easeOutCubic');

			if(MSIE8){
				setTimeout(function() {
					$(".splashHolder").stop(true).delay(0).animate({top:'146px'}, 400, 'easeOutCubic');
				},0);
			}else{
				setTimeout(function() {
					$(".splashHolder").stop(true).delay(0).animate({top:'146px'}, 400, 'easeOutCubic');
				},400);
			}

		},
		pageLoadComplete:function (){

			//setTimeout(function() {
				//$('.btn1').hoverSprite({onLoadWebSite:true});
			//},900);

			setTimeout(function() {
				$('.scroll')
					.uScroll({			
						mousewheel:true,
						step: 137,
						lay:'outside'
					});

				$('.scroll_2')
					.uScroll({			
						mousewheel:true,
						step: 148,
						lay:'outside'
					});			
			},300);

		},
	});
	
	
})
$(window).load(function(){	
	$("#webSiteLoader").delay(500).animate({opacity:0}, 600, "easeInCubic", function(){$("#webSiteLoader").remove()});

	$(".image_resize").image_resize({align_img:"center", mobile_align_img:"center"});

	setTimeout(function() {
		$('.social-icon li a').hoverSprite({onLoadWebSite:true});
	},300);
	
	});