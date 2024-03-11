jQuery(document).ready(function(){var hideSearchForm=function(){jQuery('#cm-masthead .search-form-top').removeClass('show');jQuery('#cm-content').removeClass('backdrop')};jQuery('.search-top').click(function(){jQuery(this).next('#cm-masthead .search-form-top').toggleClass('show');jQuery('#cm-content').toggleClass('backdrop');setTimeout(function(){jQuery('#cm-masthead .search-form-top input').focus()},200);jQuery(document).on('keyup',function(e){if(27===e.keyCode){if(jQuery('#cm-masthead .search-form-top').hasClass('show')){hideSearchForm()}}});jQuery(document).on('click.outEvent',function(e){if(e.target.closest('.cm-top-search')){return}
hideSearchForm();jQuery(document).off('click.outEvent')})});jQuery('#scroll-up').hide();jQuery(window).scroll(function(){if(jQuery(this).scrollTop()>1000){jQuery('#scroll-up').fadeIn()}else{jQuery('#scroll-up').fadeOut()}});jQuery('a#scroll-up').click(function(){jQuery('body,html').animate({scrollTop:0},800);return!1});jQuery('.cm-menu-primary-container .menu-item-has-children');jQuery('.cm-menu-primary-container .cm-submenu-toggle').click(function(){jQuery(this).parent('.menu-item-has-children').children('ul.sub-menu').first().slideToggle('1000')});jQuery(document).on('click','#cm-primary-nav ul li.menu-item-has-children > a',function(event){var menuClass=jQuery(this).parent('.menu-item-has-children');if(!menuClass.hasClass('focus')&&jQuery(window).width()<=768){menuClass.addClass('focus');event.preventDefault();menuClass.children('.sub-menu').css({'display':'block'})}});jQuery(window).on('load',function(){if(window.matchMedia('(max-width: 768px)').matches&&jQuery('#cm-masthead .sticky-wrapper, #cm-masthead .headroom').length>=1){var screenHeight=jQuery(window).height();var availableMenuHeight=screenHeight-88;var menu=jQuery('#cm-primary-nav').find('ul').first();menu.css('max-height',availableMenuHeight);menu.addClass('menu-scrollbar')}});jQuery('.wp-block-group__inner-container h2').wrap('<div class="block-title"></div>');jQuery('.wp-block-heading').wrap('<div class="block-title"></div>');if(typeof jQuery.fn.magnificPopup!=='undefined'){jQuery('.image-popup').magnificPopup({type:'image'});jQuery('.gallery').find('a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"], a[href*=".ico"]').magnificPopup({type:'image',gallery:{enabled:!0}});jQuery('.colormag-ticker-news-popup-link').magnificPopup({type:'ajax',callbacks:{parseAjax:function(mfpResponse){var setting=jQuery.magnificPopup.instance,content=jQuery(setting.currItem.el[0]),fragment=(content.data('fragment'));mfpResponse.data=jQuery(mfpResponse.data).find(fragment)}}})}
if(typeof jQuery.fn.fitVids!=='undefined'){jQuery('.fitvids-video').fitVids()}
if(typeof jQuery.fn.newsTicker!=='undefined'){jQuery('.newsticker').newsTicker({row_height:20,max_rows:1,speed:1000,direction:'down',duration:4000,autostart:1,pauseOnHover:1,start:function(){jQuery('.newsticker').css('visibility','visible')}})}
if(typeof jQuery.fn.sticky!=='undefined'){var wpAdminBar=jQuery('#wpadminbar');if(wpAdminBar.length){jQuery('#cm-primary-nav').sticky({topSpacing:wpAdminBar.height(),zIndex:999})}else{jQuery('#cm-primary-nav').sticky({topSpacing:0,zIndex:999})}}
jQuery('.wp-block-search__input').attr("placeholder","Search posts");if(typeof jQuery.fn.headroom!=='undefined'){var offset_value=jQuery('#cm-primary-nav').offset().top;var wpAdminBar=jQuery('#wpadminbar');var menuwidth=jQuery('.cm-primary-nav').width();if(wpAdminBar.length){offset_value=wpAdminBar.height()+jQuery('#cm-primary-nav').offset().top}
jQuery('.cm-primary-nav').headroom({'offset':offset_value,'tolerance':0,onPin:function(){if(wpAdminBar.length){jQuery('.cm-primary-nav').css({'top':wpAdminBar.height(),'position':'fixed','width':menuwidth})}else{jQuery('.cm-primary-nav').css({'top':0,'position':'fixed','width':menuwidth})}},onTop:function(){jQuery('.cm-primary-nav').css({'top':0,'position':'relative'})}})}
if(typeof jQuery.fn.bxSlider!=='undefined'){jQuery('.cm-slider-area-rotate').bxSlider({mode:'horizontal',speed:1500,auto:!0,pause:5000,adaptiveHeight:!0,nextText:'',prevText:'',nextSelector:'.slide-next',prevSelector:'.slide-prev',pager:!1,tickerHover:!0,onSliderLoad:function(){jQuery('.cm-slider-area-rotate').css('visibility','visible');jQuery('.cm-slider-area-rotate').css('height','auto')}});jQuery('.blog .gallery-images, .archive .gallery-images, .search .gallery-images, .single-post .gallery-images').bxSlider({mode:'fade',speed:1500,auto:!0,pause:3000,adaptiveHeight:!0,nextText:'',prevText:'',nextSelector:'.slide-next',prevSelector:'.slide-prev',pager:!1})}
if(typeof jQuery.fn.easytabs!=='undefined'){jQuery('.cm-tabbed-widget').easytabs()}
if(typeof jQuery.fn.theiaStickySidebar!=='undefined'&&typeof ResizeSensor!=='undefined'){var height=jQuery('#site-navigation-sticky-wrapper').outerHeight();if(height===null){height=0}
jQuery('#cm-primary, #cm-secondary, #tertiary').theiaStickySidebar({additionalMarginTop:40+height})}
jQuery('.video-player').each(function(index){var playercontainer=jQuery(this);var itemid='video-playlist-item-'+index;var playerframe=jQuery(this).find('.player-frame');playercontainer.attr('id',itemid);playerframe.video();update_video_status(playercontainer);playerframe.addVideoEvent('ready',function(){playerframe.css('visibility','visible').fadeIn()});playercontainer.on('click','.video-playlist-item',function(){var item=jQuery(this);var iframe_id=item.data('id');var current_video_id=jQuery('#'+iframe_id);var src=item.data('src');playercontainer.find('.player-frame').each(function(){jQuery(this).pauseVideo().hide()});if(!current_video_id.length){playercontainer.find('.video-frame').append('<iframe id="'+iframe_id+'" class="player-frame" src="'+src+'" frameborder="0" width="100%" height="434" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');current_video_id=jQuery('#'+iframe_id);current_video_id.video();current_video_id.addVideoEvent('ready',function(e,$current_video_id,video_type){current_video_id.playVideo()})}else{current_video_id.playVideo()}
current_video_id.css('visibility','visible').fadeIn();update_video_status(playercontainer)})});function update_video_status(playercontainer){playercontainer.find('.player-frame').each(function(){var frame=jQuery(this),videoitem=jQuery('[data-id="'+frame.attr('id')+'"]');frame.addVideoEvent('play',function(e,$video,video_type){videoitem.removeClass('is-paused').addClass('is-playing')});frame.addVideoEvent('pause',function(e,$video,video_type){videoitem.removeClass('is-playing').addClass('is-paused')});frame.addVideoEvent('finish',function(e,$video,video_type){videoitem.removeClass('is-paused is-playing')})})}
if(typeof google!=='undefined'&&typeof colormag_google_maps_widget_settings!=='undefined'){function initMap(){var longitude=parseFloat(colormag_google_maps_widget_settings.longitude);var latitude=parseFloat(colormag_google_maps_widget_settings.latitude);var zoom_size=parseInt(colormag_google_maps_widget_settings.zoom_size);var latitudelongitude={lat:latitude,lng:longitude};var map=new google.maps.Map(document.getElementById('GoogleMaps'),{zoom:zoom_size,center:latitudelongitude});var marker=new google.maps.Marker({position:latitudelongitude,map:map})}
initMap();jQuery('#GoogleMaps').css({height:colormag_google_maps_widget_settings.height})}(function(){var facebookShare=jQuery('.share-buttons #facebook')[0],twitterShare=jQuery('.share-buttons #twitter')[0],pinterestshare=jQuery('.share-buttons #pinterest')[0],facebookWindow,twitterWindow,pinterestWindow;if(facebookShare){jQuery(facebookShare).click(function(e){e.preventDefault();facebookWindow=window.open('https://www.facebook.com/sharer/sharer.php?u='+document.URL+'&p[title]='+document.title,'facebook-popup','height=350,width=600');if(facebookWindow.focus){facebookWindow.focus()}
return!1})}
if(twitterShare){jQuery(twitterShare).click(function(e){e.preventDefault();twitterWindow=window.open('https://twitter.com/share?text='+document.title+'&url='+document.URL,'twitter-popup','height=350,width=600');if(twitterWindow.focus){twitterWindow.focus()}
return!1})}
if(pinterestshare){jQuery(pinterestshare).click(function(e){e.preventDefault();var featuredImage=jQuery('.cm-posts .cm-featured-image img').attr('src')?jQuery('.cm-posts .cm-featured-image img').attr('src'):'';pinterestWindow=window.open('https://pinterest.com/pin/create/button/?url='+document.URL+'&media='+featuredImage+'&description='+document.title,'pinterest-popup','height=350,width=600');if(pinterestWindow.focus){pinterestWindow.focus()}
return!1})}}())})