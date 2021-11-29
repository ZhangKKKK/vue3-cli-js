<template>
  <div id="userLayout" :class="['user-layout-wrapper']">
    <div class="container">
      <router-view></router-view>
      <div class="footer">
        <div class="copyright">
          <CopyrightOutlined /> 2012-2021 <span>云想科技控股有限公司（NETJOY HOLDINGS LIMITED）    版权所有 <a href="https://beian.miit.gov.cn/" target="_blank" style="color:rgba(255,255,255,.45)">沪ICP备13002541-10号</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CopyrightOutlined } from '@ant-design/icons-vue'
export default {
  name: 'UserLayout',
  components: {
    CopyrightOutlined
  },
  data () {
    return {}
  },
  mounted () {
    document.body.classList.add('userLayout')
  },
  methods: {

  },
  beforeUnmount () {
    document.body.classList.remove('userLayout')
  }
}
</script>

<style lang="less" scoped>
  #userLayout.user-layout-wrapper {
    height: 100%;

    &.mobile {
      .container {
        .main {
          max-width: 368px;
          width: 98%;
        }
      }
    }

    .container {
      width: 100%;
      min-height: 100%;
      background: #f0f2f5 url(~@/assets/pageback@2x.png) no-repeat;
      background-size: cover;
      // padding: 200px 0 144px;
      position: relative;

      a {
        text-decoration: none;
      }

      .login-top {
        width: 368px;
        position: absolute;
        top: 90px;
        right: 10%;
      }

      .main {
        min-width: 260px;
        width: 368px;
        margin: 0 auto;
      }

      .footer {
        position: absolute;
        width: 100%;
        bottom: 0;
        padding: 0 16px;
        margin: 48px 0 24px;
        text-align: center;

        .links {
          margin-bottom: 8px;
          font-size: 14px;
          a {
            color: rgba(0, 0, 0, 0.45);
            transition: all 0.3s;
            &:not(:last-child) {
              margin-right: 40px;
            }
          }
        }
        .copyright {
          color: rgba(255, 255, 255, 0.45);
          font-size: 14px;
        }
      }
    }
  }
</style>
