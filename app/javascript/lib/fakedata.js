export const mockData = [
  {
    "position": {"lat": 25.0399991, "lng": 121.509762},
    "title":"總統府"
  },
  {
    "position": {"lat": 25.0346703, "lng": 121.5196406},
    "title":"中正紀念堂"
  },
  {
    "position": {"lat": 25.0400306, "lng": 121.5580565 },
    "title":"國父紀念館"
  },
  {
    "position": {"lat": 25.0413698, "lng": 121.5483041},
    "title":"忠孝敦化站"
  }

]

export const mockDataInfoWindow = [

  {
    "content": "'<h2>總統府</h2>'+'<p>哈哈哈</p>'"
  },
  {
    "content": "'<h2>中正紀念堂</h2>'+'<p>哈哈哈</p>'"
  },
  {
    "content": "'<h2>國父紀念堂</h2>'+'<p>哈哈哈</p>'"
  },
  {
    "content": "'<h2>忠孝敦化站</h2>'+'<p>哈哈哈</p>'"
  },

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