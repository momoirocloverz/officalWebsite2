<template>
  <div class="wc-3-home">
        <div class="headContainer">
            <div class="swiper-container">
                <div class="swiper-wrapper" >
                    <div class="swiper-slide banner" @click="toStupidAi" :key="1"></div>
                    <div class="swiper-slide banner1" @click="toLanding" :key="2"></div>
                </div>
            </div>
        </div>
      <div class="sassCon">
          <div class="sassItemCon">
              <div class="sassItemSelf itemFirst">
                  <div class="textCon">一键排班<br/>智慧管理</div>
                </div>
              <div class="sassItemSelf itemSec">
                  <div class="textCon">多维度<br/>智慧考勤</div>
                </div>
              <div class="sassItemSelf itemThird">
                  <div class="textCon">自动<br/>计算薪资</div>
                </div>
              <div class="sassItemSelf itemFourth">
                  <div class="textCon">提供人脸<br/>识别闸机系统</div>
                </div>
            </div>
        </div>
      <div class="professerCon">
          <div class="professerFirst">
              <div class="shorter">万才网核心优势</div>
              <div class="longer">万才网以提升企业管理运作效率、大幅降低企业成本为己任</div>
            </div>
          <div class="professerSec">
              <div class="firstOffour commonFour">
                  <div class="commonText">云端大数据</div>
                  <div class="hoverCon">
                      <div class="hoverConHead">云端大数据</div>
                      <div class="hoverConItem">数据云端存储</div>
                      <div class="hoverConItem">多方案算法分析</div>
                      <div class="hoverConItem">AI智能数据统计</div>
                    </div>
                </div>
              <div class="secondOffour commonFour">
                  <div class="commonText">数智化管理</div>
                  <div class="hoverCon">
                      <div class="hoverConHead">数智化管理</div>
                      <div class="hoverConItem">智能排班</div>
                      <div class="hoverConItem">智慧考勤</div>
                      <div class="hoverConItem">智慧结算</div>
                      <div class="hoverConItem">智慧报表</div>
                    </div>
                </div>
              <div  class="thirdOffour commonFour">
                  <div class="commonText">合规降本增效</div>
                  <div class="hoverCon">
                      <div class="hoverConHead">合规降本增效</div>
                      <div class="hoverConItem">自由职业者关系转化</div>
                      <div class="hoverConItem">极具优势的税务方案</div>
                      <div class="hoverConItem">超性价比的商保服务</div>
                    </div>
                </div>
              <div  class="fourthOffour commonFour">
                  <div class="commonText">小任务模式</div>
                  <div class="hoverCon">
                      <div class="hoverConHead">小任务模式</div>
                      <div class="hoverConItem">扁平、小班化管理</div>
                      <div class="hoverConItem">规范体系管理模式</div>
                      <div class="hoverConItem">提高管理自主性</div>
                    </div>
                </div>
            </div>
        </div>
      <div class="partnerCon">
          <div class="partnerTitle">合作伙伴</div>
          <div class="firstLine">
              <div class="firstPartner commonSix">
                </div>
              <div class="secPartner commonSix">
                </div>
              <div class="thirdPartner commonSix">
                </div>
            </div>
          <div class="secondLine">
              <div class="firstPartner commonSix"></div>
              <div class="secondPartner commonSix">
                </div>
              <div class="thirdPartner commonSix">
                </div>
            </div>
          <div class="more" @click="moreAction">更多案例 ></div>
        </div>
      <div class="taskListCon" v-if="taskArr.length">
          <div class="sectionTitle">万才网任务市场</div>
          <taskListsCommon  :listsArr="taskArr"></taskListsCommon>
          <div class="moreCon">
              <div class="checkMore" @click="goToSomeWhere"><span>查看更多</span><i class="el-icon-arrow-right"></i></div>
            </div>          
        </div>
      
    <div class="home-3 w1200">
      <h3 class="setHere2">新闻资讯</h3>
      <p class="setHere1">洞察市场前沿，关注最新动态</p>
      <div class="t-hr">
        <span class="t-border"></span>
        <span class="t-text">频道分类</span>
        <div class="t-line-x"></div>
      </div>
      <div class="zx-wrap">
        <div class="zx-item zx-3" @click="go('/newsInfo',{type:1,isWhite:1})">
        </div>
        <div class="zx-item zx-2" @click="go('/newsInfo',{type:2,isWhite:1})">
        </div>
      </div>
      <div class="t-hr setHere5">
        <span class="t-border"></span>
        <span class="t-text">最新资讯</span>
        <div class="t-line-x"></div>
      </div>
  
    </div>
          <div class="zx-content">
          <div class="new-350-bg">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <div class="zx-l">
              <strong>{{item.createdAt | datFormat}}</strong>
              <span class="f12">{{item.createdAt | date}}</span>
            </div>
            <div class="zx-r" @click="go('/newsInfo/detail',{id:item.id,isWhite:1})">
              <h5 class="f16 co-333">{{item.title}}</h5>
              <p class="f12">{{item.description}}</p>
              <span class="f12" style="color:#3784FF">了解详情>></span>
            </div>
          </li>
        </ul>
              </div>
      </div>
    <FootGo class="index-foot"/>
  </div>
