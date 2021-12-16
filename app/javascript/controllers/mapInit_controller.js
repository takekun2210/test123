// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"
// 假的資料去測試，之後會直接寫一個打api的檔案然後把吐回來的資料import進來
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
  
      // 展開所有的景點marker
      // mockData.forEach(function(element,index){
      //   markers[index] = new google.maps.Marker(element);
      //   markers[index].setMap(map);
      // });  

      // 加上點到點之間的連線
      const spotsCoordinates = []
      mockData.forEach((element) => {
        spotsCoordinates.push(element.position)
      })

      const spotsPath = new google.maps.Polyline({
        path: spotsCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 3,
      });
    
      spotsPath.setMap(map);

      // 把marker做成動畫（IFFE function)
      (function dropMarker() {
      
        for (let i = 0; i < spotsCoordinates.length; i++) {
          addMarkerWithTimeout(spotsCoordinates[i], i * 250);
        }
      })();
      
      function addMarkerWithTimeout(position, timeout) {
        window.setTimeout(() => {
          markers.push(
            new google.maps.Marker({
              position: position,
              map,
              animation: google.maps.Animation.DROP,
            })
          );
        }, timeout);
      }

    } else {

      // 乾淨的初始地圖，沒有任何景點
      const map = new google.maps.Map(this.initialmapTarget, {
        center: {"lat": 25.0412401, "lng": 121.5226487 },
        zoom: 16,
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false
      });

    }

  }
}
