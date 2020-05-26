<template>
  <div class="findItemIndexCon">
      <div class="topBg">
          <div class="shellTop">
              <div class="bigger">企业用工交易系统化管理平台</div>
          <div class="describe">万才网为企业,外包公司和新业态从业人员提供三方交互桥梁,帮助企业定制社保入税后灵活用工的合法合规使用方案,另有灵活用工管理,财税统筹,商业保险等服务,帮助企业…</div>
            </div>
        </div>
      <div class="limitWidth">
          <el-breadcrumb class="breadContainer" separator-class="el-icon-arrow-right">
              <span class="shitText">您的当前位置：</span>
              <el-breadcrumb-item @click.native="goHome" class="cursorOn">首页</el-breadcrumb-item>
              <el-breadcrumb-item>接任务</el-breadcrumb-item>
            </el-breadcrumb>
          <div class="radioArea">
              <el-form ref="findForm" :model="findForm" label-width="80px">
                  <el-form-item class="firstItem" label="预估总价">
                      <el-radio-group v-model="findForm.expectAmount" @change="item1Change">
                      <el-radio-button label="100">不限</el-radio-button>
                      <el-radio-button label="1">5千以下</el-radio-button>
                      <el-radio-button label="2">5千～1万</el-radio-button>
                      <el-radio-button label="3">1万～5万</el-radio-button>
                      <el-radio-button label="4">5万～10万</el-radio-button>
                      <el-radio-button label="5">10万以上</el-radio-button>
                    </el-radio-group>
                    </el-form-item>
                  <el-form-item class="secondItem" label="结算方式">
                      <el-radio-group v-model="findForm.settlementType" @change="item2Change">
                      <el-radio-button label="100">不限</el-radio-button>
                      <el-radio-button label="2">月结</el-radio-button>
                      <el-radio-button label="4">周结</el-radio-button>
                      <el-radio-button label="1">日结</el-radio-button>
                    </el-radio-group>
                    </el-form-item>
                  <el-form-item class="thirdItem" label="计价方式">
                      <el-radio-group v-model="findForm.valuationType" @change="item3Change">
                      <el-radio-button label="100">不限</el-radio-button>
                      <el-radio-button label="1">计时</el-radio-button>
                      <el-radio-button label="2">计量</el-radio-button>
                      <el-radio-button label="3">计时+计量</el-radio-button>
                    </el-radio-group>
                    </el-form-item>
                </el-form>
              <div class="listCon">
                  <div class="noListText" v-if="contentlist.length == 0">暂无内容</div>
                  <taskListsCommon v-else :listsArr="contentlist"></taskListsCommon>
                </div>
              <div class="paginationCon" v-if="total">
                  <el-pagination @current-change="handleCurrentChange" :current-page="currentPage"   :page-size="10"  layout="total, prev, pager, next, jumper"  :total="total">
                  </el-pagination>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
    import taskListsCommon from '~/components/taskListsCommon.vue'
