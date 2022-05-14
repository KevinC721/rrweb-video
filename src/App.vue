<template>
  <div id="app">
    <el-tabs v-model="activeName">
      <el-tab-pane label="rrweb录屏" name="rrweb">
        <rr-web msg="Welcome to Your Vue.js App"/>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="leaderpage">
        <!-- <original-page /> -->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import rrWeb from './components/rrWeb.vue'
import originalPage from './components/originalPage.vue'

export default {
  name: 'App',
  components: {
    rrWeb,
    originalPage
  },
  data() {
    return {
      activeName: 'leaderpage'
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 30px;
  color: #2c3e50;
}
</style>
