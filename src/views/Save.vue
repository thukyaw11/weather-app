<template>
  <div id="app">
    <main>
      <h1 class="heading">Saved</h1>
      <div class="weather-card"  v-for="weather in weathers" v-bind:key="weather">
          <div class="city_name">{{weather.name}}, {{ weather.sys.country }}</div>
          <div class="temper">{{ Math.round(weather.main.temp) }}°c</div><br>
          <div class="cloud">{{ weather.weather[0].main }}</div>
      </div>
    </main>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: "app",
  data() {
    return {
        weathers : []
    };
  },
  mounted() {
      this.weathers = JSON.parse(localStorage.getItem('value'));
  }
};
/* eslint-enable no-console */
</script>