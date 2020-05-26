<template>
  <div class="productMasterCon">
    <div class="masterPart">
        <div class="gradientPart"  v-if="$route.name == 'product' ">
            <div class="fakeBtn" @click="goTrail"></div>
        </div>
        <div class="gradientPartPerson" v-else>
            <div class="fakeBtn" @click="goTrail"></div>
        </div>
        <div class="switchCon">
          <template v-for="(item,index) in linkArr">
              <nuxt-link class="btnStyle" :key="index" :class="{initActive:(index == 0)&&(initYes == 1)}" :to="{path:item.path,query:{isWhite:item.isWhite}}" @click.native="goTo(item)">{{item.name}}</nuxt-link>
            </template>
          <div>
            </div>
        </div>

    </div>
    <div class="childMaster">
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>
<script>
  export default {
      scrollToTop: true,
    head() {
      return {
        title: '产品服务',
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content: '万才网，万才科技，万才经理人，灵活用工，社保入税，临时用工，劳动力管理，劳动力管理系统，考勤系统，排班系统，智能排班，财税统筹，财税咨询，社保改革，人力资源管理系统，人力资源管理软件，员工商业保险。'
          },
          {
            hid: 'description',
            name: 'description',
            content: '万才网为企业，外包公司和新业态从业人员提供三方交互桥梁，帮助企业定制社保入税后灵活用工的合法合规使用方案，另有灵活用工管理，财税统筹，商业保险等服务，帮助企业降低用工风险，实现财税优化，真正做到降本增效，提升企业的生存空间。'
          }
        ]
      }
    },
    data() {
      return {
          linkArr:[
                  { name:'万才企业版',path:'/product',isWhite:1,index:0 },
                  { name:'万才个人版',path:'/product/humanOne',isWhite:1,index:1  }
              ],
          initYes:1,
      }
    },
      beforeDestroy(){
          sessionStorage.removeItem('productInitYes');
      },
      mounted(){
          this.getCurrentIndex();
      },  
    methods: {
        goTrail(){
            this.$parent.$parent.dialogVisible = true;
        },
        getCurrentIndex(){
            let sessionData = sessionStorage.getItem('productInitYes')
            console.log( sessionData );
            if( sessionData ){
                this.initYes = 10;
            }else{
                this.initYes = 1;
            }
        },
        goTo(item){ 
            this.initYes = 10;
            sessionStorage.setItem('productInitYes',10);
        }
    },
  }
</script>
<style lang="scss" scoped>
  .productMasterCon {
    .masterPart {
      position: relative;
    }
      
      
      .switchCon {
            width:400px;
            height:64px;
            background:rgba(245,245,245,1);
            border-radius:32px;
            margin:80px auto;
            padding-top: 4px;
            color: #666;
        }
        .btnStyle {
            height: 56px;
            width: 196px;
            font-weight: 400;
            text-align: center;
            line-height: 56px;
            font-size: 20px;
            display: inline-block;
        }
        .initActive {
            font-weight: 600;
            color: #fff;
            height: 56px;
            width: 196px;
            background:linear-gradient(90deg,rgba(98,175,255,1) 0%,rgba(51,119,255,1) 100%);
            box-shadow:0px 5px 20px 0px rgba(51,119,255,0.3);
            border-radius:30px;
        }
        .nuxt-link-exact-active {
            font-weight: 600;
            color: #fff;
            height: 56px;
            width: 196px;
            background:linear-gradient(90deg,rgba(98,175,255,1) 0%,rgba(51,119,255,1) 100%);
            box-shadow:0px 5px 20px 0px rgba(51,119,255,0.3);
            border-radius:30px;
        }
      
      .fakeBtn {
          height: 60px;
          margin: 0 auto;
          width: 200px;
          cursor: pointer;
      }
      .gradientPartPerson {
          background-image: url(../assets/img/person_company.png);
          background-size: cover;
          background-repeat: no-repeat;
          background-clip: border-box;
          background-position: center;
          height: 480px;
          text-align: center;
          padding-top:300px;
      }
    .gradientPart {
        background-image: url(../assets/img/company_banner.png);
      background-size: cover;
      background-repeat: no-repeat;
      background-clip: border-box;
      background-position: center;
      height: 480px;
      text-align: center;
      padding-top: 300px;
    }
  }
</style>
