<template>
  <div class="newsIndexCon">
      <div class="limitWidth">
          <el-breadcrumb class="breadContainer" separator-class="el-icon-arrow-right">
              <el-breadcrumb-item @click.native="goHome" class="cursorOn">首页</el-breadcrumb-item>
              <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
              <el-breadcrumb-item>{{matchText[activeIndex]}}</el-breadcrumb-item>
            </el-breadcrumb>
          <div class="contentCon">
              <div class="leftContent">
                  <div class="switchArea">
                      <div class="firstArea  areaCommon" :class="{areaActive:activeIndex == 1 }" @click="setIndex(1)">公司新闻</div>
                      <div class="secondArea areaCommon " :class="{areaActive:activeIndex == 2 }" @click="setIndex(2)">媒体报道</div>
<!--                      <div class="thirdArea areaCommon" :class="{areaActive:activeIndex == 3 }" @click="setIndex(3)">常见问题</div>-->
                    </div>
                  <div class="articleListContainer">
                      <div v-if="articleList.length">
                          <template v-for="(item,index) in articleList">
                              <div class="itemCon" :key="index" @click="goToDetail(item.id)">
                                  <div class="bgImgCon" :style="{backgroundImage:'url('+ item.listPic  +')'}"></div>
                                  <div class="itemRightCon">
                                      <div class="itemTitle">{{item.title}}</div>
                                  <div class="itemDescription">{{item.description}}</div>
                                      <div class="bottomCon">
                                          <div class="timeCon">{{item.createdAt.split(' ')[0]}}</div>
                                          <div>{{item.source}}</div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                        <div v-else>
                            <div class="blankContent">暂无内容</div>
                        </div>
                    </div>
                    <div class="paginationCon" v-if="total">
                        <el-pagination @current-change="handleCurrentChange" :current-page="currentPage"   :page-size="10"  layout="total, prev, pager, next, jumper"  :total="total">
                        </el-pagination>
                    </div>
                </div>
              <div class="rightContent">
                  <newsCommonRight :hotsArr="hotsArr"></newsCommonRight>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
