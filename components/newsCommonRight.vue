<template>
    <div class="commonRightCon">
    <div class="hotsCon">
        <div class="hotsHeader">热门资讯</div>
        <template v-for="(item,index) in hotsArr">
            <li :key="index" @click="goTo(item.id)">{{ matchText[item.type] }} | {{item.title}}</li>
        </template>
    </div>
    <div class="qrcodeCon">
        <img src="@/assets/img/club_pic.png">
    </div>
    </div>
</template>
<script>
    export default {
        props:{
            hotsArr:{
                type:Array,
                default: [],
            },
        },
        data(){
            return {
                matchText:{
                    1:'公司新闻',
                    2:'媒体报道',
                    3:'常见问题',
                },
            }
        },
        methods:{
            goTo(id){
                console.log( id );
                let data = {
                    id:id,
                };
                this.ApiLists.addReadInfomation(data).then(res=>{                
                    let { respCode } = res;
                    if( respCode === 0 ){                        
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
        },
    }
</script>
<style lang="scss" scoped>
    .commonRightCon {
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
    }
</style>