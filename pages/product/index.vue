<template>
  <div class="productIndexCon">
      <div class="topPart">
           <div class="topTitle">服务群体</div>
                <div class="tripleCon">
              <template v-for="(item,index) in imgArr">
                  <div class="tripleConItem">
                      <img :src="item.src">
                      <div class="desp1">{{item.desp1}}</div>
                      <div class="desp2">{{item.desp2}}</div>
                </div>
                </template>
          
          
            </div>
        </div>

      
      <div class="itemCon">
          <div class="itemOne flex">
              <img class="mainImg" src="@/assets/img/outsource3.png">
              <div class="textCon ">
                  <div class="itemTitle" >智慧SaaS管理：提效率、降成本</div>
                  <div class="secondLevelText setWidth1">万才网实现了移动端智能排班、考勤、结算、发薪一体化线上操作流程，帮助企业从繁杂的事务性工作中解脱出来，减少人员开支</div>
                  <div>
                      <div class="selectFlex">
                          <img class="selectedImg" src="@/assets/img/selected.png"><div class="shortText">自动排班——解除手动排班的繁琐</div>
                        </div>
                      <div class="selectFlex">
                          <img class="selectedImg" src="@/assets/img/selected.png"><div class="shortText">线上考勤——人脸打卡，虚签0概率</div>
                        </div>
                      <div class="selectFlex">
                          <img class="selectedImg" src="@/assets/img/selected.png"><div class="shortText">智能结算——自动结算，精确省事</div>
                        </div>
                    </div>
                </div>
            </div>
          <div class="itemTwo flex">
              <div class="textCon">
                  <div class="itemTitle">数据报表：投入产出比一目了然</div>
                  <div class="secondLevelText setSecondHeight">平台可提供多维度的生产能效、项目利润分析报表，实时、可视化显示项目情况，精准管理分析，深挖数据背后的价值！</div>
                  <div>
                      <div class="selectFlex">
                          <img class="selectedImg" src="@/assets/img/selected.png"><div class="shortText">考勤数据——线上打卡数据实时可查</div>
                        </div>
                      <div class="selectFlex">
                          <img class="selectedImg" src="@/assets/img/selected.png"><div class="shortText">项目利润表——利润情况心中有数</div>
                        </div>
                      <div class="selectFlex">
                          <img class="selectedImg" src="@/assets/img/selected.png"><div class="shortText">生产效能表——现场效率一目了然</div>
                        </div>
                    </div>
                </div>
              <img class="thirdMainImg" src="@/assets/img/203.png">
            </div>
          <div class="itemThree flex">
              <img class="secMainImg" src="@/assets/img/outsource2.png">
              <div class="textCon">
                  <div class="itemTitle">合法合规：规避企业用工风险</div>
                  <div class="secondLevelText ">新业态从业人员经由万才网平台转化，将劳动（务）雇佣关系转化为合作经营关系，在降低企业用工成本的同时规避了企业的用工风险。</div>
                  <div>
                      
                       <div class=" firstSetMarginBottom">
                          <div class="selectFlex">
                          <img class="selectedImg" src="@/assets/img/selected.png"><div class="shortText">外包模式——无社保费用，降低成本</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          <div class="itemFour flex">
              <div class="textCon">
                  <div class="itemTitle">商保服务：灵活配置、24h保障</div>
                  <div class="secondLevelText ">万才网商业保险，按天购买、打卡生效！可灵活自主选择医疗、工伤额度！确保人员出现工伤事故时，极大地降低企业风险成本！</div>
                  <div>
                       <div class=" firstSetMarginBottom">
                          <div class="selectFlex">
                          <img class="selectedImg" src="@/assets/img/selected.png"><div class="shortText">一键购险——实时生效，保障无忧</div>
                        </div>
                        </div>
                    </div>
                </div>
              <img class="fourthMainImg" src="@/assets/img/outsource4.png">
            </div>
        </div>
      <successExampleSimple class="setMarginTop" :companyArr="companyArr"></successExampleSimple>

<!--    <successExample class="setMarginTop"></successExample>-->

    <FootGo/>
  </div>
