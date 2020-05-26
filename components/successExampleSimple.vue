<template>
  <div class="successExampleSimpleCon">
      <div class="successTitle">成功案例</div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
                
                <template v-for="(item,index) in companyArr">
                
                
                <div class="swiper-slide">
                    <div class=" part">
                     <div class=" partTop ">
                         <div class="partTopLeft">
                             <div class="circleLogo">
                                 <div class="textLogo" v-if="!item.src">{{ item.short }}</div>
                                 <img v-else class="companyLogo" :src="item.src" >
                            </div>
                             <div class="fullName">{{item.name}}</div>
                            </div>
                         <div class=" partTopRight">
                             
                             <div class="subFlex subFirstFlex">
                                 <div class="titleText">公司简介：</div>
                                 <div class="describe">{{item.first}}</div>
                                </div>
                             <div  class="subFlex subSecFlex">
                                 <div class="titleText">存在痛点：</div>
                                 <div class="describe">{{item.second}}</div>
                                </div>
                             <div class="subFlex subThirdFlex">
                                 <div class="titleText">解决方案：</div>
                                 <div class="describe">{{item.third}}</div>
                                </div>
                            </div>
                        </div>
                     <div class="part1Bottom partBottom flex">
                         <template v-for="(subitem,subindex) in item.imgArr">
                             <div :key="subindex" class="imgThumb" :style="{backgroundImage:'url('+ subitem.img  +')'}" @click="pickThisPic(subitem,subindex)"></div>
                        </template>
                        </div>
                    </div>
                </div>
                </template>
            </div>
            <div class="swiper-pagination"></div>            
        </div>
  </div>
</template>
<script>
  export default {
      props:{
          companyArr:Array,
      },
    data(){
      return {
          swiperBridge:null,
          imgArr1:[],
      }
    },
    mounted(){
        this.initSwiper();
    },
    methods: {   
        initSwiper(){
            this.swiperBridge = new Swiper ('.swiper-container', {
                direction: 'horizontal', 
                loop: false, 
                watchOverflow: true,
//                autoplay:true,
//                pagination: {
//                  el: '.swiper-pagination',
//                },
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
    }
  }
</script>
<style lang="scss" scoped>
    .flex {
        display: flex;
        align-content: center;
        align-items: flex-start;
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
    .companyLogo {
        width: 60px;
        height: 60px;
    }
    .titleText {
        font-size: 16px;
        color: #333;
        width: 80px;
    }
    .subFlex {
        display: flex;
        justify-content: flex-start;
        align-content: center;
        align-items: flex-start;
    }
    .subFirstFlex {
        margin-bottom: 16px;
    }
    .subSecFlex {
        margin-bottom: 16px;
    }
    .subThirdFlex {
        margin-bottom: 36px;
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
        font-size: 16px;
        line-height: 24px;
        color: #666;
        width: 960px;
    }
    .successExampleSimpleCon {
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
            padding:80px;
            padding-top: 52px;
            .partTop {
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
                .partTopRight {
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
    }
</style>