<template>
  <div class="landingCon">
      <div class="imgCollection">
          <div class="part1 commonPart"></div>
          <div class="part2 commonPart"></div>
          <div class="part3 commonPart"></div>
          <div class="part4 commonPart"></div>
          <div class="part5 commonPart"></div>
        </div>
      <div class="fixItem">
          <div class="divideCon">
              <div class="divideItem"></div>
              <div class="divideItem">
                  <div class="fakeBtn" @click="popTrail"></div>
                  <div class="tagHere"></div>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
export default {
  layout:'empty',
  data () {
    return {
    }
  },
  head() {
    return {
      title: '万才网',
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: '万才网，万才科技，万才经理人，灵活用工，社保入税，临时用工，劳动力管理，劳动力管理系统，考勤系统，排班系统，智能排班，财税统筹，财税咨询，社保改革，人力资源管理系统，人力资源管理软件，员工商业保险。'
        },
        {
          hid: 'description',
          name: 'description',
          content: '万才网为企业，外包公司和新业态从业人员提供三方交互桥梁，帮助企业定制社保入税后灵活用工的合法合规使用方案，另有灵活用工管理，财税统筹，商业保险等服务，帮助企业降低用工风险，实现财税优化，真正做到降本增效，提升企业的生存空间'
        }
      ]
    }
  },
  mounted(){
  },
    methods:{
        popTrail(){
            this.$parent.$parent.dialogVisible = true;
        },
    },
}
</script>
<style lang="scss" scoped>
    .landingCon {
        position: relative;
        .imgCollection {
        }
        .commonPart {
            background-repeat: no-repeat;
            background-size:cover;
            background-position: center center;    
            max-width: 1920px;
            margin: 0 auto;
        }
        .part1 {
            height: 960px;
            background-image: url("../assets/img/landing/p1.png");
        }
        .part2 {
            height: 960px;
            background-image: url("../assets/img/landing/p2.png");
        }
        .part3 {
            height: 960px;
            background-image: url("../assets/img/landing/p3.png");
        }
        .part4 {
            height: 960px;
            background-image: url("../assets/img/landing/p4.png");
        }
        .part5 {
            height: 649px;
            background-image: url("../assets/img/landing/p5.png");
        }
        .fixItem {
            max-width: 1920px;
            margin: 0 auto;
            height: 120px;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-repeat: no-repeat;
            background-size:cover;
            background-position: center center;  
            background-image: url("../assets/img/landing/fixedbar.png");
            
            .divideCon {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-content: center;
                align-items: center;
                .divideItem {
                    position: relative;
                    width: 50%;
                    height: 100%;
                }
                .fakeBtn {
                    position: absolute;
                    left: 360px;
                    top: 30px;
                    height: 60px;
                    width: 260px;
                    cursor: pointer;
                }
                .tagHere {
                    height: 43px;
                    width: 84px;
                    background-repeat: no-repeat;
                    background-size:cover;
                    background-position: center center; 
                    background-image: url("../assets/img/landing/tag.png");
                    position: absolute;
                    left: 540px;
                    top: 14px;
                    animation-name: scaleLoop;
                    animation-duration: 0.7s;
                    animation-iteration-count: infinite;
                }
            }
        }
        @keyframes scaleLoop {
            from {
                transform: scale(1)
            }
            50% {
                transform: scale(1.1)
            }
            to {
                transform: scale(1)
            }
        }
        
    }
</style>