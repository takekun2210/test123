export const mockData = [
  {
    "position": {"lat": 25.04, "lng": 121.512},
    "title":"總統府"
  },
  {
    "position": {"lat": 25.035, "lng": 121.519},
    "title":"中正紀念堂"
  },
  {
    "position": {"lat": 25.0412401, "lng": 121.5226487 },
    "title":"國父紀念堂"
  },
  {
    "position": {"lat": 25.0430751, "lng": 121.5412284},
    "title":"忠孝敦化站"
  }

]

// function fetchSpotData() {
  
//   var markers = []

//   fetch('./mockdata.json')
//   .then((res) => {
//     return res.json();
//   })
//   .then((results) => {
//     console.log(results);
//     results.forEach(function(element,index){
//       markers[index] = new google.maps.Marker(element);
//       markers[index].setMap(map);
//     });  
//   })
// }

// export default fetchSpotData