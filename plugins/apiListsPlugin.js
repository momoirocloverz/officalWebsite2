import axios from '@/service';
import Vue from 'vue';
let apiLists = {
    getHotArticleList:(params)=>{
        return axios.get(`/biz/informaion/getHotArticleList`,{params:params})
    },
    getInfomationByTitle:(params)=>{
        return axios.get(`/biz/informaion/getInfomationByTitle`,{params:params})
    },
    addReadInfomation:(data)=>{
        return axios.post(`/biz/informaion/addReadInfomation`,data)
    },
    getDetailPortal:(params)=>{
        return axios.get(`/biz/informaion/getDetailPortal`,{params:params})
    },  
    getaskMarketList:(data)=>{
        return axios.post(`/biz/assignmentInfo/gwTaskMarketList`,data)
    },
    getByCodeAndLevel:(params)=>{
        return axios.get(`http://www.10000rc.com/orgrimar/dictionary/getByCodeAndLevel`,{params:params})
    },
    getAndroidLinks:(type)=>{
        let url = 'http://test.api.10000rc.com';
        if (process.env.NODE_ENV == 'production') {
            url = 'http://www.10000rc.com';
        }
        return axios.get(`${url}/orgrimar/appVersion/latest`,{
            headers: {
                os: 'Android',
                appType:type
            }
        })
    },  
    addAppointment:(data)=>{
        let url = 'http://test.api.10000rc.com';
        if (process.env.NODE_ENV == 'production') {
            url = 'http://www.10000rc.com';
        }
        return axios.post(`${url}/orgrimar/appointment/add`,data)
    },
};
Vue.prototype.ApiLists = apiLists;