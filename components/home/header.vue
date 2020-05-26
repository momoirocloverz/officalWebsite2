<template>
  <!--<header class="v-header" :class="isOpacity?'u-opacity':'not-opacity'" v-if="$route.name!=='licence'">-->
  <header class="v-header not-opacity" v-if="$route.name!=='licence'">
    <div class="header-container">
     
      <div class="u-black-img"></div>
      <nav class="main-nav">
        <ul class="nav-list">
          <li class="main-nav-list u-left">
             <v-dropdown :isOpacity="isOpacity"/>
          </li>
          <li class="nav-item" style="margin-right: 0">
              <div @click="popTrail" style="padding:0 10px;font-size:14px"
                   class="u-text">
                免费试用
              </div>
          </li>
        </ul>
      </nav>
    </div>
      
      
      
      
      
      
      
  </header>
</template>
<script>
import { mapState } from 'vuex'
import VDropdown from './dropdown'
export default {
  name: 'VHeader',
  components: {
    VDropdown
  },
  data () {
    return {
        dialogVisible:false,
      maxClientWidth: 980,
      isOpacity:false,
      isWhite:true,
    }
  },
  computed: {
    ...mapState({
      isPhone: state => state.isPhone
    })
  },
  created() {
    const {isWhite} = this.$route.query;
     this.$store.commit('SET_IS_WHITE',isWhite==1?true:false)
  },
  mounted () {
  },
  methods: {
    popTrail(){
       this.$parent.dialogVisible = true;
    },
    handleScroll(){
            // 页面滚动距顶部距离
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || 
                      document.body.scrollTop
            var scroll = scrollTop - this.i;
            this.i = scrollTop;
            if(scroll<0){
                if(scrollTop<=0){
                  this.isOpacity = true;
                }else {
                  this.isOpacity = false;
                }
            }else{
              this.isOpacity = false;
            }
    }
  },
}
</script>

<style lang="scss" scope>
@import '../../assets/scss/header';
.v-header {
  z-index:99;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:64px;
  color:#909090;
    box-shadow:0px 4px 12px 0px rgba(0,0,0,0.05);
  .header-container {
    width:1200px;
    box-sizing: border-box;
    height:100%;
    margin: 0 auto;
    display:flex;
    align-items:center;
    position:relative;
  }
  .main-nav {
    height:100%;
    flex:1 0 auto;
  }
}
.u-text {
  width: 114px;
  height: 40px;
  line-height: 40px;
  /*border: 1px solid #209DFD;*/
  color: #3784FF;
  font-size: 16px;
  font-weight: bold;
  background-color: #E9F3FF;
  text-align: center;
  border-radius:20px;
}
.u-text-opacity {
  width: 100px;
  height: 34px;
  line-height: 34px;
  border: 1px solid #fff;
  color: #fff;
  text-align: center;
  border-radius: 4px;
}
.logo-img {
  width: 106px;
}
.u-opacity {
  background-color:rgba(0,0,0,0);
}
.not-opacity {
  background-color:rgba(255,255,255,1);
}
.u-left {
/*  margin-left: 122px;*/
}
.u-could-click {
  width: 100%;
  display:inline-block;
}
.drop-down span {
  margin-right: 0px!important;
}
.u-black-img {
  width:106px;
  height:39px;
  background:url('../../assets/img/logo.png') no-repeat center center;
  background-size:100% auto;
}
.u-light-img {
  width:106px;
  height:39px;
  background-image:url('../../assets/img/logo.png');
  background-size:100% auto;

}
</style>