export default {  
    scrollToTop: true,
    head () {
        return {
            title: '接任务',
        }
    },
    components:{
        taskListsCommon,
    },
    data(){
        return {
            findForm:{
                expectAmount:'',
                settlementType:'',
                valuationType:'',
            },
            contentlist:[],
            currentPage:1,
            total:0,
        }
    },
    mounted(){
        this.initList();
    },
    methods:{
        item1Change(){
            this.currentPage = 1;
            this.initList();
        },
        item2Change(){
            this.currentPage = 1;
            this.initList();
        },
        item3Change(){
            this.currentPage = 1;
            this.initList();
        },
        goHome(){
            this.$store.commit('SET_IS_WHITE',false);
            this.$router.push({path:'/'});  
        },
        initList(){
            let params = {
                pageNum:this.currentPage,
                pageSize:10,
                valuationType:this.findForm.valuationType == '100' ? '' : this.findForm.valuationType,
                settlementType:this.findForm.settlementType == '100' ? '' : this.findForm.settlementType,
            };
            switch( this.findForm.expectAmount ){
                case '1':
                    params.expectMoneyLowLimit = 0;
                    params.expectMoneyHighLimit = 5000;
                    break;
                case '2':
                    params.expectMoneyLowLimit = 5000;
                    params.expectMoneyHighLimit = 10000;
                    break;
                case '3':
                    params.expectMoneyLowLimit = 10000;
                    params.expectMoneyHighLimit = 50000;
                    break;
                case '4':
                    params.expectMoneyLowLimit = 50000;
                    params.expectMoneyHighLimit = 100000;
                    break;
                case '5':
                    params.expectMoneyLowLimit = 100000;
                    break;
                case '100':
                    break;
                case '':
                    break;
            }
            this.ApiLists.getaskMarketList(params).then(res=>{
                let { data,respCode } = res;
                if( respCode == 0 ){
                    if(data.list){
                        this.contentlist = data.list;
                        this.total = data.total;
                    }else{
                        this.contentlist = [];
                        this.total = 0;
                    }
                }else{                    
                    this.$message.error(res.errorMsg);
                }
            }).catch(err=>{
                console.log('err',err);
            })
        },
        handleCurrentChange(val){
            this.currentPage = val;
            this.initList();
        },
    }
}
</script>
<style lang="scss" scoped>
    .findItemIndexCon {
        .topBg {
            background-image: url(../../assets/img/findItemTopBg.png);
              background-size: cover;
              background-repeat: no-repeat;
              background-clip: border-box;
              background-position: center;
              height: 300px;
              text-align: center;
              padding-top: 80px;
            .shellTop {
                width: 1280px;
                margin: 0 auto;
            }
            .bigger {
                height: 42px;
                line-height: 42px;
                font-size: 42px;
                color: #fff;
                font-weight: 500;
                text-align: left;
                font-family:FZZhengHeiS-DB-GB;
                text-shadow:0px 12px 8px rgba(56,81,212,1);
            }
            .describe {
                margin-top: 26px;
                font-size: 18px;
                color: #D2D9ED;
                width: 493px;
                text-align: left;
            }
        }
        .limitWidth {
            width: 1290px;
            margin: 0 auto;
            padding-top: 30px;
            .shitText {
                float: left;
            }
            .breadContainer {
                margin-bottom: 22px;
            }
            .cursorOn {
                cursor: pointer;
            }
            .listCon {
                box-sizing: border-box;
                .noListText {
                    margin-top: 50px;
                    margin-bottom: 500px;
                    text-align: center;
                    font-size: 16px;
                }
            }
            .paginationCon {
                display: flex;
                justify-content: center;
                margin-bottom: 80px;
            }
        }
    }
</style>
<style lang="scss">
    .findItemIndexCon {
        $innerGreen:#4477FF;
        $innerYellow:#FAA700;
        $innerBlue:#2AC2A9;
        .radioArea {
            .el-radio-button__inner {
                border: 1px solid transparent;
                padding: 10px 32px;
                font-size: 16px;
                font-weight: normal;
            }
            .el-form-item__label {
                height: 30px;
                line-height: 30px;
                margin-top: 5px;
                color: #fff;
                font-size: 16px;
                text-align: center;
                padding: 0;
                position: relative;
                &:after {
                    height: 0;
                    width: 0;
                    content: '';
                    position: absolute;
                    right: -10px;
                    top: 10px;
                    border: 5px solid #fff;        
                    border-right-color: transparent;
                    border-top-color: transparent;
                    border-bottom-color: transparent;
                }
            }
            .el-form-item__content {
                margin-left: 100px !important;
            }
            .firstItem {
                .el-form-item__label {
                    background-color: $innerGreen;
                    &:after {
                        border-left-color: $innerGreen;
                    }
                }
                .el-radio-button__orig-radio:checked+.el-radio-button__inner {
                    background-color: $innerGreen;
                    box-shadow: -1px 0 0 0 $innerGreen;
                }
                .el-radio-button__inner {
                    &:hover {
                        color: #fff;
                        background-color: $innerGreen;
                        box-shadow: -1px 0 0 0 $innerGreen;
                    }
                }
            }
            .secondItem {
                .el-form-item__label {
                    background-color: $innerYellow;
                    &:after {
                        border-left-color: $innerYellow;
                    }
                }
                .el-radio-button__orig-radio:checked+.el-radio-button__inner {
                    background-color: $innerYellow;
                    box-shadow: -1px 0 0 0 $innerYellow;
                }
                .el-radio-button__inner {
                    &:hover {
                        color: #fff;
                        background-color: $innerYellow;
                        box-shadow: -1px 0 0 0 $innerYellow;
                    }
                }
            }
            .thirdItem {
                .el-form-item__label {
                    background-color: $innerBlue;
                    &:after {
                        border-left-color: $innerBlue;
                    }
                }
                .el-radio-button__orig-radio:checked+.el-radio-button__inner {
                    background-color: $innerBlue;
                    box-shadow: -1px 0 0 0 $innerBlue;
                }
                .el-radio-button__inner {
                    &:hover {
                        color: #fff;
                        background-color: $innerBlue;
                        box-shadow: -1px 0 0 0 $innerBlue;
                    }
                }
            }
        }
    }
</style>