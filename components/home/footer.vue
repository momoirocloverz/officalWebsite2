<template>
  <footer class="g-footer" v-if="$route.name!=='licence'">
    <div class="u-footer-container">
        <FooterNav/>
    </div>
      <div class="divider"></div>
      <div class="bottomSelf">
          <img src="../../assets/img/logo_white.png">
          <div class="bottomEnd">
              <div>Copyright © 2015-2020 万才科技（杭州）有限公司 版权所有</div>
              <div class="middle">浙ICP备12003285号-1</div>
              <div>ICP经营许可证浙B2-20190162</div>
            </div>
        </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'
import FooterNav from './footerNav';
export default {
  name: 'VFooter',
  components: {
    FooterNav
  },
  data () {
    return {
      maxClientWidth: 980
    }
  },
  computed: {
    ...mapState({
      isPhone: state => state.isPhone
    })
  },
  mounted () {
    const self = this
    document.body.onresize = () => {
      if (document.body.clientWidth > self.maxClientWidth) {
        self.$store.commit('PCORPHONE', false)
      } else {
        self.$store.commit('PCORPHONE', true)
      }
    }
  }
}
</script>

<style lang="scss" scope>
.g-footer {
  width: 100%;
  height: 400px;
  padding-top: 70px;
  background-color: #2E334D;
  .u-footer-container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
  }
    .divider {
        height: 1px;
        width: 1200px;
        margin: 0 auto;
        background-color: #fff;
    }
    .bottomSelf {
        padding-top: 20px;
        width: 1200px;
        margin: 0 auto;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        img {
            width: 95px;
        }
    }
    .bottomEnd {
        color: #fff;
        font-size: 14px;
        display: flex;
        justify-content: flex-end;
        align-content: center;
        align-items: center;
        .middle {
            margin-left: 40px;
            margin-right: 40px;
        }
    }
}
</style>