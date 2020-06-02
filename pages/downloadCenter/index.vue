<template>
  <div class="managerAppCon">     
        <div class="limitWidth">
            <div class="contentCon">
                <div class="imgCon"><img class="bigImg" src="@/assets/img/company_ui.png"></div>
                
                <div class="rightSide">
                    <div class="title">万才企业版</div>
                    <div class="secondLine">适用人群：劳动密集型企业、外包公司下属的班务经理、一线管理人员</div>
                    <div class="bottomCon">
                        <div class="switchBtnCon">
                            <div class="ios mobileCommon" :class="{mobileCommonActive:!androidActiveNow}" @click="changeActive">iOS版下载</div>
                            <div class="android mobileCommon" :class="{mobileCommonActive:androidActiveNow}" @click="changeActive">Android版下载</div>
                        </div>
                    <div class="qrcodeSwitchCon">
                        <div class="qrcodeImgSwitchCon" >
                            <img v-if="androidActiveNow" :src="androidLink">
                            <img v-else src="@/assets/img/iosCompany.png">
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
export default {
    head () {
        return {
            title: '万才企业版-下载中心',
        }
    },
    data(){
        return {
            androidActiveNow:false,
            androidLink:require('../../assets/img/footerComp.png'),
        }
    },
    mounted(){
        this.getLink();
    },
    methods:{
        getLink(){
            this.ApiLists.getAndroidLinks(1).then(res=>{
                let { respCode,data } = res;
                if( respCode == 0 ){
                    var opts = {
                        errorCorrectionLevel: 'H',
                        type: 'image/jpeg',
                        quality: 0.9,
                        margin: 1,
                        version:1
                    }
                    this.QRCode.toDataURL(data.downloadUrl, opts,(err, url)=> {
                        if (err) throw err
                        this.androidLink = url;
                    })
                }
            }).catch(err=>{
                console.log( 'err',err );
            })
        },
        changeActive(){
            this.androidActiveNow = !this.androidActiveNow ;
        },
    },
}
</script>
<style lang="scss" scoped>  
    .managerAppCon {
        .limitWidth {
            width: 1040px;
            margin: 0 auto;
            padding-top: 84px;
            padding-bottom: 120px;
        }
        .contentCon {
            display: flex;
            justify-content:center;
            .imgCon {
                width: 50%;
                display: flex;
                justify-content: flex-end;
            }
            .bigImg {
                width: 400px;
                height: 723px;
                margin-right: 120px;
            }
            .rightSide {
                width: 50%;
                height: 460px;
                padding-top: 20px;
            }
            .title {
                font-weight: 600;
                font-size: 28px;
                color: #333;
                height: 28px;
                line-height: 28px;
            }
            .secondLine {
                color: #666;
                font-size: 16px;
                margin-top: 44px;
                height: 16px;
                line-height: 16px;
            }
            .bottomCon {
                display: flex;
                justify-content:flex-start;
                margin-top: 40px;
            }
            .switchBtnCon {
                margin-right: 80px;
            }
            .mobileCommon {
                height: 56px;
                width: 200px;
                text-align: center;
                line-height: 56px;
                box-sizing: border-box;
                color: #666;
                font-size: 20px;
                cursor: pointer;
                font-weight: 400;
                background:rgba(245,245,245,1);
                border-radius:30px;
            }
            .mobileCommonActive {
                font-size: 20px;
                font-weight: 600;
                color: #fff;
                height: 56px;
                width: 200px;
                background:linear-gradient(90deg,rgba(98,175,255,1) 0%,rgba(51,119,255,1) 100%);
                box-shadow:0px 5px 20px 0px rgba(51,119,255,0.3);
                border-radius:30px;
            }
            .android {
            }
            .ios {
                margin-bottom: 40px;
            }
            .qrcodeSwitchCon {
                display: flex;
                justify-content: flex-start;
                align-content: center;
                align-items: center;
                .qrcodeImgSwitchCon {
                    img {
                        width: 152px;
                        height: 152px;
                    }
                }
            }
        }
    }
</style>