<template>
  <div class="aboutUsSubIndex">
      <div class="limitWidth">
          <div class="headText">关于我们</div>
          <div class="textDetails">万才网（万才科技（杭州）有限公司）创立于2015年，是国内先进的新业态从业人员用工交易管理平台，通过互联网信息技术的不断创新和运用，为国内新业态从业人员用工市场的灵活用工、合规用工、财税统筹、优化管理等痛点提供多类型解决方案，并结合用户群体实际情况，提供更细化、更专业的服务，我们希望用专注的精神和高品质的服务成为国内第一新业态从业人员众创众包平台。</div>
          <div class="videoCon">
              <video id="videoPlay" poster="@/assets/img/video_cover.png" controls loop="loop" x-webkit-airplay="true" webkit-playsinline="true">
                <source src="@/assets/video/1080p.mp4" type="video/mp4">
                </video>
            </div>
          <div class="thirdPart">
              <div class="companyName">联系我们</div>
              <div class="mapContainer">
                  <div class="mapTitle">
                      <div>
                          <template v-for="(item,index) in addressArr">
                              <div class="addressItem">
                              <img class="fourIcon" :src="item.src">
                                <span>{{item.desp}}</span>
                                  </div>
                            </template>
                    </div>
                    <div>
                        <img  src="@/assets/img/经理人俱乐部.png">
                        <div>扫一扫加关注</div>
                    </div>
                    </div>
                  <div class="map-box" id="container"></div>
                </div>
            </div>
            <div class="authCon">
                <div class="companyName">资质认证</div>
                <div class="card1ListGroup">
                    <template v-for="(item,index) in cardList1">
                        <div class="cardItemCon">
                            <img :src="item.src">
                            <div class="imgDesp">{{ item.name }}</div>
                        </div>
                    </template>
                </div>
                <div class="card2ListGroup">
                    <template v-for="(item,index) in cardList2">
                        <div class="cardItemCon">
                            <img :src="item.src">
                            <div class="imgDesp">{{ item.name }}</div>
                        </div>
                    </template>
                </div>
                <div class="card3ListGroup">
                    <template v-for="(item,index) in cardList3">
                        <div class="cardItemCon">
                            <div class="spBlock">
                                <img :class="{spImg:index == (cardList3.length - 1)}" :src="item.src">
                            </div>
                            <div class="imgDesp">{{ item.name }}</div>
                        </div>
                    </template>
                </div>
            </div>
        </div>      
  </div>
</template>
<script>
export default {
  head () {
    return {
      title: '关于我们',
    }
  },
    mounted(){
        this.initMap();
    },
    data(){
        return {
            addressArr:[
//                {src:require('@/assets/img/telephone_dark.png'),desp:''},
                {src:require('@/assets/img/email_dark.png'),desp:'maybe@10000rc.com'},
                {src:require('@/assets/img/wechat_dark.png'),desp:'万才经理人俱乐部'},
                {src:require('@/assets/img/location_dark.png'),desp:'杭州市高德置地广场二期2号楼2单元20层'}   
            ],
            cardList1:[
                {src:require('@/assets/img/qua/555@2x.png'),name:'万才经理人软著'},
                {src:require('@/assets/img/qua/666@2x.png'),name:'万才经理人软著'},
                {src:require('@/assets/img/qua/777@2x.png'),name:'万才网平台后台软著'},
                {src:require('@/assets/img/qua/888.png'),name:'万才企业版软著'},
            ],
            cardList2:[
                {src:require('@/assets/img/qua/999@2x.png'),name:'万才网客户后台软著'},
                {src:require('@/assets/img/qua/222.png'),name:'万才个人版软著'},
            ],            
            cardList3:[
                {src:require('@/assets/img/qua/1212@2x.png'),name:'增值电信业务经营许可证'},
                {src:require('@/assets/img/qua/3.3@2x.png'),name:'增值电信业务经营许可证'},
                {src:require('@/assets/img/qua/444@2x.png'),name:'国际顶级域名注册证书'},
                {src:require('@/assets/img/qua/fuck1.png'),name:'人力资源服务许可证'}
            ],
            
            
            
        }
    },
    methods:{
         initMap(){
            let map = new BMap.Map("container"); 
            let point = new BMap.Point(120.214125, 30.249577); // 创建点坐标  
            map.centerAndZoom(point, 15);
            map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
            let marker = new BMap.Marker(point); // 创建标注    
            map.addOverlay(marker); // 将标注添加到地图中 
            let circle = new BMap.Circle(point, 250, {
                fillColor: "#1892ff",
                strokeWeight: 1,
                fillOpacity: 0.3,
                strokeOpacity: 0.3,
                enableEditing: false
            });
            map.addOverlay(circle);
        }
    }
}
</script>

