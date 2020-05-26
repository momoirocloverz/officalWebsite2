<template>
  <div class="downloadCenterCon">  
      <div class="switchCon">
          <template v-for="(item,index) in linkArr">
              <nuxt-link class="btnStyle" :key="index" :class="{initActive:(index == 0)&&(initYes == 1)}" :to="{path:item.path,query:{isWhite:item.isWhite}}" @click.native="goTo">{{item.name}}</nuxt-link>
            </template>
          <div>
            </div>
        </div>
      <div class="childCon"><nuxt-child/></div>
  </div>
</template>

<script>
export default {
    scrollToTop: true,
  head() {
    return {
      title: '下载中心',
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
    data(){
          return {
              linkArr:[
                  { name:'万才企业版',path:'/downloadCenter',isWhite:1,index:0 },
                  { name:'万才个人版',path:'/downloadCenter/classManager',isWhite:1,index:1  }
              ],
              initYes:1,              
          }
      },
      async asyncData ({ store, error }) { 
      },
      beforeDestroy(){
          sessionStorage.removeItem('downloadInitYes');
      },
      mounted(){
          this.getCurrentIndex();
      },  
      methods:{  
          getCurrentIndex(){
            let sessionData = sessionStorage.getItem('downloadInitYes')
            console.log(sessionData);
            if( sessionData ){
                this.initYes = 10;
            }else{
                this.initYes = 1;
            }
          },
          goTo(){
              this.initYes = 10;
              sessionStorage.setItem('downloadInitYes',10);
          },
      },
}
</script>
<style lang="scss" scoped>
    .downloadCenterCon {  
        padding-top: 80px;
        .switchCon {
            width:400px;
            height:64px;
            background:rgba(245,245,245,1);
            border-radius:32px;
            margin: 0 auto;
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
        .limitWidth {
            width: 1200px;
            margin: 0 auto;
            color: #3A3A3B;
        }  
        .childCon {
            width: 1200px;
            margin: 0 auto;
        }
    }
</style>