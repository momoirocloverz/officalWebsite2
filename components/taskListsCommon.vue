<template>
    <div class="taskListsCommonCon">
        <template v-for="(item,index) in currentArray">
            <div :key="index" class="itemSelf">
                <div class="flexSet flexBetween resetHere1">
                    <div class="flexSet flexStart ">
                        <div class="taskNameStyle">{{item.taskName}}</div>
                        <div class="settleText" :class="`setBgColor${item.settlementType}`">{{settlementMap[item.settlementType]}}</div>
                    </div>
                    <a href="http://www.10000rc.com/2.0/cus/index.html#/taskManage/takeTask" target="_blank"><div class="jumpLink" >我要抢单</div></a>
                </div>
                <div class="flexSet longTextCon">
                    <div class="setWidth1"><span>预估总价：</span><span class="amountYellow">{{item.expectMoney}}元</span></div>
                    <div class="setWidth2"><span>开始时间：{{ timeFormat1(item.startTime) }}</span></div>
                    <div class="setWidth3"><span>结束时间：{{ timeFormat1(item.endTime) }}</span></div>
                    <div class="setWidth4"><span>计价方式：{{ valuationMap[item.valuationType] }}</span></div>
                    <div class="setWidth5 " v-show="item.parseRes.length<15"><span>单价：{{ item.parseRes }}</span></div>
                </div>
                <div class="dynamicCon flexSet flexStart">
                    <div class="secondPrice hidText" v-show="item.parseRes.length>15">单价：{{item.parseRes}}</div>
                    <div class="onlyOneText">预估总工量：需处理{{item.expectPieceSize}}件单</div>    
                </div>                            
                <div class="roundBgCon">
                    <div class="flexSet setStyle1">
                        <div class="setStyle1Part1">上班时间：{{formatTime2(item.workStartTime)}}</div>
                        <div class="setStyle1Part2">下班时间：{{ formatTime3(item) }}</div>
                        <div class="setStyle1Part3 hidText">打卡地址：{{item.workingPlace}}</div>
                    </div>
                    <div class="flexSet setStyle2">
                        <div class="setStyle2Part1">年龄要求：{{item.ageLowerLimit}}岁～{{item.ageUpperLimit}}周岁</div>
                        <div class="setStyle2Part2 hidText">工种要求：{{item.industryList}}</div>
                        <div class="setStyle2Part3 hidText">其他要求：{{item.otherDemand || '暂无'}}</div>
                    </div>
                </div>                          
            </div>
        </template>
    </div>