</template>

<script>
  import FootGo from '@/components/footgo'
  import taskListsCommon from '@/components/taskListsCommon.vue'
  export default {
    components: { 
        FootGo,
        taskListsCommon
    },
    data() {
      return {
        currentIndex: 0,
          list: [],
          taskArr:[],
      }
    },
    filters: {
      datFormat(val) {
        return val.substring(8, 10)
      },
      date(val) {
        return val.substring(0, 7)
      }
    },
    head() {
      return {
        title: '万才网—灵活用工，合规用工，财税优化的人力资源管理专家',
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content: '万才网，万才科技，万才经理人，灵活用工，劳务派遣，人事派遣，人力外包，人力资源，劳务派遣公司，财税筹划，财税优化，税收优惠，社保入税，公司社保，排班软件，商业保险，商业保险是什么'
          },
          {
            hid: 'description',
            name: 'description',
            content: '万才网为企业，外包公司和新业态从业人员提供三方交互桥梁，帮助企业定制社保入税后灵活用工的合法合规使用方案，另有灵活用工管理，财税统筹，商业保险等服务，帮助企业降低用工风险，实现财税优化，真正做到降本增效，提升企业的生存空间。'
          }
        ]
      }
    },
    mounted() {
        this.initSwiper();
        this.getList();
        this.getTaskArr();
    },
    methods: {
        initSwiper(){
            this.swiperBridge = new Swiper ('.swiper-container', {
                direction: 'horizontal', 
                loop: true, 
                autoplay:true,
               /* pagination: {
                  el: '.swiper-pagination',
                },*/
                on:{
                    click: function(){
//                      alert('你点了Swiper');
                    },
                  },
            }) 
        },
        toLanding(){
            this.$router.push({
               path:'landing'
            });
        },
        toStupidAi(){
            this.$router.push({
               path:'stupidAi'
            });
        },
        popTrail(){
            this.$parent.$parent.dialogVisible = true;
        },
        moreAction(){
            this.$store.commit('SET_IS_WHITE',true)
            this.$router.push({
               name:'client',
                query:{
                    isWhite:1
                }
            });
        },
        goToSomeWhere(){
            this.$store.commit('SET_IS_WHITE',true)
            this.$router.push({
               name:'findItem',
                query:{
                    isWhite:1
                }
            });
        },
        getTaskArr(){
            let params = {
                pageNum:1,
                pageSize:2,
                valuationType:'',
                settlementType:'',
            };
            this.ApiLists.getaskMarketList(params).then(res=>{
                let { data,respCode } = res;
                if( respCode == 0 ){
                    if(data.list){
                        this.taskArr = data.list;
                        this.$forceUpdate();
                    }else{
                        this.taskArr = [];
                        this.$forceUpdate();
                    }
                }else{                    
                    this.$message.error(res.errorMsg);
                }
            }).catch(err=>{
                console.log('err',err);
            })
        },
      getList() {
        this.$store._actions.getInfoList[0]({}).then(res => {
          if (res.respCode === 0) {
            if (res.data) {
              const result = [...res.data]
              this.list = result.reverse((a, b) => a - b)
              if (this.list.length > 2) {
                this.list.length = 2
              }
            }
          }
        })
      },
      tab(index) {
        this.$refs.carousel.setActiveItem(index);
        this.currentIndex = index

      },
      go(url, query) {
        // if(query.isWhite == 1){
        //   this.$store.commit('SET_IS_WHITE',true)
        // }else{
        //   this.$store.commit('SET_IS_WHITE',false)
        // }
        this.$router.push({ path: url, query: query })
      },
      goTop() {
        document.documentElement.scrollTop = 0
      },
      handleMore() {
        this.$message({
          message: 'sorry，暂未完成此功能哟 ~',
          type: 'warning'
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
    .taskListCon {
        width: 1200px;
        margin: 0 auto;
        .sectionTitle {
            color: #383D41;
            font-size: 32px;
            font-weight: 500;
            text-align: center;
            line-height: 32px;
            height: 32px;
            margin-bottom: 32px;
        }
        .moreCon {
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: flex-end;
            .checkMore {
                color: #4872FF;
                font-size: 18px;
                width: 160px;
                height: 44px;
                text-align: center;
                line-height: 45px;
                cursor: pointer;
                background-color: #eaf3ff;
            }
        }
    }
  .wc-3-home {
    background-color: #fff;
    max-width: 1920px;
    margin: 0 auto 0;
      .headContainer {
          z-index: 10;
            position: relative;
            max-width: 1920px;
            height: 550px;   
      }
    .banner {
        z-index: 10;
        position: relative;
        max-width: 1920px;
        height: 550px;        
        background: url("../assets/img/banner_july.png") no-repeat center center;
        background-size:cover;
        .divideCon {
            display: flex;
            justify-content: center;
            height: 100%;
            width: 1200px;
            margin: 0 auto;
            .divideItem {
                width: 50%;
                position: relative;                
                .fakeTryBtn {
                    z-index: 50;
                    cursor: pointer;
                    position: absolute;
                    bottom: 190px;
                    left: 0;
                    height: 58px;
                    width: 200px;
                }
            }
        }
    }
      .banner1 {
        z-index: 10;
        position: relative;
        max-width: 1920px;
        height: 550px;        
        background: url("../assets/img/bannersp.png") no-repeat center center;
        background-size:cover;
        .divideCon {
            display: flex;
            justify-content: center;
            height: 100%;
            width: 1200px;
            margin: 0 auto;
            .divideItem {
                width: 50%;
                position: relative;                
                .fakeTryBtn {
                    z-index: 50;
                    cursor: pointer;
                    position: absolute;
                    bottom: 190px;
                    left: 0;
                    height: 58px;
                    width: 200px;
                }
            }
        }
    }
      .sassCon {
          padding-top: 642px;
          box-sizing: border-box;
          position: relative;
          color: #fff;
          max-width: 1920px;
          height: 842px;
          text-align: center;
          background-image: url("../assets/img/SaaS_bg.png");
          background-repeat: no-repeat;
          background-size:cover;
          background-position: center center;          
          .sassItemCon {
              width: 1200px;
              margin: 0 auto;
              display: flex;
              justify-content: space-between;
              align-content: center;
              align-items: center;
          }
          .sassItemSelf {
              cursor: pointer;
              font-size: 20px;
              font-weight: 600;
              line-height: 28px;
              background-repeat: no-repeat;
              background-size:cover;
              width: 270px;
              height: 120px;
              border-radius: 8px;
              overflow: hidden;
              background-color: #fff;
              text-align: left;
              padding-left: 40px;
              .textCon { 
                  margin-top: 30px;
                  transition:all 0.2s;
                  transform: translateX(0);
              }    
              &:hover {
                  .textCon { 
                      transform: translateX(-20px);
                  } 
              }
          }
          .itemFirst {
              background-image: url("../assets/img/SaaS_character1.png");
              .textCon {
                  width: 80px;                  
              }
          }
          .itemSec {
              background-image: url("../assets/img/SaaS_character2.png");
              .textCon {
                  width: 80px;
              }
          }
          .itemThird {
              background-image: url("../assets/img/SaaS_character3.png");
              .textCon {
                  width: 80px;
              }
          }
          .itemFourth {
              background-image: url("../assets/img/SaaS_character4.png");
              .textCon {
                  width: 120px;
              }
          }
      }
      
      
      .professerCon {
          position: relative;
          color: #fff;
          max-width: 1920px;
          height: 636px;
          text-align: center;
          background-image: url("../assets/img/advantage_bg.png");
          background-repeat: no-repeat;
          background-size:cover;
          background-position: center center;
          padding-top: 80px;
          box-sizing: border-box;
          .professerFirst {
              color: #fff;
              .shorter {
                  font-size: 36px;
                  height: 36px;
                  line-height: 36px;
                  margin-bottom: 20px;
                  font-weight: 600;
              }
              .longer {
                  font-size: 20px;
                  height: 20px;
                  line-height: 20px;
              }
              margin-bottom: 80px;
          }
          .professerSec {
              width: 1200px;
              margin: 0 auto;
              display: flex;
              justify-content: space-between;
              align-content: center;
              align-items: center;
              .commonFour {
                  width: 270px;
                  height: 300px;
                  border-radius: 8px;
                  overflow: hidden;
                  background-color: #fff;
                  background-repeat: no-repeat;
                  background-size: cover;
                  cursor: pointer;
                  transition: all .2s;
                  .commonText {
                      color: #666;
                      line-height: 24px;
                      height: 24px;
                      font-size: 24px;
                      margin-top: 180px;
                      font-weight: 600;
                  }
                  .hoverCon {
                      display: none;
                      opacity: 0;
                      color: #fff;
                      .hoverConHead {
                          font-size:  24px;
                          line-height: 24px;
                          height: 24px;
                          font-weight: 600;
                          margin-top: 60px;
                          margin-bottom: 40px;
                          text-align: center;
                      }
                      .hoverConItem {
                          font-size:  16px;
                          line-height: 16px;
                          height: 16px;
                          font-weight: 600;
                          margin-bottom: 20px;
                          text-align: center;
                      }
                  }
                  
                  
                  &:hover {
                      background-image: url("../assets/img/advantage_hover.png");
                      .commonText {
                          opacity: 0;
                          display: none;
                      }
                      .hoverCon {
                          display: block;
                          opacity: 1;
                      }
                  }
              }
          }
          .firstOffour {
              background-image: url("../assets/img/advantage1_normal.png");
          }
          .secondOffour {
              background-image: url("../assets/img/advantage2_normal.png");
          }
          .thirdOffour {
              background-image: url("../assets/img/advantage3_normal.png");
          }
          .fourthOffour {
              background-image: url("../assets/img/advantage4_normal.png");
          }
      }
      .partnerCon {
          position: relative;
          color: #fff;
          max-width: 1920px;
          height: 632px;
          text-align: center;          
          background-image: url("../assets/img/partner_bg.png");
          background-repeat: no-repeat;
          background-size:cover;
          background-position: center center;
          padding-top: 80px;
          box-sizing: border-box;
          .partnerTitle {
              color: #333;
              font-weight: 600;
              font-size: 36px;
              height: 36px;
              line-height: 36px;
              text-align: center;
              margin-bottom: 80px;
          }
          .firstLine {
              width: 1200px;
              margin: 0 auto;
              display: flex;
              justify-content: space-between;
              align-content: center;
              align-items: center;
              margin-bottom: 40px;
              .firstPartner {
                  background-image: url("../assets/img/partnerlogo1_normal.png");
                  &:hover {
                      background-image: url("../assets/img/partnerlogo1_hover.png");
                  }
              }
              .secPartner {
                  background-image: url("../assets/img/partnerlogo2_normal.png");
                  &:hover {
                      background-image: url("../assets/img/partnerlogo2_hover.png");
                  }
              }
              .thirdPartner {
                  background-image: url("../assets/img/partnerlogo3_normal.png");
                  &:hover {
                      background-image: url("../assets/img/partnerlogo3_hover.png");
                  }
              }
          }
          .secondLine {
              width: 1200px;
              margin: 0 auto;
              display: flex;
              justify-content: space-between;
              align-content: center;
              align-items: center;
              .firstPartner {
                  background-image: url("../assets/img/partnerlogo4_normal.png");
                  &:hover {
                      background-image: url("../assets/img/partnerlogo4_hover.png");
                  }
              }
              .secondPartner {
                  background-image: url("../assets/img/partnerlogo5_normal.png");
                  &:hover {
                      background-image: url("../assets/img/partnerlogo5_hover.png");
                  }
              }
              .thirdPartner {
                  background-image: url("../assets/img/partnerlogo6_normal.png");
                  &:hover {
                      background-image: url("../assets/img/partnerlogo6_hover.png");
                  }
              }
          }
          .commonSix {
              height: 120px;
              width: 372px;
              border-radius: 8px;
              border: 1px solid #F0F0F0;
              box-sizing: border-box;
              overflow: hidden;
              cursor: pointer;
              background-color:  #F0F0F0;
              background-repeat: no-repeat;
              background-size: cover;
              transition: all .2s;
              &:hover { 
                  background-color: #fff;
              }
          }
          .more {
              font-size: 16px;
              color: #3377FF;
              height: 16px;
              line-height: 16px;
              margin-top: 60px;
              cursor: pointer;
          }
      }
    .home-1 {
      background-color: #F9FAFF;
      height: 700px;
      text-align: center;
      color: #999;
      position: relative;
      .tab-wrap {
        position: absolute;
        width:1200px;
        left:0;
        right: 0;
        z-index: 10;
        top:196px;
        margin: auto;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        .tab-item {
          display: flex;
          justify-content: center;
          align-items: center;
          width:210px;
          height:54px;
          background:rgba(255,255,255,1);
          box-shadow:0px 6px 12px rgba(106,106,106,0.1);
          opacity:1;
          font-size: 14px;
          font-weight: bold;
          border-radius:10px;
          color: #0E1421;
          cursor: pointer;
          span{
            display: block;
            height: 36px;
            width:36px;
            margin-right:10px;
            background-position: center center;
            background-repeat: no-repeat;
          }
          .span-0{
            background-image:url("../assets/img/305-i-1-1.png");
          }
          .span-1{
            background-image:url("../assets/img/305-i-2-1.png");
          }
          .span-2{
            background-image:url("../assets/img/305-i-3-1.png");
          }
        }
        .tab-item.active {
          .span-0{
            background-image:url("../assets/img/305-i-1.png");
          }
          .span-1{
            background-image:url("../assets/img/305-i-2.png");
          }
          .span-2{
            background-image:url("../assets/img/305-i-3.png");
          }
        }
      }

      .car-top {
        padding-top: 74px;

        h3 {
          font-size: 32px;
          color: #0E1421;
          font-weight: bold;
        }

        p {
          padding-top: 18px;
          padding-bottom: 142px;
          color: #707070;
          font-size: 14px;
        }
      }

      .car-content {
        padding-left: 56px;
        padding-right: 56px;
        display: flex;
        text-align: left;
        justify-content: space-between;
        .car-l {
          padding-top: 100px;
          h4 {
            font-size: 24px;
            font-weight: 700;
            color: #0E1421;
            margin-bottom: 24px;
          }

          p {
            text-align: left;
            font-size: 14px;
            padding-bottom: 0;
            padding-top: 0;
            line-height: 30px;
            color: #494D5A;
          }

          span {
            display: inline-block;
            font-size: 14px;
            line-height: 20px;
            margin-top: 30px;
            cursor: pointer;
            color: #5394FF;
          }
        }
        .car-r {
          height: 406px;
          width: 500px;
          background-repeat: no-repeat;
          background-position: center center;
        }
        .car-r-1 {
          background-image: url('../assets/img/305-img-3.png')
        }
        .car-r-2 {
          background-image: url('../assets/img/305-img-2.png')
        }
        .car-r-3 {
          background-image: url('../assets/img/305-img-1.png')
        }
      }

      .tab-body-1 {
        color: #51CC72;

        .t-body-l {
          .tab-label {
            /*border: 1px solid #51CC72;*/
            background-color: #51CC72;
            color: #fff;
            font-weight: 600;
          }
        }
      }

      .tab-body-2 {
        color: #FC723E;

        .t-body-l {
          .tab-label {
            /*border: 1px solid #FC723E;*/
            background-color: #FC723E;
            color: #fff;
            font-weight: 600;
          }
        }
      }
    }

    .home-2 {
      height:613px;
      color:#758296;
      width: auto;
      background:url("../assets/img/305-line.png") no-repeat bottom center;
      h2{
        text-align: center;
        font-size: 32px;
        padding:75px 0 52px;
        color: #383D41;
      }
      ul {
        display: flex;
        width: 1300px;
        margin: auto;
        justify-content: space-between;
        li {
          width:280px;
          height:340px;
          transform: translateX(0px) translateY(0px) scale(1);
          transition: .3s;
          background-color: #fff;
          background-position:bottom right;
          background-repeat: no-repeat;
          box-shadow:0px 6px 16px rgba(106,106,106,0.1);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .img-wrap {
            position: absolute;
            top:40px;
            left:26px;
            width:12px;
            height:4px;
            z-index:222;
            background:rgba(55,132,255,1);
            opacity:1;
          }
          span {
            display: block;
            margin-left:26px;
            width: 230px;
            text-align:left;
            color:#0E1421;
            font-size:18px;
            line-height:32px;
            margin-bottom: 15px;
          }
          p {
            display: block;
            margin-left:26px;
            width: 230px;
            text-align: justify;
            font-size: 14px;
            color:#758296;
            line-height:24px;
          }
        }
        li:hover{
          transition:.3s;
          box-shadow:0px 10px 26px rgba(90,90,90,0.3);
          transform: translateX(0px) translateY(-15px) scale(1.05);
        }
        .li-1{
          background-image: url("../assets/img/305-3.png");
        } .li-2{
          background-image: url("../assets/img/305-4.png");
        } .li-3{
          background-image: url("../assets/img/305-2.png");
        } .li-4{
          background-image: url("../assets/img/305-1.png");
        }
      }
    }

    .home-3 {
        padding: 90px 0 0;
        color: #999;
        .setHere1 {
            font-size: 20px;
            color: #333;
        }
        .setHere2 {
            font-size: 36px;
            color: #333;
        }
      .zx-wrap {
        display: flex;
        margin: 48px auto 72px;
        justify-content: space-between;
        padding-left: 8px;
        .zx-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          align-items: center;
          cursor: pointer;
          width: 560px;
          height: 150px;
          p {
            padding: 10px 0;
          }
        }
        .zx-3 {
            background-image: url("../assets/img/company_news.png");
            background-repeat: no-repeat;
            background-position: center center;
            background-size:contain;
        }
        .zx-2 {
            background-image: url("../assets/img/media_news.png");
            background-repeat: no-repeat;
            background-position: center center;
            background-size:contain;
        }
      }

    }

  }
          .zx-content {
              ul {
            width: 1200px;
            margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          li {
            display: flex;
              box-sizing: border-box;
              padding-left: 20px;
            justify-content: space-between;
            margin-bottom: 45px;

            .zx-l {
              position: relative;
              z-index:2;
              color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              width: 100px;
              height: 100px;
              background:rgba(55,132,255,1);
              box-shadow:0px 5px 10px rgba(106,106,106,0.1);
              strong {
                font-size: 37px;
              }
            }

            .zx-r {
              position: relative;
              z-index: 1;
              transform: translateX(-23px) translateY(23px);
              width:420px;
              padding: 23px 50px 0;
              height:145px;
              box-sizing: border-box;
              background:rgba(255,255,255,1);
              box-shadow:0px 5px 10px rgba(106,106,106,0.1);
              cursor: pointer;

              h5 {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }

              p {
                text-align: justify;
                overflow: hidden;
                line-height: 20px;
                height: 40px;
                text-overflow: -o-ellipsis-lastline;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                padding: 0;
                margin: 10px 0;
              }
            }
          }
        }
      }
  .w1200{
    display: block;
    width: 1200px;
    margin: auto;

    h3 {
      color: #0E1421;
      font-weight:Bold;
      font-size:32px;
      text-align: center;
    }

    p {
      font-size: 14px;
      color: #758296;
      text-align: center;
      padding: 18px 0 36px;
    }
  }
  .new-350-bg{
    margin: auto;
    height:280px;
    background:url("../assets/img/305-f-1.png") no-repeat center center;
  }
  .w1300{
    display: block;
    width: 1300px;
    margin: auto;

    h3 {
      color: #0E1421;
      font-weight:Bold;
      font-size:32px;
      text-align: center;
    }

    p {
      font-size: 14px;
      color: #758296;
      text-align: center;
      padding: 18px 0 50px;
    }
  }
    .setHere5 {
        margin-bottom: 48px;
    }
  .t-hr {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .t-border {
      display: flex;
      height: 20px;
      width: 6px;
      background-color: #209DFD;
    }
    .t-text {
        color: #333;
        font-weight: 600;
        font-size: 20px;
        width: 90px;
        margin-left: 20px;
    }
    .t-line-x {
      height: 1px;
      background-color: #F7F8FA;
      width:1200px;
    }
  }
</style>