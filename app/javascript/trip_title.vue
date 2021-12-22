<template>
<div>
  <div class="tripName">{{tripName}}</div>
  <div class="starEnd">{{startDay}} - {{endDay}}</div>
  <div class="dayLength">{{dayLength}} 天 {{dayLength - 1}} 夜</div>
</div>
</template>

<script>
import dayjs from "dayjs";
import {tripsData} from './api/spots.js';
const tripData = tripsData[0];
let startDay = new Date(tripData.startDate);
startDay = dayjs(startDay).format('YYYY/MM/DD');
let endDay = dayjs(startDay).add(tripData.length - 1, "day").format('YYYY/MM/DD');

export default {
  data: function () {
    return {
      tripName: tripData.name,
      starEnd: tripData.startDate,
      dayLength: tripData.length,
      startDay: startDay,
      endDay: endDay,
    }
  }
}
</script>

<style scoped>
  .tripName {
    font-size: 20px;
    padding: 10px 20px;
  }
  .starEnd {
    padding: 0px 20px;
  }
  .dayLength {
    padding: 5px 20px;
  }
</style>