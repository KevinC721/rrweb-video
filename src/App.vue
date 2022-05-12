<!--
 * @Author: caiwenkai
 * @Date: 2022-05-12 16:11:51
 * @LastEditors: caiwenkai
 * @LastEditTime: 2022-05-12 17:01:48
 * @Discription: 
 * @FilePath: \rrweb-video\src\App.vue
-->
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      events: [],
      eventsMatrix: [[]]
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
    this.handleRecord()
  },
  methods: {
    handleRecord() {
      const that = this
      const rrweb = require('rrweb')
      console.log('rrweb', rrweb);
      rrweb.record({
        emit(event, isCheckout) {
        console.log('isCheckoutisCheckout', isCheckout);
        if (isCheckout) {
          that.eventsMatrix.push([]);
          console.log('快照', that.eventsMatrix);
        }
          console.log('this.record', event);
          that.events.push(event)
        },
        checkoutEveryNth: 20,
      });
    },

    save() {
      const eventsRes = this.events
      const body = JSON.stringify({ eventsRes });
      this.events = [];
      fetch('http://YOUR_BACKEND_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
