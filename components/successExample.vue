<template>
  <div class="successExampleCon">
      <div class="successTitle">成功案例</div>
<!--      <div class="scrollCon">-->
          <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="part1 part">
                     <div class="part1Top partTop flex">
                         <div class="part1TopLeft partTopLeft">
                             <div class="circleLogo">钜峰</div>
                            </div>
                         <div class="fullName">钜锋人力</div>
                         <div class="part1TopRight partTopRight">
                             
                             <div class="subFlex subFirstFlex">
                                 <div class="titleText">公司简介：</div>
                                 <div class="describe">钜锋人力资源开发有限公司成立于2017年，致力于从事劳务派遣、人力资源外包服务。向浙江省内的企业输送大批次的新业态从业人员需求！</div>
                                </div>
                             <div  class="subFlex subSecFlex">
                                 <div class="titleText">存在痛点：</div>
                                 <div class="describe">社保不灵活、费用过高；企业长期招聘难，招聘成本高；人员管理难，效率极低；</div>
                                </div>
                             <div  class="subFlex subThirdFlex">
                                 <div class="titleText">解决方案：</div>
                                 <div class="describe">通过平台缴纳社保，一天1元打卡生效，降低成本和风险；通过微团模式完成用工需求，降低招聘成本；运用新业态从业人员管理SaaS平台智能排班考勤，结算发薪一站式高效操作，提升效率。</div>
                                </div>
                            </div>
                        </div>
                     <div class="part1Bottom partBottom flex">
                         <template v-for="(item,index) in imgArr1">
                             <div :key="index" class="imgThumb" :style="{backgroundImage:'url('+ item.img  +')'}" @click="pickThisPic(item,index)"></div>
                        </template>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="part2 part">
                     <div class="part2Top partTop flex">
                         <div class="part2TopLeft partTopLeft">
                             <div class="circleLogo">海仓</div>
                            </div>
                         <div class="part2TopRight partTopRight">
                              <div class="fullName">海仓科技</div>
                             <div class="subFlex subFirstFlex">
                                 <div class="titleText">公司简介：</div>
                                 <div class="describe">海仓科技是一家从事跨境电商供应链服务、智能仓储设备研发与集成的综合型企业。公司业务范围涵盖仓储运营管理、线上云商、仓储技术、供应链金融、自营电商平台、智能仓规划建设、仓储自动化设备研发和软硬件服务等，并与考拉海购、云集等跨境电商平台建立长期战略合作伙伴关系。</div>
                                </div>
                             <div  class="subFlex subSecFlex">
                                 <div class="titleText">存在痛点：</div>
                                 <div class="describe">如何对已合作的多家外包服务商进行统一的系统化管理，传统的管理方式效率低且信息不准确。</div>
                                </div>
                             <div  class="subFlex subThirdFlex">
                                 <div class="titleText">解决方案：</div>
                                 <div class="describe">通过对实际业务场景的数据采集实现智能化数字化管理，大大减少企业内部繁琐的事务性工作，使得企业在外包商管理这个模块正真实现成本的降低和效率的提成。</div>
                                </div>
                            </div>
                        </div>
                     <div class="part2Bottom partBottom">
                         <template v-for="(item,index) in imgArr2">
                             <div :key="index" class="imgThumb" :style="{backgroundImage:'url('+ item.img  +')'}" @click="pickThisPic2(item,index)"></div>
                        </template>
                        </div>
                    </div>
                </div>
                        <div class="swiper-slide">
                    <div class="part2 part">
                     <div class="part2Top partTop flex">
                         <div class="part2TopLeft partTopLeft">
                             <div class="circleLogo">汇鑫</div>
                            </div>
                         <div class="part2TopRight partTopRight">
                              <div class="fullName">海宁汇鑫</div>
                             <div class="subFlex subFirstFlex">
                                 <div class="titleText">公司简介：</div>
                                 <div class="describe">海宁汇鑫服务外包有限公司是华东地区领先的蓝领（人力资源）外包服务供应商之一。，通过丰富的劳动力资源、专业的服务经验和先进的管理体系，为客户提供系统、全面的蓝领供应及整体外包服务解决方案。</div>
                                </div>
                             <div  class="subFlex subSecFlex">
                                 <div class="titleText">存在痛点：</div>
                                 <div class="describe">对于新业态从业人员的商保不及时、不灵活，传统管理方式效率低，薪资结算流程太过繁杂。</div>
                                </div>
                             <div  class="subFlex subThirdFlex">
                                 <div class="titleText">解决方案：</div>
                                 <div class="describe">通过系统化工作环节的提升，管理者可快速了解项目进展和结果，同一岗位（排班/考勤/后勤/招聘）所需人员减少，降低企业成本。薪资不会出差错，增加新业态从业人员和企业的粘性，减少流失率，用人更加稳定。</div>
                                </div>
                            </div>
                        </div>
                     <div class="part2Bottom partBottom">
                         <template v-for="(item,index) in imgArr3">
                             <div :key="index" class="imgThumb" :style="{backgroundImage:'url('+ item.img  +')'}" @click="pickThisPic3(item,index)"></div>
                        </template>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>            
        </div>