export default {  
    scrollToTop: true,
  head () {
    return {
      title: '新闻资讯',
    }
  },
    data(){
        return {
            activeIndex:1,
            articleList:[],
            currentPage:1,
            total:0,
            hotsArr:[],
            matchText:{
                1:'公司新闻',
                2:'媒体报道',
                3:'常见问题',
            },
        }
    },
    created(){
        this.activeIndex = this.$route.query.type || 1;
    },
    mounted(){
        this.initList();
    },
    methods:{
        goHome(){
            this.$store.commit('SET_IS_WHITE',false);
            this.$router.push({path:'/'});            
        },
        setIndex(index){
            this.currentPage = 1;
            this.activeIndex = index;
            let {href} = this.$router.resolve({path:'/newsInfo',query:{type:this.activeIndex,isWhite:1} });
            this.$store.commit('SET_IS_WHITE',true);
            window.location.href= href;
        },
        initList(){
            let params1 = {
                pageNum:this.currentPage,
                pageSize:10,
                type:this.activeIndex,
                status:1,
            };
            this.ApiLists.getInfomationByTitle(params1).then(res=>{
                let { data,respCode } = res;
                if( respCode == 0 ){
                    if(data.list){
                        this.articleList = data.list;
                        this.total = data.total;
                    }else{
                        this.articleList = [];
                        this.total = 0;
                    }
                }
            }).catch(err=>{
                console.log('err',err);
            })
            this.ApiLists.getHotArticleList().then(res=>{
                let { data,respCode } = res;
                if( respCode == 0 ){
                    if(data.length > 5){
                        this.hotsArr = data.splice(0,5);
                    }
                }else{
                    this.hotsArr = [];
                }
            }).catch(err=>{
               console.log('err',err); 
            }); 
        },
        goToDetail(id){
            let data = {
                id:id,
            };
            this.ApiLists.addReadInfomation(data).then(res=>{                
                let { respCode } = res;
                if( respCode === 0 ){
                    this.$router.push({ path:'/newsInfo/detail',query:{id,isWhite:1} });
                    this.$store.commit('SET_IS_WHITE',true);
                }
            }).catch(err=>{
                console.log('err',err);
            });
        },
        handleCurrentChange(val){
            this.currentPage = val;
            this.initList();
        },
    }
}
</script>
<style lang="scss" scoped>
    .newsIndexCon {
        background-color: #F8F8F8;
        padding-top: 30px;
        padding-bottom: 77px;
        .blankContent {
            font-size: 16px;
            text-align: center;
            margin-bottom: 50px;
        }
        .limitWidth {
            width: 1200px;
            margin: 0 auto;
        }
        .cursorOn {
            cursor: pointer;
        }
        .hotsHeader {            
            color: #333;
            position: relative;
            font-size: 14px;
            height: 14px;
            line-height: 14px;
            left: 18px;
            margin-bottom: 24px;
            &::before {
                position: absolute;
                width: 4px;
                height: 16px;
                left: -18px;
                content: '';
                background-color: #036DEC;
            }
        }
        .hotsCon {
            background-color:#fff;
            width: 300px;
            height: 230px;
            margin-bottom: 16px;
            box-sizing: border-box;
            padding-left: 22px;
            padding-top: 22px;
            padding-right: 22px;
            li {
                font-size: 14px;
                cursor: pointer;
                height: 14px;
                line-height: 14px;
                margin-bottom: 18px;
                color: #333;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
        .qrcodeCon {
            background-color:#fff;
            width: 300px;
            height: 408px;
            box-sizing: border-box;
            padding-left: 20px;
            padding-top: 20px;
            img {
                width: 260px;
            }
        }
        .breadContainer {
            margin-bottom: 22px;
        }
        .paginationCon {
            display: flex;
            justify-content: center;
            margin-bottom: 80px;
        }
        .contentCon {
            display: flex;
            justify-content: space-between;
            align-content: center;
            align-items: flex-start;
            .leftContent {
                width: 884px;
                padding-top: 30px;
                background-color: #fff;
                .switchArea {
                    height: 50px;
                    border-bottom: 1px solid #F1F1F2;
                    display: flex;
                    box-sizing: border-box;
                    justify-content: flex-start;
                    align-content: center;
                    align-items: center;
                    color: #333;
                    font-size: 15px;
                    padding-left: 54px;
                    color: #999;
                    .areaCommon {
                        width:60px;
                        height: 50px;
                        line-height: 52px;
                        position: relative;
                        cursor: pointer;
                        &:hover {
                            color: #333 !important;
                        }
                        &::after {
                            content: "";
                            height: 2px;
                            background-color: #fff;
                            width: 36px;
                            position: absolute;
                            bottom: 1px;
                            left: 12px;
                        }
                    }
                    .firstArea {
                    }
                    .secondArea {
                        margin-left: 68px;
                        margin-right: 68px;
                    }
                    .thirdArea {
                    }
                    .areaActive {
                        color: #333 !important;
                        &::after {
                            background-color: #209DFD !important;
                        }
                    }
                }
            }
            .rightContent {
                width: 300px;
            }
            .articleListContainer {
                padding:50px 54px 0 54px;
                box-sizing: border-box;
            }
            .itemCon {
                cursor: pointer;
                display: flex;
                justify-content: flex-start;
                align-content: center;
                align-items:flex-start;
                margin-bottom: 54px;
                padding-bottom: 52px;
                border-bottom: 1px solid #F1F1F2;
                .bgImgCon {
                    width: 220px;
                    height: 140px;
                    margin-right: 40px;
                    background-position: center;
                    background-size:cover;
                }
                .itemTitle {
                    color: #333;
                    font-size: 18px;
                    height: 18px;
                    margin-top: 6px;
                    line-height: 18px;
                    width: 502px;
                    margin-bottom: 18px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .itemDescription {
                    display: -webkit-box;
                    height: 48px; 
                    color: #999;
                    font-size: 12px;
                    line-height: 24px; 
                    -webkit-line-clamp: 2; 
                    -webkit-box-orient: vertical; 
                    overflow: hidden;
                    margin-bottom: 24px;
                }
                .itemRightCon {
                    position: relative;
                    height: 138px;
                    width: 502px;
                }
                .bottomCon {
                    position: absolute;
                    bottom: 0;
                    color: #999;
                    font-size: 12px;
                    display: flex;
                    justify-content: flex-start;
                    align-content: center;
                    align-items: center;
                    .timeCon {
                        margin-right: 37px;
                    }
                }
            }
        }
    }
</style>
