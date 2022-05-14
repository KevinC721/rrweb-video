<template>
  <div class="leader-page">
    <!-- <div class="btn"></div> -->
    <slot></slot>
  </div>
</template>

<style scoped>
.leader-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: cornflowerblue;
  z-index: 9999;
  opacity: 0.3;
}

/* .btn {
  position: absolute;
  top: 85px;
  left: 30px;
  width: 70px;
  height: 40px;
  background-color: #f00;
} */
</style>