<!--        </div>-->
  </div>
</template>
<script>
  export default {
    data(){
      return {
          swiperBridge:null,
          imgArr1:[
              { img:`http://test.api.10000rc.com/company/jf1.jpg` },
                { img:`http://test.api.10000rc.com/company/jf2.jpg`},
                { img:`http://test.api.10000rc.com/company/jf3.jpg` },
                { img:`http://test.api.10000rc.com/company/jf4.jpg`},
          ],
          imgArr2:[
              { img:`http://test.api.10000rc.com/company/hc1.jpg` },
                { img:`http://test.api.10000rc.com/company/hc2.jpg`},
                { img:`http://test.api.10000rc.com/company/hc3.jpg` },
                { img:`http://test.api.10000rc.com/company/hc4.jpg`},
          ],
          imgArr3:[
              { img:`http://test.api.10000rc.com/company/hx1.jpg` },
                { img:`http://test.api.10000rc.com/company/hx2.jpg`},
                { img:`http://test.api.10000rc.com/company/hx3.jpg` },
                { img:`http://test.api.10000rc.com/company/hx4.jpg`},
          ],
      }
    },
    mounted(){
        this.initSwiper();
    },
    methods: {   
        initSwiper(){
            this.swiperBridge = new Swiper ('.swiper-container', {
                direction: 'horizontal', 
                loop: true, 
                autoplay:true,
                pagination: {
                  el: '.swiper-pagination',
                },
                on:{
                    click: function(){
//                      alert('你点了Swiper');
                    },
                  },
            }) 
        },
        pickThisPic(item,index){
            console.log( item,index );
        },
        pickThisPic2(item,index){
            console.log( item,index );
        },
        pickThisPic3(item,index){
            console.log( item,index );
        },
    }
  }
</script>
<style lang="scss" scoped>
    .flex {
        display: flex;
        align-content: center;
        align-items: flex-start;
    }
    .titleText {
        font-size: 14px;
        color: #0E1421;
        width: 70px;
    }
    .subFlex {
        display: flex;
        justify-content: flex-start;
        align-content: center;
        align-items: flex-start;
    }
    .subFirstFlex {
        margin-bottom: 30px;
    }
    .subSecFlex {
        margin-bottom: 30px;
    }
    .subThirdFlex {
        margin-bottom: 30px;
    }
    .fullName {
        color: #0E1421;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
        margin-top: 10px;
    }
    .imgThumb {
        width: 170px;
        height: 100px;
        position: inherit;
        z-index: 1;
        transform:translateY(0px) scale(1);
        transition: .3s;
        background-position: center;
        background-size:cover;
    }
    .imgThumb:hover{
        z-index: 999;
        transform:translateY(-10px) scale(2.3);
        transition: .3s;
    }
    .describe {
        font-size: 14px;
        color: #758296;
        width: 670px;
    }
    .successExampleCon {
        width: 1200px;
        z-index: 5;
        padding-bottom: 80px;
        margin: 0 auto; 
        .successTitle {
            width: 130px;
            margin: 0 auto;
            margin-bottom: 40px;
            color: #0E1421;
            font-size: 32px;
            font-weight: bold;
            text-align: center;
        }
        .swiper-container {
             width: 1200px;
            box-sizing: border-box;
            box-shadow:0px 5px 20px -3px rgba(0,0,0,0.1);
            border-radius:8px;
        } 
        .part {
            padding-top: 56px;
            .partTop {
                
                padding-left: 104px;
                .partTopLeft {

                }
                .partTopRight {
                    padding-left: 30px;
                }
            }
            .partBottom {
                width: 830px;
                display: flex;
                justify-content: space-around;
                align-content: center;
                align-items: center;
                margin: 0 auto;
            }
            .circleLogo {
                height: 60px;
                width: 60px;
                border-radius: 30px;
                font-size: 18px;
                font-weight: bold;
                color: #fff;
                line-height: 60px;
                text-align: center;
            }
        }
        
        
        
        
        
        
            .case{
      background-color: #F7F8FA;
      padding:116px 0 136px;
      h3{
        text-align: center;
        font-size: 40px;
        font-weight: 500;
        margin-bottom: 48px;
      }
      .case-body{
        height: 380px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        padding: 58px 88px 0 65px;
        .cir{
          display: flex;
          justify-content: center;
          align-items: center;
          width:90px;
          height:90px;
          border-radius:50%;
          font-size: 24px;
          color: #fff;
          background-color:#209DFD;
        }
        .case-r{
          width: 900px;
          h4{
            font-size: 24px;
            font-weight:500;
          }
          p{
            display: flex;
            justify-content: space-between;
            padding-top:10px;
            line-height: 36px;
            font-size: 18px;
            color: #666;
            strong{
              font-weight:500;
              display: flex;
              color: #333;
              width:90px;
            }
            span{
              display: flex;
              width: 808px;
              text-align: justify;
            }
          }
        }
      }
    }
    }
</style>
