<template>
  <div class="app" id="app">
    <div class="banner">
      <img class="hidden-md-only hidden-lg-only hidden-xl-only" :src="bannerXSSM" alt="banner 图" >
      <img class="hidden-xs-only hidden-sm-only hidden-lg-only hidden-xl-only" :src="bannerMD" alt="banner 图" >
      <img class="hidden-xs-only hidden-sm-only hidden-md-only " :src="bannerLGXL" alt="banner 图" >
    </div>
    <!--第一行-->
    <el-row>
      <el-col class="part" :xs="24" :sm="24" :md="5" :lg="6" :xl="5">
          <router-view name="PartOne"></router-view>
      </el-col>
      <el-col class="part" :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
          <router-view name="PartTwo"></router-view>
      </el-col>
      <el-col class="part" :xs="24" :sm="24" :md="7" :lg="6" :xl="11">
          <router-view name="PartThree"></router-view>
      </el-col>
    </el-row>
    <!--第二行-->
    <el-row>
      <el-col class="part" :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
          <router-view name="PartFour"></router-view>
      </el-col>
      <el-col class="part" :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
          <router-view name="PartFive"></router-view>
      </el-col>
      <el-col class="part" :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
          <router-view name="PartSix"></router-view>
      </el-col>
      <el-col class="part" :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
          <router-view name="PartSeven"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        bannerXSSM:require("./assets/img/banner_640.png"),
        bannerMD:require("./assets/img/banner_1000.png"),
        bannerLGXL:require("./assets/img/banner.png")
      }
    }
  }
</script>

<style>
  body {
    background: #011128;
    color: #ff0;
  }
  .app {
    width: 100%;
  }
  .part {
    padding: 20px;
  }
  .banner img {
    width: 100%;
    height: 80px;
  }
  .BMap_cpyCtrl, .BMap_noprint, .anchorBL {
    display: none !important;
  }
</style>
