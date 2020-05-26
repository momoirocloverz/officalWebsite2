<template>
  <div class="human-one">
      <div class="itemCon">
          <div class="itemOne flex">
              <img class="mainImg" src="@/assets/img/302.png">
              <div class="textCon ">
                  <div class="itemTitle">考勤薪资数据可视化，有据可查</div>
                  <div class="secondLevelText setWidth1">零工通过平台排班考勤，所有数据明细一应俱全，可实时查询核对、明明白白，有据可查！</div>
                  <div>
                      <div class="selectFlex">
                          <img class="selectedImg" src="@/assets/img/selected.png"><div class="shortText">排班明细——每份结算可查明细</div>
                        </div>
                      <div class="selectFlex ">
                          <img class="selectedImg" src="@/assets/img/selected.png"><div class="shortText">考勤数据</div>
                        </div>
                      <div class="selectFlex">
                          <img class="selectedImg" src="@/assets/img/selected.png"><div class="shortText">奖惩扣款明细——扣款原因一目了然</div>
                        </div>
                    </div>
                </div>
            </div>
          <div class="itemTwo flex">
              <div class="textCon">
                  <div class="itemTitle">商业保险，保障你的人身安全</div>
                  <div class="secondLevelText">平台内零工，均享受24h、灵活、即时保障的商保服务，保障零工的人身安全</div>
                  <div>
                      <div class="selectFlex">
                          <img class="selectedImg" src="@/assets/img/selected.png"><div class="shortText">意外险——打卡系统即自动购险</div>
                        </div>
                      <div class="selectFlex">
                          <img class="selectedImg" src="@/assets/img/selected.png"><div class="shortText">保险记录——历史保险记录可查</div>
                        </div>
                    </div>
                </div>
              <img class="secMainImg" src="@/assets/img/303.png">
            </div>
          <div class="itemThree flex">
              <img class="thirdMainImg" src="@/assets/img/304.png">
              <div class="textCon">
                  <div class="itemTitle">线上发薪，快速便捷有保障</div>
                  <div class="secondLevelText setSecondHeight">平台采用线上发薪方式，发薪明细、进展实时掌控，无需走访讨薪，坐收收入有保障</div>
                  <div>
                      <div class="selectFlex firstSetMarginBottom">
                          <img class="selectedImg" src="@/assets/img/selected.png"><div class="shortText">排班日历——结算进度实时可追踪</div>
                        </div>
                    </div>
                </div>
            </div>
          <div class="itemFour flex">
              <div class="textCon">
                  <div class="itemTitle">信息对称：线上动态消息，实时接收</div>
                  <div class="secondLevelText setFourthHeight">平台对零工排班情况、上工时间、其他说明等消息及时推送提醒，在线实时查询工作安排情况，避免因信息不对称造成的麻烦，做到心中有数，不混乱！</div>
                  <div>
                      <div class="selectFlex">
                          <img class="selectedImg" src="@/assets/img/selected.png"><div class="shortText">push推送——线上即时消息推送</div>
                        </div>
                    </div>
                </div>
              <img class="fourthMainImg" src="@/assets/img/push_message.png">
            </div>
    </div>
      <successExampleSimple class="setMarginTop" :companyArr="companyArr"></successExampleSimple>
    <FootGo/>
  </div>
</template>
<script>
  import FootGo from '@/components/footgo'
  export default {
    components:{FootGo},
    data(){
      return {
             companyArr:[
              { 
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
         /*     { 
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
              },
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
              { 
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
        title: '产品服务-万才个人版',
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
    .firstMarginLeft {
        margin-left: 30px;
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
            width: 690px;
            height: 414px;
        }
        .secMainImg {
            height: 414px;
            width: 670px;
        }
        .thirdMainImg {
            height: 414px;
            width: 663px;
        }
        .fourthMainImg {
            height: 410px;
            width: 660px;
        }
        .itemOne {
            margin-top: 40px;
            justify-content: space-between;
            .textCon {
                margin-right: 36px;
                margin-top: 80px;
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
                width: 470px;
                margin-right: 36px;
                margin-top: 50px;
            }
        }
        .itemFour {
            margin-top: 40px;
            justify-content: space-between;
            .textCon {
                width: 470px;
                margin-left: 30px;
                margin-top: 70px;
            }
        }
    }
    .firstSetMarginBottom {
        margin-bottom: 18px;
    }
  .human-one {
    background-color: #fff;
    margin: auto;
  }
</style>
