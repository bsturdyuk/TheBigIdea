$(document).ready(function(){

  // Map
  jQuery(function($){
     var longitude = 10.8037418;
     var latitude = 106.7344421;
     var canvas = "map";


     function randing_map(canvas, lan, lat){
       var myLatlng = new google.maps.LatLng(lan,lat);
       var myOptions = {
                   zoom: 17,
                   center: myLatlng,
                   scrollwheel: false,
                   navigationControl: false,
                   mapTypeControl: false,
                   scaleControl: false,
                   draggable: false,
                   mapTypeId: google.maps.MapTypeId.ROADMAP,
                   maxZoom   : 20,
                   disableDefaultUI: false
               }
       var map = new google.maps.Map( document.getElementById(canvas), myOptions );
       var marker = new google.maps.Marker({
           position : myLatlng,
           map      : map,
           icon     : "img/assets/contact/map-marker.png"
       });
       var styles = []
       var infowindow = new google.maps.InfoWindow({
           content:"<div class='map_adresse'><div class='map_address'>94 Xuan Thuy, Thao Dien,<br> District 2, HCMC, Vietnam</div></div>"
       });

       map.setOptions({styles: styles});

       google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);
       });
     }
     randing_map(canvas, longitude, latitude);
  });

  // //Contact Page Map Centering
  // var hw = $('header').width() + 0;
  // var mw = $('#map').width();
  // var wh = $(window).height();
  // var ww = $(window).width();
  //
  // $('#map').css({
  //    "max-width" : mw,
  //    "height" : wh
  // });
  //
  // if(ww>1100){
  //     $('#map').css({
  //        "margin-left" : hw
  //    });
  // }

});
