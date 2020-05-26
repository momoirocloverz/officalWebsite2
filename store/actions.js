import request from '@/service'

export default {
  postAppointmentRecord :(store, params) => {
    console.log(params)
    return  request.post('/biz/appointmentRecord/save', params)
  },
  getInfoList:(params)=>{
    return request.get(`/biz/informaion/getHotArticleList`,params)
  },
} 
