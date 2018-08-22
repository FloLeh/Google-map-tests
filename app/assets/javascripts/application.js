// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//= require jquery3
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .



function myMap(lat=47.218371,long=-1.553621,message="La meilleure ville") {
  // var myCenter = new google.maps.LatLng(47.218371,-1.553621);
  var myCenter = new google.maps.LatLng(lat,long);

  var mapProp= {
      center: new google.maps.LatLng(lat,long),
      zoom:6,
  };

  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var marker = new google.maps.Marker({
    position: myCenter
  });

  var infowindow = new google.maps.InfoWindow({
         content: message
       });
  infowindow.open(map,marker);


  marker.setMap(map);
}
$(document).ready(function(){
  $('.bouton').click(function(){myMap($('.lat').val(),$('.long').val(),$('.message').val())})
});
