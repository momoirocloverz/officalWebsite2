<template>
  <div class="articleDetailCon">  
      <div class="limitWidth">
          <el-breadcrumb class="breadContainer" separator-class="el-icon-arrow-right">
              <el-breadcrumb-item @click.native="goHome" class="cursorOn">首页</el-breadcrumb-item>
              <el-breadcrumb-item class="cursorOn" @click.native="goToNewsHome">新闻资讯</el-breadcrumb-item>
              <el-breadcrumb-item class="cursorOn" @click.native="goToNewsSub">{{matchText[articleContent.type]}}</el-breadcrumb-item>
              <el-breadcrumb-item>{{ articleContent.title }}</el-breadcrumb-item>
            </el-breadcrumb>
          <div class="contentCon">
              <div class="leftContent">
                  <div class="articleCon ">
                      <div class="articleTitle">{{ articleContent.title }}</div>
                      <div class="articleTime">
                          <div class="timeText">{{articleContent.createdAt}}</div>
                          <div>{{articleContent.source}}</div>
                        </div>
                      <div class="ql-container">
                          <div class="ql-editor">
                              <div class="articleText " v-html="articleContent.content"></div>      
                            </div>
                        </div>
                      <div class="pagCon">
                          <div class="pre" v-if="articleContent.preId" @click="goTo(articleContent.preId)">上一篇:{{articleContent.preTitle}}</div>
                          <div class="next" v-if="articleContent.nextId" @click="goTo(articleContent.nextId)">下一篇:{{articleContent.nextTitle}}</div>
                        </div>
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
      title: '文章详情',
    }
  },
    data(){
        return {
            hotsArr:[],
            articleContent:{
            },
            matchText:{
                    1:'公司新闻',
                    2:'媒体报道',
                    3:'常见问题',
                },
        }
    },
    mounted(){
        this.getHots();
        this.getArticleContent();
    },
    methods:{
        goHome(){
            this.$store.commit('SET_IS_WHITE',false);
            this.$router.push({path:'/'});            
        },
        goToNewsHome(){
            this.$router.push({path:'/newsInfo',query:{isWhite:1} });
            this.$store.commit('SET_IS_WHITE',true);
        },
        goToNewsSub(){            
            this.$router.push({path:'/newsInfo',query:{type:this.articleContent.type,isWhite:1} });
            this.$store.commit('SET_IS_WHITE',true);
        },
        getArticleContent(){
            console.log( this.$route.query );
            let params = {
                id:this.$route.query.id
            };
            this.ApiLists.getDetailPortal(params).then(res=>{
                let { data,respCode } = res;
                if( respCode == 0 ){
                    console.log(data);
                    this.articleContent = data;
                    this.articleContent.createdAt = data.createdAt.split(' ')[0];                    
                }else{
                    this.articleContent = {
                    };
                }
            }).catch(err=>{
               console.log('err',err); 
            }); 
        },
        goTo(id){
            let data = {
                id:id,
            };
            this.ApiLists.addReadInfomation(data).then(res=>{                
                let { respCode } = res;
                if( respCode === 0 ){
                    console.log('id',id);
                    let {href} = this.$router.resolve({
                        path:'/newsInfo/detail',query:{id,isWhite:1} 
                    });
                    this.$store.commit('SET_IS_WHITE',true);
                    window.location.href= href;
                }
            }).catch(err=>{
                console.log('err',err);
            });
        },
        getHots(){
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
    },
}
</script>    
<style lang="scss">
    .articleDetailCon {
        background-color: #F8F8F8;
        padding-top: 30px;
        padding-bottom: 77px;
        .breadContainer {
            margin-bottom: 22px;
        }
        .cursorOn {
            cursor: pointer;
        }
        .limitWidth {
            width: 1200px;
            margin: 0 auto;
        }
        .pagCon {
            color: #666;
            font-size: 14px;
            padding-bottom: 50px;
            .pre {
                margin-bottom: 20px;
                cursor: pointer;
            }
            .next {
                margin-top: 20px;
                cursor: pointer;
            }
        }
        .articleCon {
            padding:50px 54px 0 54px;
            box-sizing: border-box;
            .articleText {
                margin-bottom: 100px;
              span{
                line-height: 1.3;
              }
                img{
                    display: block;
                    max-width: 100%;
                    margin: 10px auto;
                }
            }
            .articleTitle {
                color: #333;
                font-size: 24px;
                line-height: 24px;
                margin-bottom: 30px;
            }
            .articleTime {
                display: flex;
                justify-content: flex-start;
                align-content: center;
                align-items: center;
                font-size: 14px;
                color: #9B9EA0;
                margin-bottom: 65px;
                .timeText {
                    margin-right: 24px;
                }
            }
        }
        
        
        .contentCon {
            display: flex;
            justify-content: space-between;
            align-content: center;
            align-items: flex-start;
            .leftContent {
                width: 884px;
                background-color: #fff;
            }
            .rightContent {
                width: 300px;
            }
        }
    }
</style>
