<!--
 * @Author: caiwenkai
 * @Date: 2022-05-14 12:47:39
 * @LastEditors: caiwenkai
 * @LastEditTime: 2022-05-14 14:44:44
 * @Discription: 
 * @FilePath: \rrweb-video\src\components\originalPage.vue
-->
<template>
  <div class="original-page">
    <el-button type="success" @click="handleClick">按钮</el-button>
    <el-button type="success" @click="handleClick">按钮1</el-button>

    <div class="select-container">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    
    <leader-page>
      <div class="btn" @click="handleClick"></div>
    </leader-page>
  </div>
</template>

<script>
import leaderPage from './leaderPage.vue'
export default {
  components: { leaderPage },
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  methods: {
    handleClick() {
      alert("触发按钮")
    }
  }
}
</script>

<style scoped>
.original-page {
  width: 100%;
  height: 100%;
}

.btn {
  position: absolute;
  top: 85px;
  left: 30px;
  width: 70px;
  height: 40px;
  background-color: #000;
}

.select-container {
  margin-top: 30px;
}
</style>