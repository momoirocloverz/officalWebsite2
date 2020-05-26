<template>
  <div class="g-footer-nav">
      <div class="g-footer-top-container">
        <div v-for="(it,i) in items" :key="i" class="u-nav-list-item" >
          <div class="u-title" :class="i===4?'tel-top':''">
            {{it.title}}
          </div>
          <div v-for="(z,key) in it.hrefList" :key="key" class="u-list-item">
              <nuxt-link v-if="z.inner" class="u-url-text"  :to="{ name: z.url ,query:{isWhite:z.isWhite}}"><span @click="handleRouterClick(z,1)">{{ z.text }}</span></nuxt-link>
              <nuxt-link v-else class="u-url-text" :class="i===4?'u-tel':''" :to="z.url"><span @click="handleRouterClick(z,1)">{{z.text}}</span></nuxt-link>
          </div>
        </div>
          <div class="cropCon">
              <div class="fakeHead">
                  合作咨询
                </div>
              <div class="fakeItem">
                  <div class="itemSelf">
                      <img src="../../assets/img/email.png"><span>business@10000rc.com</span>
                    </div>
                </div>
            </div>
          <div class="qrcodeCon">
              <template v-for="(item,index) in qrcodeArr">
                  <div class="codeCon">
                      <img :src="item.src">
                      <div>{{item.text}}</div>
                    </div>
                </template>
            </div>
      </div>
  
  </div>
</template>

<script>

export default {
  name: 'VDropdown',
  data () {
    return {
        qrcodeArr:[
            { src:require('../../assets/img/footerComp.png'),text:'万才企业版' },
            { src:require('../../assets/img/footerPerson.png'),text:'万才个人版' },
             { src:require('../../assets/img/b84b53a.png'),text:'微信公众号' },            
        ],
      items: [{
        title:'产品服务',
        hrefList:[
          {
            url:'/product?isWhite=1',
            text:'万才企业版',
            inner:false
          },
          {
            url:'/product/humanOne?isWhite=1',
            text:'万才个人版',
            inner:false
          }
        ]
      },{
        title:'新闻资讯',
        hrefList:[
            {
                url:'/newsInfo?type=1&isWhite=1',
                text:'公司新闻',
                inner:false,
                isWhite:1,
            },
            {
                url:'/newsInfo?type=2&isWhite=1',
                text:'媒体报道',
                inner:false,
                isWhite:1,
            },
        ]
      },{
        title:'关于我们',
        hrefList:[
            {
                url:'aboutUs',
                text:'公司介绍',
                inner:true,
                isWhite:1,
            },
            {
                url:'aboutUs',
                text:'联系我们',
                inner:true,
                isWhite:1,
            },
            {
                url:'aboutUs',
                text:'资质认证',
                inner:true,
                isWhite:1,
            },
                 ]
      }]
    }
  },
  computed: {
    
  },
  mounted() {
  },
  methods: {
    handleRouterClick(item,isWhite){
        if(  item.text == '万才企业版' ){
            sessionStorage.setItem('productInitYes',10);
        }
        if( item.text == '万才个人版' ){
            sessionStorage.setItem('productInitYes',10);
        }
      this.$store.commit('SET_IS_WHITE',isWhite==1?true:false)
    }
  }
}
</script>

<style lang="scss" scoped>
.g-footer-nav {
  width: 100%;
    
    .cropCon {
        color: #fff;
        .fakeHead {
            height: 20px;
            line-height: 20px;
            font-size: 20px;
            margin-bottom: 40px;
          font-weight: 400;
        }
        .fakeItem {
            .itemSelf {
                display: flex;
                justify-content:flex-start;
                align-content: center;
                align-items: center;
                margin-bottom: 20px;
                span {
                    font-size: 20px;
                }
                .time {
                    font-size: 12px;
                    font-weight: 400;
                }
                img {
                    width: 32px;
                    height: 32px;
                    margin-right: 10px;
                }
            }
        }
    }
    .qrcodeCon {
        position: absolute;
        right: 0;
        display: flex;
        justify-content:flex-end;
        color: #fff;
        .codeCon {
            margin-left: 20px;
            img {
                width: 80px;
                height: 80px;
                margin-bottom: 10px;
            }
            div {
                text-align: center;
            }
        }
    }

  .g-footer-top-container {
    width: 100%;
      height: 170px;
      margin-bottom: 70px;
    display: flex;
      position: relative;
  }
}
.u-nav-list-item {
  margin-right:80px;
  min-width:80px;
  .u-title {
    height: 20px;
    line-height: 20px;
    font-size: 20px;
    margin-bottom: 40px;
    color: #fff;
      font-weight: 400;
  }
  .u-list-item {
    margin-bottom: 20px;
    height: 16px;
      font-weight: 400;
    line-height: 16px;
    font-size: 16px;
    color: #999;
  }
}

.u-tel {
  font-size: 22px;
  line-height: 22px;
  height:22px;
  color: #DADEE4;
}
.tel-top {
  margin-bottom: 18px!important;
}
</style>
