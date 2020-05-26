<template>
  <div class="clientIndexCon">
      <div class="limitWidth">
          <template v-for="(item,index) in companyArr">
              <div class="itemCon">
                  <div class="partTopLeft">
                             <div class="circleLogo">
                                 <div class="textLogo" v-if="!item.src">{{ item.short }}</div>
                                 <img v-else class="companyLogo" :src="item.src" >
                            </div>
                             <div class="fullName">{{item.name}}</div>
                            </div>
                  <div class="desp">{{item.first}}</div>
                  <div class="partBottom flex">
                         <template v-for="(subitem,subindex) in item.imgArr">
                             <div :key="subindex" class="imgThumb" :style="{backgroundImage:'url('+ subitem.img  +')'}" ></div>
                        </template>
                        </div>
                </div>
            </template>
        </div>  
      
  </div>
</template>
<script>
export default {
  head () {
    return {
      title: '客户案例',
    }
  },
    data(){
        return {
            companyArr:[
              { 
                  src:require('@/assets/img/youzheng_logo.png'),
                  name:'中国邮政',
                  first:'中国邮政杭州邮件处理中心是中国邮政浙江省分公司下面的分支机构，主营速递物流类业务，为社会公众提供信函、包裹、快递等服务。',
                  imgArr:[
                      { img:`http://test.api.10000rc.com/company/wc1.jpg` },
                        { img:`http://test.api.10000rc.com/company/wc2.jpg`},
                        { img:`http://test.api.10000rc.com/company/wc3.jpg` },
                        { img:`http://test.api.10000rc.com/company/wc4.jpg`},
                  ],
              },
              
              { 
                  src:require('@/assets/img/haicang_logo.png'),
                  name:'海仓科技',
                  first:'海仓科技是一家从事跨境电商供应链服务、智能仓储设备研发与集成的综合型企业。公司业务范围涵盖仓储运营管理、线上云商、仓储技术、供应链金融、自营电商平台、智能仓规划建设、仓储自动化设备研发和软硬件服务等，并与考拉海购、云集等跨境电商平台建立长期战略合作伙伴关系。',
                  
                  imgArr:[
                      { img:`http://test.api.10000rc.com/company/hc1.jpg` },
                    { img:`http://test.api.10000rc.com/company/hc2.jpg`},
                    { img:`http://test.api.10000rc.com/company/hc3.jpg` },
                    { img:`http://test.api.10000rc.com/company/hc4.jpg`},
                  ],
              },
                { 
                  src:'',
                  name:'钜锋人力',
                  short:'钜锋',
                  first:'钜锋人力资源开发有限公司成立于2017年，致力于从事劳务派遣、人力资源外包服务。向浙江省内的企业输送大批次的新业态从业人员需求！',   
                  imgArr:[
                      { img:`http://test.api.10000rc.com/company/jf1.jpg` },
                      { img:`http://test.api.10000rc.com/company/jf2.jpg`},
                      { img:`http://test.api.10000rc.com/company/jf3.jpg` },
                      { img:`http://test.api.10000rc.com/company/jf4.jpg`},
                  ],
              },
              { 
                  src:'',
                  short:'汇鑫',
                  name:'海宁汇鑫',
                  first:'海宁汇鑫服务外包有限公司是华东地区领先的蓝领（人力资源）外包服务供应商之一。通过丰富的劳动力资源、专业的服务经验和先进的管理体系，为客户提供系统、全面的蓝领供应及整体外包服务解决方案。',
                  imgArr:[
                      { img:`http://test.api.10000rc.com/company/hx1.jpg` },
                    { img:`http://test.api.10000rc.com/company/hx2.jpg`},
                    { img:`http://test.api.10000rc.com/company/hx3.jpg` },
                    { img:`http://test.api.10000rc.com/company/hx4.jpg`},
                  ],
              },
          ],
        }
    },
}
</script>

<style lang="scss" scoped>
    .clientIndexCon {
        background-color: #fff;
        padding-top: 80px;
        box-sizing: border-box;
        text-align: center;
        .limitWidth {
            width: 1200px;
            margin: 0 auto;
     
        }
        .imgThumb {
        width: 230px;
        height: 130px;
        position: inherit;
        z-index: 1;
        transform:translateY(0px) scale(1);
        transition: .3s;
        background-position: center;
        background-size:cover;
            margin-right: 40px;
            &:last-child {
                margin-right: 0;
            }
    }
    .imgThumb:hover{
        z-index: 999;
        transform:translateY(-10px) scale(2.3);
        transition: .3s;
    }
             .partBottom {
                display: flex;
                justify-content:flex-start;
                align-content: center;
                align-items: center;
                margin: 0 auto;
                 margin-top: 36px;
            }
        .itemCon {
            width:1200px;
            padding: 80px;
            padding-top: 52px;
            box-sizing: border-box;
            background:#fff;
            box-shadow:0px 5px 20px -3px rgba(0,0,0,0.1);
            border-radius:16px;
            margin-bottom: 80px;
        }
        .companyLogo {
        width: 60px;
        height: 60px;
    }
        .desp {
            color: #666;
            font-size: 16px;
            text-align: left;
            width: 1040px;
        }
        .textLogo {
            height: 60px;
                width: 60px;
                border-radius: 30px;
                font-size: 18px;
                font-weight: bold;
                color: #fff;
                line-height: 60px;
                text-align: center;
        background-color: #3377FF;
            
    }
           .partTopLeft {
                    display: flex;
                    justify-content: flex-start;
                    align-content: center;
                    align-items: center;
                    margin-bottom: 16px;
                    .fullName {
                        color: #333;
                        font-size: 28px;
                        font-weight: bold;
                        margin-left: 20px;
                    }
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
</style>