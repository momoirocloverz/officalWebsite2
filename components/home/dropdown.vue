<template>
  <div class="drop-down">
    <div class="phone-show-menu" @click="handleMenuClick">
      <span>{{ title }}</span>
      <v-icon name="arrow-down-b"></v-icon>
    </div>
    <ul class="phone-hide"  :class="{ 'show': show}">
      <li  v-for="(item, index) in items"   :key="index"  class="nav-item" @click="handleItemClick(item.title)" :class=" !isOpacity||$store.state.isWhite?'dropdownNotOpacity':'dropdownOpacity' ">
<!--
            <el-dropdown v-if="index===1">
          <div :class="{ hot:item.name ==  routerFlag ? true : false  }" v-if="index===1" :to="{ name: item.name }">{{ item.title }}<i class="el-icon-arrow-down el-icon--right"></i>
            </div>
          <nuxt-link v-else :to="{ name: item.name ,query:{isWhite:item.isWhite,type:item.type}}"><span
            class="u-could-click" @click="handleRouterClick(item.isWhite)">{{ item.title }}</span></nuxt-link>                
          <el-dropdown-menu slot="dropdown" v-if="index===1">
            <el-dropdown-item>
              <nuxt-link class="u-could-click" to="/product/humanOne?isWhite=1"><span class="u-could-click" @click="handleRouterClick(1)">企业及外包服务商</span>
              </nuxt-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <nuxt-link class="u-could-click" to="/product/humanTwo?isWhite=1"><span class="u-could-click" @click="handleRouterClick(1)">班务经理</span>
              </nuxt-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <nuxt-link class="u-could-click" to="/product/humanThree?isWhite=1"><span class="u-could-click" @click="handleRouterClick(1)">新业态从业人员(蓝领)</span>
              </nuxt-link>
            </el-dropdown-item>
          </el-dropdown-menu>
          <el-dropdown-menu slot="dropdown" v-if="index===4">
              
            <el-dropdown-item><nuxt-link  class="u-could-click"  to="/downloadCenter?isWhite=1"><span  class="u-could-click" @click="handleRouterClick(1)">万才经理人APP</span></nuxt-link></el-dropdown-item>
            <el-dropdown-item>
                
                
              <nuxt-link class="u-could-click" to="/downloadCenter/classManager?isWhite=1"><span class="u-could-click"  @click="handleRouterClick(1)">蓝灵王APP</span>
              </nuxt-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <nuxt-link class="u-could-click" to="/downloadCenter/normalGuy?isWhite=1"><span class="u-could-click" @click="handleRouterClick(1)">佳薪宝APP</span>
              </nuxt-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