</template>
<script>
  import FootGo from '@/components/footgo'
  export default {
    components:{FootGo},
    data(){
      return {
          imgArr:[
              { src:require('@/assets/img/company.png'),desp1:'企业商家',desp2:'有营业执照' },
              { src:require('@/assets/img/company_person.png'),desp1:'个人商家',desp2:'无营业执照的“工头”' },
              { src:require('@/assets/img/company_manager.png'),desp1:'企业员工',desp2:'企业下附属的管理者' },
          ],
          companyArr:[
            /*  { 
                  src:require('@/assets/img/youzheng_logo.png'),
                  name:'中国邮政',
                  first:'中国邮政杭州邮件处理中心是中国邮政浙江省分公司下面的分支机构，主营速递物流类业务，为社会公众提供信函、包裹、快递等服务。',
                  second:'人员规模、流动性较强，人员管理较为复杂，用工成本较高，效率无法提升；员工出现工伤事故等导致的用工风险大！',
                  third:'采用线上蓝领智慧化SaaS管理模式，手机终端智能排版、考勤、结算、发薪一站式劳动力企业服务，赋能企业降本增效；引入商业保险，即时保障了员工的合法权利，降低企业用人风险。截至目前，该系统在提高人均产能、降低管理成本和办公成本方面颇有成效，深受中国邮政好评。',
                  imgArr:[
                      { img:`http://test.api.10000rc.com/company/wc1.jpg` },
                        { img:`http://test.api.10000rc.com/company/wc2.jpg`},
                        { img:`http://test.api.10000rc.com/company/wc3.jpg` },
                        { img:`http://test.api.10000rc.com/company/wc4.jpg`},
                  ],
              },
              { 
                  src:'',
                  name:'钜锋人力',
                  short:'钜锋',
                  first:'钜锋人力资源开发有限公司成立于2017年，致力于从事劳务派遣、人力资源外包服务。向浙江省内的企业输送大批次的新业态从业人员需求！',
                  second:'社保不灵活、费用过高；企业长期招聘难，招聘成本高；人员管理难，效率极低；',
                  third:'通过平台缴纳社保，一天1元打卡生效，降低成本和风险；通过微团模式完成用工需求，降低招聘成本；运用新业态从业人员管理SaaS平台智能排班考勤，结算发薪一站式高效操作，提升效率。',
                  imgArr:[
                      { img:`http://test.api.10000rc.com/company/jf1.jpg` },
                      { img:`http://test.api.10000rc.com/company/jf2.jpg`},
                      { img:`http://test.api.10000rc.com/company/jf3.jpg` },
                      { img:`http://test.api.10000rc.com/company/jf4.jpg`},
                  ],
              },*/
              { 
                  src:require('@/assets/img/haicang_logo.png'),
                  name:'海仓科技',
                  first:'海仓科技是一家从事跨境电商供应链服务、智能仓储设备研发与集成的综合型企业。公司业务范围涵盖仓储运营管理、线上云商、仓储技术、供应链金融、自营电商平台、智能仓规划建设、仓储自动化设备研发和软硬件服务等，并与考拉海购、云集等跨境电商平台建立长期战略合作伙伴关系',
                  second:'如何对已合作的多家外包服务商进行统一的系统化管理，传统的管理方式效率低且信息不准确。',
                  third:'通过对实际业务场景的数据采集实现智能化数字化管理，大大减少企业内部繁琐的事务性工作，使得企业在外包商管理这个模块正真实现成本的降低和效率的提成。',
                  imgArr:[
                      { img:`http://test.api.10000rc.com/company/hc1.jpg` },
                    { img:`http://test.api.10000rc.com/company/hc2.jpg`},
                    { img:`http://test.api.10000rc.com/company/hc3.jpg` },
                    { img:`http://test.api.10000rc.com/company/hc4.jpg`},
                  ],
              },
             /* { 
                  src:'',
                  short:'汇鑫',
                  name:'海宁汇鑫',
                  first:'海宁汇鑫服务外包有限公司是华东地区领先的蓝领（人力资源）外包服务供应商之一。，通过丰富的劳动力资源、专业的服务经验和先进的管理体系，为客户提供系统、全面的蓝领供应及整体外包服务解决方案。',
                  second:'对于新业态从业人员的商保不及时、不灵活，传统管理方式效率低，薪资结算流程太过繁杂。',
                  third:'通过系统化工作环节的提升，管理者可快速了解项目进展和结果，同一岗位（排班/考勤/后勤/招聘）所需人员减少，降低企业成本。薪资不会出差错，增加新业态从业人员和企业的粘性，减少流失率，用人更加稳定。',
                  imgArr:[
                      { img:`http://test.api.10000rc.com/company/hx1.jpg` },
                    { img:`http://test.api.10000rc.com/company/hx2.jpg`},
                    { img:`http://test.api.10000rc.com/company/hx3.jpg` },
                    { img:`http://test.api.10000rc.com/company/hx4.jpg`},
                  ],
              },*/
          ],
      }
    },
    head() {
      return {
        title: '产品服务-万才企业版',
        meta: [
          { hid: 'keywords', name: 'keywords', content: '万才,万才网,新业态从业人员,新业态从业人员管理,考勤软件,考勤系统,排班软件,排班系统,智能排班,劳动力管理,临时工管理,分时用工,众包平台' },
          { hid: 'description', name: 'description', content: '万才网,专注深耕电商快递物流行业的新业态从业人员用工市场,通过互联网信息技术的不断创新和运用,为国内新业态从业人员用工市场的灵活用工、合规用工、灵活就业、高效就业的痛点提供多类型产品方案.' }
        ]
      }
    },
    mounted(){
     
    },
    methods:{
        
    },
  }
