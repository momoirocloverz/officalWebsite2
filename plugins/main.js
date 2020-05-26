import Vue from 'vue'
// import Header from '@/components/header'
import Input from '@/components/input'
import Icon from '@/components/icon'
import newsCommonRight from '@/components/newsCommonRight'
import successExample from '@/components/successExample';
import successExampleSimple from '@/components/successExampleSimple';



// Vue.component(Header.name, Header)
Vue.component(Input.name, Input)
Vue.component(Icon.name, Icon)
Vue.component('newsCommonRight', newsCommonRight);
Vue.component('successExample', successExample);
Vue.component('successExampleSimple', successExampleSimple);
if (process.browser) {
  const sUserAgent = navigator.userAgent.toLowerCase();
  const bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
  const bIsIphone = sUserAgent.match(/iphone os/i) == 'iphone os';
  const bIsMidp = sUserAgent.match(/midp/i) == 'midp';
  const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
  const bIsUc = sUserAgent.match(/ucweb/i) == 'web';
  const bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
  const bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';
  const bIsAndroid = sUserAgent.match(/android/i) == 'android';
//  console.log(sUserAgent)
  if (bIsIpad || bIsIphone || bIsMidp || bIsUc7 || bIsUc || bIsCE || bIsWM || bIsAndroid) {
    location.href = 'http://wap.10000rc.com/';
  }
}