-->
        <div :class="{ hot:item.name ==  routerFlag ? true : false  }" > <nuxt-link :to="{ name: item.name ,query:{isWhite:item.isWhite,type:item.type}}"><span
            class="u-could-click" @click="handleRouterClick(item.isWhite)">{{ item.title }}</span></nuxt-link></div>          
      </li>
        <div class="goOut" v-if="showFlag"><a href="http://www.10000rc.com/2.0/cus/index.html#/taskManage/DispatchTask" target="_blank">发任务</a></div>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'VDropdown',
    props: {
      isOpacity: [Boolean]
    },
    data() {
      return {
        show: false,
        title: '首页',
        isWhite: true,
          routerFlag:'index',
          showFlag:false,
        items: [
            { name: 'index', title: '首页' },
            { name: 'product', title: '产品服务', isWhite: 1, type: null },
            { name: 'client', title: '客户案例', isWhite: 1, type: null },
            { name: 'newsInfo', title: '新闻资讯', isWhite: 1, type: 1 },
            { name: 'aboutUs', title: '关于我们', isWhite: 1, type: null },
            { name: 'downloadCenter', title: '下载中心', isWhite: 1, type: null }
        ],
          activeMatch:{
              index:'index',
              product:'product',
              'product-humanOne':'product',
//              'product-humanTwo':'product',
//              'product-humanThree':'product',
              newsInfo:'newsInfo',
              client:'client',
              aboutUs:'aboutUs',
              'downloadCenter':'downloadCenter',
              'downloadCenter-classManager':'downloadCenter',
              findItem:'findItem',           
          },
      }
    },
    computed: {
        ...mapState({
            isPhone: state => state.isPhone
        })
    },
      created() {
          const { isWhite } = this.$route.query
          this.$store.commit('SET_IS_WHITE', isWhite == 1 ? true : false)
      },
      watch:{
          "$route":function(nval,val){
              sessionStorage.setItem( 'routerName',nval.name);
              this.getRouteData();
          },
      },
    mounted() {
        this.getTaskArr();
        this.getRouteData();
    },
    methods: {
        getTaskArr(){
            let params = {
                pageNum:1,
                pageSize:1,
                valuationType:'',
                settlementType:'',
            };
            this.ApiLists.getaskMarketList(params).then(res=>{
                let { data,respCode } = res;
                if( respCode == 0 ){
                    if(data.list){
                        this.showFlag = true;
                        this.items = [
                            { name: 'index', title: '首页' },
                            { name: 'product', title: '产品服务', isWhite: 1, type: null },
                            { name: 'client', title: '客户案例', isWhite: 1, type: null },
                            { name: 'newsInfo', title: '新闻资讯', isWhite: 1, type: 1 },
                            { name: 'aboutUs', title: '关于我们', isWhite: 1, type: null },
                            { name: 'downloadCenter', title: '下载中心', isWhite: 1, type: null },
                            { name: 'findItem', title: '接任务', isWhite: 1, type: null },
                        ];
                    }else{
                        this.showFlag = false;
                        this.items = [
                            { name: 'index', title: '首页' },
                            { name: 'product', title: '产品服务', isWhite: 1, type: null },
                            { name: 'client', title: '客户案例', isWhite: 1, type: null },
                            { name: 'newsInfo', title: '新闻资讯', isWhite: 1, type: 1 },
                            { name: 'aboutUs', title: '关于我们', isWhite: 1, type: null },
                            { name: 'downloadCenter', title: '下载中心', isWhite: 1, type: null },
                        ];
                    }
                }else{     
                    this.showFlag = false;
                    this.items = [
                        { name: 'index', title: '首页' },
                        { name: 'product', title: '产品服务', isWhite: 1, type: null },
                        { name: 'newsInfo', title: '新闻资讯', isWhite: 1, type: 1 },
                        { name: 'aboutUs', title: '关于我们', isWhite: 1, type: null },
                        { name: 'downloadCenter', title: '下载中心', isWhite: 1, type: null },
                    ];
                    this.$message.error(res.errorMsg);
                }
            }).catch(err=>{
                console.log('err',err);
            })
        },        
        getRouteData(){
            let exists =  sessionStorage.getItem( 'routerName' );
            if( exists ){
                this.routerFlag = this.activeMatch[exists];
            }else{
            }
        },
      handleRouterClick(isWhite) {
          this.$store.commit('SET_IS_WHITE', isWhite == 1 ? true : false)
      },
      handleMenuClick() {
          this.show = !this.show;
      },
      handleItemClick(title) {
        this.show = false
        this.title = title
      },
      selectStyle(item, index) {
      },
      hide() {
        this.show = false
      }
    }
  }
</script>

<style lang="scss" scoped>   
    .goOut {
        font-size: 14px;
        font-weight: 400;
        color: #71777c;
        &:hover {
            color: #007fff;
        }
    }
    .hot {
        color: #333;
        font-weight: 600;
        position: relative;
        &:after {
            content: "";
            position: absolute;
            height: 4px;
            width: 100%;
            bottom: -7px;
            left: 0;
            background-color: #4B6DFF;
        }
    }
  .drop-down {
    .phone-show-menu {
      display: none;
    }

    span {
      margin-right: .5rem;
    }

    .phone-hide {
      display: flex;
      // .nuxt-link-exact-active {
      //   color: #007fff;
      // }
    }
      
  }

  .u-could-click {
    width: 100%;
    display: inline-block;
  }

  .selectOpacity {
    .nuxt-link-exact-active {
      color: #000;
    }
  }

  .selectNotOpacity {
    .nuxt-link-exact-active {
      color: #007fff;
    }
  }
  .dropdownOpacity {
    .el-dropdown {
      color: #fff !important;
    }
    div {
      color: #fff !important;
      font-size: 14px;
    }
  }

  .dropdownNotOpacity {
    .el-dropdown {
      color: #606266 !important;
    }
     div {
/*      color: #606266 !important;*/
      font-size: 14px;
    }
  }
</style>