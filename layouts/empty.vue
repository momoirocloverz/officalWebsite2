<template>
    <div class="emptyCon">
        <nuxt/>
        <el-dialog :visible.sync="dialogVisible"  width="1000px"  :before-close="handleClose" class="centerDialog" :show-close="false">
          <div class="flexCon">
              <div class="leftPart">
                  <div class="first">请留下您的联系方式，我们会尽快与您联系</div>
                  <div class="formCon">
                      <div class="firstLine">
                          <div class="commonTitle">公司名称</div>
                          <el-input v-model="companyName" placeholder="请输入公司名称" maxlength="20"></el-input>
                      </div>
                      <div class="secondLine">
                          <div class="divideCon">
                              <div class="commonTitle">手机号码</div>
                          <el-input v-model="phone" placeholder="请输入手机号码" maxlength="11" @blur="checkPhoneAction"></el-input>
                            </div>
                          <div class="divideCon">
                               <div class="commonTitle">姓名</div>
                          <el-input v-model="name" placeholder="请输入姓名" maxlength="20"></el-input>
                            </div>
                      </div>
                      <div class="thirdLine">
                          <div class="errLine">
                              <div class="commonTitle">所属行业</div>
                              <div class="errorMessage">
                                  <div v-show="errorShow" class="errText">
                                      {{errorHere}}
                                    </div>
                                </div>
                            </div>
                          <el-select v-model="industry" placeholder="请选择所属行业">
                            <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </div>                      
                      <div class="fourthLine">
                             <div class="commonTitle">需求描述（选填）</div>
                          <el-input
                          type="textarea"
                          :rows="2"
                          placeholder="请简单描述贵公司的需求"
                          v-model="desp" resize="none" maxlength='300'>
                        </el-input>
                    </div>
                      <el-button type="primary" :disabled="btnAble" @click="btnAction" class="btnHere">提交信息</el-button>                      
                    </div>
                </div>
              <div class="rightPart">
                  <div class="first">提交信息后您可获得</div>
                  <div class="sec">专属服务人员</div>
                  <div class="third">智慧化SaaS管理平台试用</div>
                  <div class="third">技术咨询</div>
                </div>
            </div>              
        </el-dialog>
        
        
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogVisible:false,
                companyName:'',
                phone:'',
                name:'',
                industry:'',
                desp:'',
                errorHere:'',
                errorShow:false,
                options:[],
            }
        },
        computed:{
            btnAble(){
                if( !this.companyName || !this.phone || !this.name || !this.industry   ){
                    return true;
                }else{
                    return false
                }
            }
        },
        mounted() {
            this.getLists();
        },
        methods:{
            checkPhoneAction(){
            let phoneReg = /^1\d{10}$/;
            if(this.phone){
                if(  !phoneReg.test(this.phone) ){    
                    this.errorShow = true;
                    this.errorHere = '手机号码格式错误';  
                    window.masterTimer1 = setTimeout(()=>{
                        this.errorShow = false;
                        clearTimeout(window.masterTimer1);
                    },3000);
               }else{
                   this.errorShow = false;
                   this.errorHere = '';
               }
            }else{
                this.errorShow = true;
                this.errorHere = '手机号码不能为空'; 
                window.masterTimer2 = setTimeout(()=>{
                    this.errorShow = false;
                    clearTimeout(window.masterTimer2);
                },3000);
            }
        },
        btnAction(){
            this.checkPhoneAction();
            this.$nextTick(()=>{
                if(this.errorHere){
                   }else{
                       let data = {
                           name:this.name,
                           mobile:this.phone,
                           industry:this.industry,
                           company:this.companyName,
                           source:'官网',
                       };
                       if( this.desp ){
                           data.description = this.desp;
                       }
                       this.ApiLists.addAppointment(data).then(res=>{
                           let { respCode,errorMsg } = res;
                           if(respCode == 0){
                               this.$message({
                                  message: '提交成功。',
                                  type: 'success'
                                });                              
                               this.name = '';
                                this.phone = '';
                                this.industry = '';
                                this.companyName = '';
                                 this.desp = '';
                                this.dialogVisible = false;
                           }else{
                               this.$message({
                                  message: errorMsg,
                                  type: 'error'
                                });     
                           }
                       }).catch(err=>{
                           this.$message({
                               message: err,
                               type: 'error'
                           });    
                       })
                   }
                })            
            },
            handleClose(){
                this.dialogVisible = false;
            },
            getLists(){
                let params = {
                    code:'industry',
                    level:1,
                }
                this.ApiLists.getByCodeAndLevel(params).then(res=>{
                    let { respCode,data } = res;
                    if( respCode == 0 ){
                       let final = data.map(ele=>{
                           return {
                               label:ele.dicName,
                               value:ele.dicName,
                           }
                       })
                       this.options = final;                   
                    }
                }).catch(err=>{
                    console.log('err',err);
                })
            },
        },
        
        
    }
