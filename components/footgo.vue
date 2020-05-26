<template>
  <div class="foot-go">
    <!--<div class="title">产品体验中心</div>-->
    <!--<p> <span></span>提供人力资源多类型解决方案<span></span></p>-->
    <!--<span style="margin-left:5px">立即预约</span><span style="transform: scale(0.6);display: inline-block;margin-left:5px">▶</span>-->
    <div class="btn" @click="go"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    mounted() {
    },
    methods: {
      go() {
          this.$parent.$parent.$parent.dialogVisible = true;
      }
    }
  }
</script>
<style lang="scss">
  .foot-go {
      position: relative;
    max-width: 1920px;
    height: 280px;
    margin: auto;
    text-align: center;
      background-repeat: no-repeat;
      background-image: url("../assets/img/product_service.png");
      background-size:cover;
      background-position: center center;
    color: #fff;
    position: relative;
    display: flex;

    .title {
      font-size: 40px;
      padding-top: 124px;
    }

    p {
      display: flex;
      font-size: 24px;
      justify-content: center;
      align-items: center;
      padding: 52px 0;

      span {
        display: flex;
        height: 1px;
        background-color: #fff;
        width: 142px;
        margin: 0 15px;
      }
    }

    .btn {
      position: absolute;
      top:104px;
        right: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      width:560px;
      color: #209DFD;
      height:70px;
      cursor: pointer;
    }
  }

  .foot-go.pro-foot-b-2 .btn {
    color: #51CC72;
  }

  .foot-go.pro-foot-b-3 .btn {
    color: #FF6E6E;
  }
</style>
