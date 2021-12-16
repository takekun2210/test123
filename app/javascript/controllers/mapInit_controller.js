// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"
import { mockData } from '../lib/fakedata'

export default class extends Controller {
  static targets = [ "initialmap" ]

  connect() {

    
    if (typeof google != "undefined") {
      this.renderMap();
    }
  }

  renderMap() {

    // 如果回來的那一包資料有無景點的判斷
    // 哪一天的怎麼辦？要想一下
    if (mockData.length !== 0) {

      var markers = []
      const map = new google.maps.Map(this.initialmapTarget, {
        center: mockData[1].position,
        zoom: 16,
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false
      });
  
      mockData.forEach(function(element,index){
        markers[index] = new google.maps.Marker(element);
        markers[index].setMap(map);
      });  

    } else {

      const map = new google.maps.Map(this.initialmapTarget, {
        center: {"lat": 25.0412401, "lng": 121.5226487 },
        zoom: 16,
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false
      });

    }



  // new google.maps.Marker({
  //   position: { lat: 25.04, lng: 121.512 },
  //   map,
  //   title: "台灣總統府",
  // })

  }
}