</script>
<style lang="scss" scoped>    
    .btnHere {
        width: 160px;
    }
    .commonTitle {
        color: #666;
        font-size: 14px;
        margin-bottom: 10px;
    }
    .flexCon {
        display: flex;
        justify-content: flex-start;
        align-content: center;
        align-items: center;
        height: 636px;
        .leftPart {
            width: 680px;
            height: 100%;
            padding-top: 40px;
            padding-left: 40px;
            padding-right: 160px;
            box-sizing: border-box;
            .first {
                font-size: 20px;
                font-weight: 600;
            }
            .formCon {
                margin-top: 40px;                
                .firstLine {
                    margin-bottom: 40px;
                }
                .secondLine {
                    display: flex;
                    justify-content: space-between;
                    align-content: center;
                    align-items: center;
                    margin-bottom: 40px;
                    .divideCon {
                        width: 220px;
                    }
                }
                .thirdLine {
                    margin-bottom: 40px;
                    .errLine {
                        height: 40px;
                        display: flex;
                        justify-content: space-between;
                    }
                    .errorMessage {
                        
                    }
                    .errText {
                        height:40px;
                        background:rgba(0,0,0,0.6);
                        border-radius:4px;
                        color: #fff;
                        line-height: 40px;
                        font-size: 14px;
                        padding-left: 20px;
                        padding-right: 20px;
                    }
                }
                .fourthLine {
                    margin-bottom: 30px;
                }
            }
        }
        .rightPart {
            width: 320px;
            background-color: #3377FF;
            background-image: url('../assets/img/service.png');
            background-repeat: no-repeat;
            background-position: bottom right;
            background-size:60%;
            height: 100%;
            color: #fff;
            padding-top: 40px;
            padding-left: 40px;
            box-sizing: border-box;
            .first {
                font-size: 20px;
                font-weight: 600;
            }
            .sec {
                margin-top: 80px;
                font-size: 16px;
                font-weight: 400;
            }
            .third {
                margin-top: 35px;
                font-size: 16px;
                font-weight: 400;
            }
        }
    }
</style>
<style lang="scss">
    .emptyCon {
        .el-button--primary.is-disabled, .el-button--primary.is-disabled:active, .el-button--primary.is-disabled:focus, .el-button--primary.is-disabled:hover {
            background-color: #E6E6E6;
            border-color: #E6E6E6;
            color: #999;
        }
        .el-input__inner {
            border-width: 0;
            border-radius: 0;
            border-color: #E6E6E6;
            border-bottom-width: 1px;
            box-sizing: border-box;
            padding-left: 0;
            color: #333;
        }
        .el-input__inner {
            &:focus {
                border-bottom-color: #303133;
                border-bottom-width: 1px;
            }
        }
        .el-textarea__inner {
            color: #333;
            padding-left: 0;
            border-width: 0;
            border-radius: 0;
            border-color: #E6E6E6;
            border-bottom-width: 1px;
            box-sizing: border-box;
            &:focus {
                border-bottom-color: #303133;
                border-bottom-width: 1px;
            }
        }
        .el-select .el-input.is-focus .el-input__inner {
          border-color: #303133;
        }
        .el-select .el-input__inner:focus {
            border-color: #303133;
        }
        .el-select {
            width: 480px;
        }
        .el-dialog {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            border-radius: 20px;
            overflow: hidden;
            margin: auto !important;
            height: 636px;
            .el-dialog__header {
                padding: 0;
            }
            .el-dialog__body {
                padding: 0;
            }
        }
    }
</style>