<style lang="scss" scoped>
    .aboutUsSubIndex {
        background-color: #fff;
        padding-top: 80px;
        padding-bottom: 120px;
        box-sizing: border-box;
        text-align: center;       
        #container {
            width: 960px;
            height: 480px;
            margin-top: 20px;
        }
        .authCon {
            img{
                transform: scale(1);
                transition:.3s;
                position:relative;
                z-index: 1;
            }
            img:hover{
                transform: scale(2);
                transition:.3s;
                z-index:3;
            }
            .card1ListGroup {
                display: flex;
                justify-content: space-between;
                align-content: center;
                align-items: center;
                margin-bottom: 40px;
                img{
                    width: 224px;
                    height: 300px;
                    margin-bottom: 20px;
                }
            }
            .card2ListGroup {
                display: flex;
                justify-content:flex-start;
                align-content: center;
                align-items: center;
                margin-bottom: 40px;
                img{
                    width: 224px;
                    height: 300px;
                    margin-bottom: 20px;
                }
                .cardItemCon {
                    width: 224px;
                    margin-right: 21px;
                }
            }
            .imgDesp {
                font-size: 16px;
                color: #333;
            }
            .card3ListGroup {
                display: flex;
                justify-content: space-between;
                align-content: center;
                align-items: center;
                margin-bottom: 40px;
                img{
                    width: 224px;
                    height: 300px;
                }
                .spImg {
                    width: 224px;
                    height: 160px;
                }
                 .spBlock {
                    height: 300px;
                     margin-bottom: 20px;
                     display: flex;
                     justify-content: center;
                     align-content: center;
                     align-items: center;
                }
            }
        }
         .ul-2{
             li{
                 width: 25%;
                 img{
                     width: 224px;
                     height: 300px;
                 }
             }
        }
        .companyName {
                color: #333;
                font-size: 36px;
                line-height: 36px;
                height: 36px;
                font-weight: 600;
                margin-bottom: 80px;
            }
        .thirdPart {
            margin: 0 auto;
            margin-top: 120px;
            margin-bottom: 120px;
                .mapTitle {
                    display: flex;
                    justify-content:space-between;
                    .addressItem {
                        display: flex;
                        justify-content:flex-start;
                        align-content:center;
                        align-items: center;
                        margin-bottom: 27px;
                        span {
                            height:20px;
                            font-size:20px;
                            font-weight:400;
                            color:#333;
                            line-height:20px;
                        }
                    }
                    .fourIcon {
                        width: 32px;
                        height: 32px;
                        margin-right: 10px;
                    }
/*                    img {*/
/*
                        height: 22px;
                        width: 22px;
                        margin-right: 20px;
*/
/*                    }*/
                    .mapAddressText {
                        font-size: 18px;
                        color: #3A3A3B;
                    }
                }
                
                
            }
        .limitWidth {
            width: 960px;
            margin: 0 auto;
            .headText {
                font-size: 36px;
                color: #333;
                line-height: 36px;
                height: 36px;
                font-weight: 600;
                margin-bottom: 40px;
            }
            .textDetails {
                text-align: left;                
                color: #666;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                margin-bottom: 40px;
            }
            .videoCon {
                height: 540px;
            }
            #videoPlay{
                height: 540px;
                width: 960px;
                outline: none;
            }
            .bottomCon {
                display: flex;
                justify-content: space-between;
                align-content: center;
                align-items: center;
            }
            .fourBlock {
                text-align: left;
                width: 194px;
                height: 130px;
                border: 1px solid #d9d9d9;
                box-sizing: border-box;
                padding-left: 25px;
                padding-top: 37px;
            }
            .moneyColor {
                font-size: 24px;
                color: #4E8CEE;
                height: 24px;
                margin-bottom: 10px;
                line-height: 24px;
            }
            .moneyDescribe {
                font-size: 17px;
                color: #3A3A3B;
                height: 17px;
                line-height: 17px;
            }        
        }
    }
</style>
