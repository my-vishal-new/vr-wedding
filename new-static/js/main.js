/*
-----------------------------------------------

-----------------------------------------------
// ========== TABLE OF CONTENTS ============ //
	1. PRELOADER
	2. GALLERY LIGHTBOX
    3. GOOGLE MAPS
    4. COUNTDOWN START
-----------------------------------------------*/

/* Preloader js */
$(window).on('load', function() { 
   "use strict";   
    $('.status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow'); 
}); 
/* END Preloader js */

/* ***************** start document load **********************/
$(document).ready(function() {
   "use strict";   
    
   var $tfront = $(".title-front").hide();
   var $tunder = $(".title-under").hide();
   $tfront.show().arctext({radius: 250});
   $tunder.show().arctext({radius: 180, dir: -1});

    var content = $("body"),
      navbar = $(".navbar"),
      col = $(".col-transform");

    $(".show-info").on('click', function() { 
      if (window.innerWidth > 990) {
        if (content.hasClass('show-content')) {
          col.removeClass('col-md-6').addClass('col-md-12');
          content.removeClass('show-content');
          setTimeout(function () {
            navbar.removeClass('navbar-open')
          }, 900);
        } else {
          col.removeClass('col-md-12').addClass('col-md-6');
          content.addClass('show-content');
          setTimeout(function () {
            navbar.addClass('navbar-open')
          }, 300);
        }
      }
    });
    
    // Gallery Lightbox
    $(".bearr-gallery-item a").simpleLightbox();   
    
    //Google maps
	//Map
	var map;
	var odessa = new google.maps.LatLng(46.45879177, 30.73738575);

	var MY_MAPTYPE_ID = 'custom_style';

	function initialize() {
	    //Start options
	    var featureOpts = 
	    [
	    {
	        "featureType": "landscape",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "transit",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "stylers": [
	            {
	                "hue": "#00aaff"
	            },
	            {
	                "saturation": -100
	            },
	            {
	                "gamma": 2.15
	            },
	            {
	                "lightness": 12
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "lightness": 24
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "lightness": 57
	            }
	        ]
	    }
	    ];
	    //END options

	    //END maps options
	    var mapOptions = {
	        zoom: 14,
	        center: odessa,
	        disableDefaultUI: true,
	        scrollwheel: false,
	        mapTypeControlOptions: {
	          mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
	        },
	        mapTypeId: MY_MAPTYPE_ID
	    };
	    //END maps options
	    
	    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
	    var styledMapOptions = {
	        name: 'Custom Style'
	    };
	    var customMapType_church = new google.maps.StyledMapType(featureOpts, styledMapOptions);
	    map.mapTypes.set(MY_MAPTYPE_ID, customMapType_church);
	    
	    //marker church
	    var image_church  = new google.maps.MarkerImage("static/img/marker-church.png", null, null, null, new google.maps.Size(33,50));
	    var positionpin_church  = new google.maps.LatLng(46.45846658, 30.73616266);
	    var marker_church  = new google.maps.Marker({
	      position: positionpin_church ,
	      icon: image_church ,
	      map: map,
	      flat: true,
	      title: ''
	    });
	    var boxText_church = document.createElement("div");
	    boxText_church.innerHTML = '<div class="grid grid_6 percentage border-white"><div class="block-focus center"><h4>Church</h4><h5>Cerimony</h5><p>12:00 PM</p></div></div><div class="grid grid_6 percentage border-white"><img class="block-focus border-white" src="static/img/map-church.jpg"></div>';
	    var marker_church_options = {
	         content: boxText_church
	        ,disableAutoPan: false
	        ,maxWidth: 0
	        ,pixelOffset: new google.maps.Size(-127, -160)
	        ,zIndex: null
	        ,boxStyle: { 
	          opacity: 1,
	          width: "250px",
	          background: "#fff",
	         }
	        ,closeBoxMargin: "10px"
	        ,closeBoxURL: "static/img/map-close.png"
	        ,infoBoxClearance: new google.maps.Size(1, 1)
	        ,isHidden: false
	        ,pane: "floatPane"
	        ,enableEventPropagation: false
	    };
		var info_box_church = new InfoBox(marker_church_options);
	    google.maps.event.addListener(marker_church, 'click', function() {
	        info_box_church.open(map,marker_church);
	    });
	    info_box_church.open(map,marker_church);
	    //end marker church
	    
	    //marker restaurant
	    var image_restaurant = new google.maps.MarkerImage("static/img/marker-restaurant.png", null, null, null, new google.maps.Size(33,50));
	    var positionpin_restaurant = new google.maps.LatLng(46.44708343, 30.71826696);
	    var marker_restaurant = new google.maps.Marker({
	      position: positionpin_restaurant,
	      icon: image_restaurant,
	      map: map,
	      flat: true,
	      title: ''
	    });
	    var boxText_restaurant = document.createElement("div");
	    boxText_restaurant.innerHTML = '<div class="grid grid_6 percentage border-white"><div class="block-focus center"><h4><strong>Restaurant</strong></h4><h5>PARTY</h5><p>14:00 PM</p></div></div><div class="grid grid_6 percentage border-white"><img class="block-focus border-white" src="static/img/map-restaurant.jpg"></div>';
	    var marker_restaurant_options = {
	         content: boxText_restaurant
	        ,disableAutoPan: false
	        ,maxWidth: 0
	        ,pixelOffset: new google.maps.Size(-127, -160)
	        ,zIndex: null
	        ,boxStyle: { 
	          opacity: 1,
	          width: "250px",
	          background: "#fff",
	         }
	        ,closeBoxMargin: "10px"
	        ,closeBoxURL: "static/img/map-close.png"
	        ,infoBoxClearance: new google.maps.Size(1, 1)
	        ,isHidden: false
	        ,pane: "floatPane"
	        ,enableEventPropagation: false
	    };
		var info_box_restaurant = new InfoBox(marker_restaurant_options);
	    google.maps.event.addListener(marker_restaurant, 'click', function() {
	        info_box_restaurant.open(map,marker_restaurant);
	    });
	    info_box_restaurant.open(map,marker_restaurant);
	    //end marker restaurant
	    
	    //marker hotel
	    var image_hotel = new google.maps.MarkerImage("static/img/marker-hotel.png", null, null, null, new google.maps.Size(33,50));
	    var positionpin_hotel = new google.maps.LatLng(46.44779309, 30.7551527);
	    var marker_hotel = new google.maps.Marker({
	      position: positionpin_hotel,
	      icon: image_hotel,
	      map: map,
	      flat: true,
	      title: ''
	    });
	    var boxText_hotel = document.createElement("div");
	    boxText_hotel.innerHTML = '<div class="grid grid_6 percentage block-focus"><div class="block-focus center"><h4>Hotel</h4><h5>Sleep</h5><p><i class="icon icon-star"></i><i class="icon icon-star"></i><i class="icon icon-star"></i><i class="icon icon-star"></i><i class="icon icon-star"></i></p></div></div><div class="grid grid_6 percentage block-focus"><img class="block-focus block-focus" src="static/img/map-hotel.jpg"></div>';
	    var marker_hotel_options = {
	         content: boxText_hotel
	        ,disableAutoPan: false
	        ,maxWidth: 0
	        ,pixelOffset: new google.maps.Size(-127, -160)
	        ,zIndex: null
	        ,boxStyle: { 
	          opacity: 1,
	          width: "250px",
	          background: "#fff",
	         }
	        ,closeBoxMargin: "10px"
	        ,closeBoxURL: "static/img/map-close.png"
	        ,infoBoxClearance: new google.maps.Size(1, 1)
	        ,isHidden: false
	        ,pane: "floatPane"
	        ,enableEventPropagation: false
	    };
		var info_box_hotel = new InfoBox(marker_hotel_options);
	    google.maps.event.addListener(marker_hotel, 'click', function() {
	        info_box_hotel.open(map,marker_hotel);
	    });
	    info_box_hotel.open(map,marker_hotel);
	    //end marker hotel
	}
	google.maps.event.addDomListener(window, 'load', initialize);
	//END GOOGLE MAPS  
		/*========== Countdown start ================*/
		


// Initialize the countdown
var init_countdown = function() {
    var countdown = new FlipClock($('#countdown'), {
        clockFace: 'DailyCounter',
        language: 'en',
        autoStart: false,
		minimumDigits: 8,
        countdown: true,
        showSeconds: true,
        callbacks: {
            start: function() {
                console.log('The clock has started!');
            },
            stop: function() {
                console.log('The clock has stopped!');
                // Display "Got Married" when the countdown stops
                $('#countdown').html('<h1 style="font-size: 34px;color: greenyellow;">Got Married</h1>');
                // Save the state to local storage
                localStorage.setItem('countdownEnded', 'true');
            },
            interval: function() {
                var time = this.factory.getTime().time;
                if (time) {
                    console.log('Clock interval', time);
                }
            }
        }
    });

    return countdown;
};

// Set the countdown to a specific date and time
var set_countdown = function(targetDate) {
    if (countdown.running) {
        return;
    }

    var now = new Date();
    targetDate = new Date(targetDate);

    var left_secs = Math.round((targetDate.getTime() - now.getTime()) / 1000);

    if (left_secs <= 0) {
        // Display "Got Married" if the target date has passed
        $('#countdown').html('<h1 style="font-size: 34px;color: greenyellow;">Got Married</h1>');
        //localStorage.setItem('countdownEnded', 'true');
    } else {
        countdown.setTime(left_secs);
        countdown.start();
    }
};

// Check if the countdown has already ended
if (localStorage.getItem('countdownEnded') === 'false') {
    // Display "Got Married" if countdown has ended
   // $('#countdown').html('<h1 style="font-size: 34px;color: greenyellow;">Got Married</h1>');
} else {
    // Initialize the countdown
    var countdown = init_countdown();
    // Set the countdown to June 21, 2024, 6:40 PM
    set_countdown('Jully 14, 2024 12:35:00');
}

			
	/*========== Countdown end ================*/
}); 