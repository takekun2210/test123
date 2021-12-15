
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: "AIzaSyC53j_a3m4SFIYpnlO6DEA74R5bGYC0MBA",
  version: "weekly",
  libraries: ["places"]
});

const mapOptions = {
  center: {
    lat: 25.04,
    lng: 121.512
  },
  zoom: 16,
  fullscreenControl: false,
  streetViewControl: false,
  mapTypeControl: false
};


loader
  .load()
  .then((google) => {
    new google.maps.Map(document.getElementById("googleMapSection"), mapOptions);
    
    marker = new google.maps.Marker({
      position: {lat: 25.04, lng: 121.512},
      map,
      title: "總統府"
    });

    // marker.setMap(map);
  })
  .catch(e => {
    // do something
  });

// another way to load the google map
  
// loader.loadCallback(e => {
//   if (e) {
//     console.log(e);
//   } else {
//     var map;
//     new google.maps.Map(document.getElementById("googleMapSection"), mapOptions);
    
//     new google.maps.Marker({
//     position: {lat: 25.04, lng: 121.512},
//     map: map,
//     title: "總統府"
//     });

//   }
// });