</script>
<style lang="scss" scoped>
       .topPart {
            margin: 0 auto;
            text-align: center;
        }
        .topTitle {
            font-size: 36px;
            color: #333;
            font-weight: 600;
            margin-bottom: 76px;
        }
    .tripleCon {
        width: 860px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
     
        .tripleConItem {
            width: 145px;
            text-align: center;
            img {
                width: 120px;
                height: 120px;
                display: inline-block;
            }
            .desp1 {
                font-size: 24px;
                color: #333;
                font-weight: 600;
                margin-top: 20px;
                margin-bottom: 20px;
            }
            .desp2 {
                font-size: 16px;
                color: #999;
            }
        }
        
    }
        .firstMarginLeft {
        margin-left: 30px;
    }
       .fourthMainImg {
            height: 350px;
            width: 610px;
        }
    .selectedImg {
        width: 17px;
        height: 16px;
        margin-right: 10px;
    }
    .flex {
        display: flex;  
        align-content: flex-start;
        align-items: flex-start;
    }
    .itemTitle {
        color: #333;
        font-size: 28px;
        font-weight: 600;
        height: 28px;
        line-height: 28px;
        margin-bottom: 28px;
    }
    .setWidth1 {
        width: 480px;
    }
    .secondLevelText {
        color: #666;
        font-size: 16px;
        line-height: 24px;
        height: 36px;
        margin-bottom: 36px;
    }
    .setSecondHeight {
        height: 67px;
    }
    .setFourthHeight {
        height: 67px;
    }
    .shortText {
        font-size: 16px;
        color: #A6AFBB;
        height: 17px;
        line-height: 17px;
    }
    .setMarginTop {
        margin-top: 120px;
    }
    .selectFlex {
        display: flex;
        align-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    .itemCon {
        width: 1230px;
        margin: 0 auto;        
        .mainImg {
            width: 660px;
            height: 414px;
        }
        .secMainImg {
            width: 690px;
            height: 360px;
        }
        .thirdMainImg {
            height: 414px;
            width: 690px;
        }
        .itemOne {
            margin-top: 120px;
            justify-content: space-between;
            .textCon {
                margin-right: 36px;
                margin-top: 90px;
            }
        }
        .itemTwo {
            margin-top: 40px;
            justify-content: space-between;
            .textCon {
                width: 470px;
                margin-left: 30px;
                margin-top: 90px;
            }
        }
        .itemThree {
            margin-top: 40px;
            justify-content: space-between;
            .textCon {
                width: 490px;
                margin-right: 36px;
                margin-top: 90px;
            }
        }
         .itemFour {
            margin-top: 40px;
            justify-content: space-between;
            .textCon {
                width: 490px;
                margin-right: 36px;
                margin-top: 90px;
            }
        }
    }
    .firstSetMarginBottom {
        margin-bottom: 18px;
    }
  .productIndexCon {
    background-color: #fff;

  }
</style>
