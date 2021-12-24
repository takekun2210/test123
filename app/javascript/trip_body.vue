<template>
  <div>

    <div id="dataTitle">
      <div class="tripName">{{tripName}}</div>
      <div class="starEnd">{{startDay}} - {{endDay}}</div>
      <div v-if="dayLength > 1" class="dayLength">{{dayLength}} 天 {{dayLength - 1}} 夜</div>
      <div v-else-if="dayLength == 1" class="dayLength">{{dayLength}} 天</div>
    </div>
    
    <div id="dataBody" >
      <div class="dayBox">
        <div class="dayBack" v-on:click="slideLeft">＜</div>
        <div ref="dayTitle" class="dayTitle">
          <div v-for="n in dayPages" class="dayBTN">
            第 {{n}} 天
          </div>
        </div>
        <div class="dayNext" v-on:click="slideRight">＞</div>
      </div>
      <div class="spotBox">
        <div class="spotStartTime">出發時間</div>
        <draggable v-model="firstDay" @change="dragSpot">
        <div v-if="firstDay !== null || firstDay.length > 0 " v-for="s in firstDay.length" class="spotItem">
          <div>{{s}}</div>
          <div class="spotName">{{firstDay[s-1].spotName}}</div>
          <div class="address">{{firstDay[s-1].address}}</div>
        </div>
        </draggable>
      </div>
      <div class="spotBTN">新增行程</div>
    </div>

  </div>
</template>

<script>
import dayjs from "dayjs";
import {tripsData} from './api/spots.js';
import draggable from 'vuedraggable';
const tripData = tripsData[0];

let startDay = new Date(tripData.startDate);
startDay = dayjs(startDay).format('YYYY/MM/DD');
let endDay = dayjs(startDay).add(tripData.length - 1, "day").format('YYYY/MM/DD');

const dayPages = tripData.length;
const firstDay = tripData.daySpots.date1;


export default {
  components: { draggable },
  data: function () {
    return {
      // 行程標題部分
      tripName: tripData.name,
      starEnd: tripData.startDate,
      dayLength: tripData.length,
      startDay: startDay,
      endDay: endDay,

      // 天數選擇區的總頁數
      dayPages: dayPages,
      firstDay: firstDay,
    }
  },
  methods: {
    dragSpot() {
      console.log(firstDay);
    },
    slideRight() {
      const dayTitle = this.$refs.dayTitle
      dayTitle.scrollLeft += 100;
    },
    slideLeft() {
      const dayTitle = this.$refs.dayTitle
      dayTitle.scrollLeft -= 100;
    }
  }
}
</script>

<style scoped>

  #dataTitle {
    background-color: #fff
  }
  #dataBody {
    background-color: #fff
  }
  .dayBox {
    display: flex;
    justify-content: space-between;
    height: 5vh;
  }
  .dayTitle::-webkit-scrollbar {
    height: 0px;
    width: 0px;
  }
    .dayTitle {
    display: flex;
    width: 90%;
    max-width: 90%;
    overflow: scroll;
  }
  .spotBox::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  .spotBox {
    height: 79vh;
    max-height: 79vh;
    overflow: auto;
  }
  .dayTitle a {
    text-decoration: none;
    color: #000;
  }
  .spotBTN {
    background-color: rgb(101, 67, 196);
    color: #fff;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .spotItem {
    padding: 20px;
  }
  .spotStartTime {
    padding: 10px 20px;
  }
  .dayBack, .dayNext{
    width: 5%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dayBTN {
    flex-shrink: 0;
    padding: 10px;
    margin-right: 5px;
  }
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