<template>
  <div style="max-height: 80vh;">
    <div class="dayBox">
      <div class="dayBack" v-on:click="slideLeft">＜</div>
      <div class="dayTitle">
        <div v-for="n in dayPages" class="dayBTN">
          第 {{n}} 天
        </div>
      </div>
      <div class="dayNext" v-on:click="slideRight">＞</div>
    </div>
    <div class="spotBox">
      <div class="spotStartTime">出發時間</div>
      <draggable @add="newIndex">
      <div v-if="firstDay !== null || firstDay.length > 0 " v-for="s in firstDay.length" class="spotItem">
        <div>{{s}}</div>
        <div class="spotName">{{firstDay[s-1].spotName}}</div>
        <div class="address">{{firstDay[s-1].address}}</div>
      </div>
      </draggable>
    </div>
    <div class="spotBTN">新增行程</div>
  </div>
</template>

<script>
import {tripsData} from './api/spots.js';
import draggable from 'vuedraggable';
const tripData = tripsData[0];
const dayPages = tripData.length;
const firstDay = tripData.daySpots.date1;
const dayTitle = document.getElementsByClassName('dayTitle');
console.log(firstDay);


export default {
  components: { draggable },
  data: function () {
    return {
      // 天數選擇區的總頁數
      dayPages: dayPages,
      firstDay: firstDay,
    }
  },
  methods: {
    newIndex() {
      let newlist = [];
      newlist = firstDay;
      console.log(newlist);
    },
    slideRight() {
      console.log(dayTitle);
      dayTitle.scrollLeft += 20;
    },
    slideLeft() {
      console.log(123);
      dayTitle.scrollLeft -= 20;
    }
  }
}
</script>

<style scoped>
  .dayBox {
    display: flex;
    justify-content: space-between;
    height: 5vh;
    width: calc(100% - 1px);
    border: 1px solid #ccc;
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
    height: 75vh;
    max-height: 75vh;
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
    border: 1px solid #ccc;
  }
  .spotStartTime {
    padding: 10px 20px;
  }
  .dayBack, .dayNext{
    width: calc(5% - 5px);
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
  }
  .dayBTN {
    flex-shrink: 0;
    padding: 10px;
    margin-right: 5px;
    border: 1px solid #ccc;
  }
</style>