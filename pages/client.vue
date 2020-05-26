<template>
  <div class="clientMasterCon">
    <div class="masterPart">
      <div class="gradientPart">
          <div class="firstLine" @click="goTrail"></div>
        </div>
    </div>
    <div class="childMaster">
      <nuxt-child></nuxt-child>
    </div>
      <FootGo/>
  </div>
</template>
<script>
    import FootGo from '@/components/footgo';
  export default {
      scrollToTop: true,
      components:{FootGo},
    head() {
      return {
        title: '客户案例',
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
      }
    },
    methods: {
        goTrail(item){ 
            this.$parent.$parent.dialogVisible = true;
        }
    },
  }
</script>
<style lang="scss" scoped>
  .clientMasterCon {
    .gradientPart {
      background-image: url(../assets/img/partner_banner.png);
      background-size: cover;
      background-repeat: no-repeat;
      background-clip: border-box;
      background-position: center;
      height: 400px;
      text-align: center;
      padding-top: 260px;
    }
    .firstLine {
        width: 200px;
        height: 60px;
        margin: 0 auto;
        cursor: pointer;
    }
  }
</style>