</template>
<script>
export default {
    name: 'taskListsCommon',
    props: {
        listsArr: {
            type: Array,
            default: [],
        },
    },
    data () {
        return {
            settlementMap:{
                2:'月结',
                4:'周结',
                1:'日结',
            },
            valuationMap:{
                1:'计时',
                2:'计量',
                3:'计量',
                4:'计量',
                5:'计时+计量',
                6:'计时+计量',
                7:'计时+计量',
                8:'计时+计量',
            },
            currentArray:[],
        }
    },
    mounted(){
        this.parseArray();
    },
    methods: {
        parseArray(){
            if( this.listsArr.length ){
                this.listsArr.forEach(ele=>{
                   ele.parseRes = this.GlobalPriceFilter.priceFilter(ele.price); 
                });
                this.currentArray = this.listsArr;
            }
        },
        timeFormat1(val){
            if( val ){
                return this.Dayjs(val).format("YYYY-MM-DD HH:mm")
            }else{
                return '永久';
            }
        },
        formatTime2(val){
            if( val ){
                return val.slice(0,5);
            }
        },
        formatTime3(item){
            if( item.endWorkType == 1 ){
                return `当日${item.workEndTime.slice(0,5)}`;
            }
            if( item.endWorkType == 2 ){
                return `次日${item.workEndTime.slice(0,5)}`;
            }
        },
    },
}
</script>
<style lang="scss" scoped>
    $innerGreen:#4477FF;
    $innerYellow:#FAA700;
    $innerBlue:#2AC2A9;
    .secondPrice {
        margin-right: 40px;
        max-width: 880px;
    }
    .hidText {
        white-space:nowrap;
        text-overflow:ellipsis; 
        -o-text-overflow:ellipsis; 
        overflow:hidden;
    }
    .dynamicCon {
        font-size: 16px;
        margin-top: 10px;
    }
    .setWidth1 {
        font-size: 16px;
        height: 16px;
        line-height: 16px;
        max-width: 152px;
        margin-right: 40px;
    }
    .setWidth2 {
        font-size: 16px;
        height: 16px;
        line-height: 16px;
        width: 220px;
        margin-right: 35px;
    }
    .setWidth3 {
        font-size: 16px;
        height: 16px;
        line-height: 16px;
        max-width: 220px;
        margin-right: 40px;
    }
    .setWidth4 {
        height: 16px;
        font-size: 16px;
        line-height: 16px;
        max-width: 170px;
        margin-right: 35px;
    }
    .setWidth5 {
        height: 16px;
        font-size: 16px;
        line-height: 16px;
        width: 220px;
    }
    .taskListsCommonCon {
        padding-top: 20px;
        padding-bottom: 20px;
        box-sizing: border-box;
        .amountYellow {
            color: $innerYellow;
        }
        .flexSet {
            display: flex;
            align-content: center;
            align-items: center;
        }
        .flexBetween {
            justify-content: space-between;
        }
        .flexStart {
            justify-content: flex-start;
        }
        .resetHere1 {
            align-items: flex-start;
        }
        .itemSelf {
            box-sizing: border-box;
            padding: 18px 24px;
            height:240px;
            margin-bottom: 40px;
            box-shadow:0px 0px 32px rgba(170,170,170,0.2);
            .setStyle1 {
                font-size: 18px;
                line-height: 18px;                
                .setStyle1Part1 {
                    margin-top: 22px;
                    width: 210px;
                    margin-bottom: 22px;
                }
                .setStyle1Part2 {
                    margin-left: 80px;
                    margin-right: 80px;
                    width: 240px;
                }
                .setStyle1Part3 {
                    width: 440px;
                }
                
            }
            .setStyle2 {
                font-size: 18px;
                line-height: 18px;                
                .setStyle2Part1 {
                    width: 210px;
                }
                .setStyle2Part2 {
                    margin-left: 80px;
                    margin-right: 80px;
                    width: 240px;
                }
                .setStyle2Part3 {
                    width: 440px;
                }
                
            }
              .longTextCon {
                    margin-top: 6px;
                    font-size: 16px;
                    margin-bottom: 6px;
                }
                .onlyOneText {
                    line-height: 16px;
                    height: 16px;    
                }
                .roundBgCon {
                    margin-top: 12px;
                    position: relative;
                    height: 100px;
                    background-color: #F4F8FF;
                    padding-left: 110px;
                    box-sizing: border-box;
                    &:before {
                        position: absolute;
                        content: '人员要求';
                        z-index: 2;
                        color: #fff;
                        left: 10px;
                        top: 13px;
                        width: 20px;
                        font-size: 16px;
                        line-height: 1.2;
                    }
                    &:after {
                        position: absolute;
                        content: '';
                        top: 0;
                        left: 0;
                        border-top-right-radius: 50px;
                        border-bottom-right-radius: 50px;
                        height: 0;
                        width: 0;
                        border: 50px solid $innerGreen;
                        border-left: none;
                    }
                }
            .taskNameStyle {
                color:#393E42;
                font-size: 26px;
                height: 26px;
                line-height: 26px;
            }
            .settleText {
                width: 60px;
                height: 26px;
                text-align: center;
                font-size: 16px;
                line-height: 26px;
                position: relative;
                color: #fff;
                margin-left: 44px;
                &:after {
                    height: 0;
                    width: 0;
                    content: '';
                    position: absolute;
                    left: -10px;
                    top: 8px;
                    border: 5px solid #fff;        
                    border-left-color: transparent;
                    border-top-color: transparent;
                    border-bottom-color: transparent;
                }    
            }
            .setBgColor1 {
                background-color: $innerGreen;
                &:after {
                    border-right-color: $innerGreen;
                }
            }
            .setBgColor2 {
                background-color: $innerYellow;
                &:after {
                    border-right-color: $innerYellow;
                }
            }
            .setBgColor4 {
                background-color: $innerBlue;
                &:after {
                    border-right-color: $innerBlue;
                }
            }   
            .jumpLink {
                width: 115px;
                height: 40px;
                line-height: 40px;
                background-color: $innerGreen;
                text-align: center;
                color: #fff;
                font-size: 18px;
                border-radius: 4px;
            }                      
        }
    }
</style>